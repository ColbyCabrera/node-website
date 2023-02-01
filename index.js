const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    if (req.url != "/favicon.ico") {
      const filename = "." + req.url;
      fs.readFile(filename, (err, data) => {
        if (err) {
          res.writeHead(404, { "Content-Type": "text/html" });
          return res.end(fs.readFileSync("./404.html", "utf8"));
        }

        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      });
    }
  })
  .listen(8080);
