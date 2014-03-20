var http = require('http'),
  filed = require('filed'),
  fs = require('fs');

// w3 static file server
// 
// Why?
// To make it stupid easy to fire up a web server in any directory
//
// Pass any port via command line
//
// w3 3000
module.exports = function(port, root, pushState) {
  if(!root){ root = '.'; }
  http.createServer(function(req,res){
    if(req.method === 'GET') { 
      console.time('request');
      var url = stripQS(req.url);
      if (!url) url = '/index.html';
      if (url.indexOf('.') < 0) { url = pushState; }
      var stream = filed(root + url);
      stream.on('end', function() {
        console.log('-------------------------------------------------');
        console.log((new Date()).toString() + ' - REQUESTED...' + url);
        console.timeEnd('request');
      });
      filed(root + url).pipe(res);
      
      //console.timeEnd('request');
      //console.log((new Date()).toString() + ' - REQUESTED...' + url);
    } else {
      console.log((new Date()).toString() + ' - INVALID REQUEST... ONLY GET REQUESTS SUPPORTED');
    }
  }).listen(port, function(){
    console.log('w3 serving ' + root + '  on port -> ' + port.toString() + '\nctrl-c to exit');
  });
}

function stripQS(url){
  var pos = url.indexOf('?');
  return pos>-1 ?
    url.substring(0, pos) : 
    url;
}
