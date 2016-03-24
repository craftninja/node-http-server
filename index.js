// requires Node's `http` module
var http = require('http');

// Declares a function that gets invoked on every request
function handleRequest(req, res) {
  res.setHeader("Content-Type", "text/plain");
  if (req.url === '/special-request') {
    res.end('Such a special request!');
  } else if (req.url === '/not-special-request') {
    res.end('Boring')
  } else {
    res.end('Something about ' + req.url)
  }
}

// Creates an instance of a server with our callback
var server = http.createServer(handleRequest);

// Binds our server to a port, host, and then logs a message
server.listen(8080, 'localhost', function() {
  console.log("Listening on port 8080");
});
