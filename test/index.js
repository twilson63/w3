var server = require('../'),
  assert = require('assert'),
  request = require('request');

server(3000);

request('http://localhost:3000/test/fixture.html', function(e, r, b){
  assert.equal(b,'<h1>Hello World</h1>\n');
  //assert.equal('<h1>Hello</h1>', b);
  process.exit(0);
});
  