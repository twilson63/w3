var server = require('../'),
  specify = require('specify');
  request = require('request');

server(4000, 'test');

specify('test root no slash', function(assert) {
  request('http://localhost:4000', function(e,r,b) {
    assert.ok(/Hello World/.test(b));
  });
});

specify('test specific page', function(assert) {
  request.get('http://localhost:4000/fixture.html', function(e,r,b) {
    assert.equal('<h1>Hello World</h1>\n', b);
  });
});

specify.run();

