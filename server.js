import http from "http";
import os from "os";

const getServerIPAddress = () => {
  const networkInterfaces = os.networkInterfaces();

  const ipv4Interfaces =
    networkInterfaces["Ethernet"] ||
    networkInterfaces["eth0"] ||
    networkInterfaces["en0"]; // Adjust interface name as needed

  return ipv4Interfaces.find(
    (interface1) => !interface1.internal && interface1.family === "IPv4"
  ).address;
};

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end(`Hello World , ${getServerIPAddress()}\n`);
});

const PORT = 80;

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
