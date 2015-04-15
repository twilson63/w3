var http = require('http'),
  st = require('st'),
  fs = require('fs');

// w3 static file server
// 
// Why?
// To make it stupid easy to fire up a web server in any directory
//
// Pass any port via command line
//
// w3 3000 --directory public --pushstate
//
module.exports = function(port, root, pushState) {
  if(!root){ root = '.'; }
  var mount = st({ path: root, url: '/', cache: false, index: 'index.html', passthrough: (pushState ? true: false)});
  http.createServer(function(req,res){
    console.time('duration');
    mount(req, res, function() {
      // if passthrough true always send index.html
      fs.createReadStream(root + '/index.html').pipe(res);
    });
    res.once('finish', function() {
      console.log('%s %s - %s -> %s', (new Date()), req.method, req.url, res.statusCode);
      console.timeEnd('duration');        
    });
  }).listen(port, function(){
    console.log('w3 serving ' + root + '  on port -> ' + port.toString() + '\nctrl-c to exit');
  });
}
