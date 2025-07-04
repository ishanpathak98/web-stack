const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello from Frontend App!</h1>');
});

server.listen(port, hostname, () => {
  console.log(`Frontend running at http://${hostname}:${port}/`);
});
