var http = require('http');
var send = require('send');
var parseUrl = require('parseurl')
var fs = require('fs');

// w3 static file server
// 
// Why?
// To make it stupid easy to fire up a web server in any directory
//
// Pass any port via command line
//
// w3 [dir] --port 3000 
//
module.exports = function(port=3000, root='.', options={cache: false}) {
  //var mount = st({ path, url: '/', cache: options.cache, index: 'index.html'});

  http.createServer(function(req,res){
    send(req, parseUrl(req).pathname, { root, extensions: ['html'] }).pipe(res)
      /*
    console.log(path + req.url + '.html')
    if (fs.statSync(path + req.url) {
      return filed(path + req.url).pipe(res)
    } else if (fs.statSync(path + req.url + '.html')) {
      return filed(path + req.url + '.html').pipe(res);
    }
    filed(path + '/index.html').pipe(res);
    */
  }).listen(port, '0.0.0.0', function(){
    console.log(JSON.stringify({ 
      name: 'w3',
      port: port.toString(),
      directory: root,
      exit: 'ctrl-c'
    }, null , 2));
  });
}
