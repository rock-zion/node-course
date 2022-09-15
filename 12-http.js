const http = require("http");

const server = http
  .createServer((req, res) => {
    // req: incoming request
    // res: response to request
    if (req.url === "/") return res.end("Welcome to our home page");
    if (req.url === "/about") return res.end("This is our about page");
    res.end(`<h1>Oops!</h1> <p>Page not found</p>`);
  })
  .listen(3131);
