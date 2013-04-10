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
module.exports = function(port){
  http.createServer(function(req,res){
    // handle favicon request..
    if (url === '/favicon.ico') {
      r.writeHead(200, {'Content-Type': 'image/x-icon'} );
      r.end();
      console.log('favicon requested');
    } else if(req.method === 'GET') { 
      console.time('request');
      var url = stripQS(req.url);
      // Single Page HTML5PushState Support
      fs.stat('.' + url, function(err, exists) {
        if (err && err.code === 'ENOENT') { url = '/' }
        filed('.' + url).pipe(res);
      });
      console.timeEnd('request');
      console.log((new Date()).toString() + ' - REQUESTED...' + url);
    } else {
      console.log((new Date()).toString() + ' - INVALID REQUEST... ONLY GET REQUESTS SUPPORTED');
    }
  }).listen(port, function(){
    console.log('w3 server listening on port -> ' + port.toString() + '\nctrl-c to exit');
  });
}

function stripQS(url){
  var pos = url.indexOf('?');
  return pos>-1 ?
    url.substring(0, pos) : 
    url;
}
