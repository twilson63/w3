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
module.exports = function(port, root){
  if(!root){ root = '.'; }
  http.createServer(function(req,res){
    if(req.method === 'GET') { 
      console.time('request');
      var url = stripQS(req.url);
      filed('.' + url).pipe(res);
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
