const { write } = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
  // process.exit()
  console.log(req.url, req.method, req.headers);
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<header><title>My First Page</title></header>");
  res.write("<body>");
  res.write("<h1>Hello form node.js </h1>");
  res.write("</body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
