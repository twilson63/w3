var server = require('../'),
  assert = require('assert'),
  request = require('request');

server(3000);

// Added test to ignore query strings...
request('http://localhost:3000/test/fixture.html?fooo=barr', function(e, r, b){
  assert.equal(b,'<h1>Hello World</h1>\n');
  //assert.equal('<h1>Hello</h1>', b);
  process.exit(0);
});
  