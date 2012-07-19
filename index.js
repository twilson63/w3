var http = require('http'),
  filed = require('filed');

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
    if(req.method === 'GET') { 
      console.time('request');
      filed('.' + req.url).pipe(res); 
      console.timeEnd('request');
      console.log((new Date()).toString() + ' - REQUESTED...' + req.url);
    } else {
      console.log((new Date()).toString() + ' - INVALID REQUEST... ONLY GET REQUESTS SUPPORTED');
    }
  }).listen(port, function(){
    console.log('w3 server listening on port -> ' + port.toString() + '\nctrl-c to exit');
  });
}
