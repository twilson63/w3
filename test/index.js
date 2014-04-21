var server = require('../'),
  specify = require('specify');
  request = require('request');

server(3000, 'test');

specify('test root no slash', function(assert) {
  request('http://localhost:3000', function(e,r,b) {
    assert.ok(/Hello World/.test(b));
  });
});

specify('test specific page', function(assert) {
  request.get('http://localhost:3000/fixture.html', function(e,r,b) {
    assert.equal('<h1>Hello World</h1>\n', b);
  });
});

specify.run();

// Added test to ignore query strings...
/*
request('http://localhost:3000/test/fixture.html?fooo=barr', function(e, r, b){
  assert.equal(b,'<h1>Hello World</h1>\n');
  //assert.equal('<h1>Hello</h1>', b);
  process.exit(0);
});
  
request('http://localhost:3000', function(e,r,b) {
  assert.equal(b, '<h1>Main Page</h1>');
});
*/
