const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end(`Hello World\n`);
});

const hostname = '0.0.0.0';
const PORT = 8080;

server.listen(PORT, () => {
  console.log(`Server running at http://${hostname}:${PORT}/`);
});
