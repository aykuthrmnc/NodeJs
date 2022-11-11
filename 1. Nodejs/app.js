// ------------------------------------- Path Modulu
// const path = require("path");

// console.log(path.resolve("app.js"));
// console.log(path.extname("app.js"));
// console.log(path.parse(__filename));
// var result = path.parse(__filename);
// console.log(result.base);
// console.log(result.dir);
// console.log(result.ext);
// console.log(result.name);
// console.log(result.root);

// ------------------------------------- Url Modulu
// const url = require("url");

// const address = 'http://aykuthrmnc.com/kurslar?year=2019&month=nisan';
// let result = url.parse(address, true);
// console.log(result);
// console.log(result.query.year);

// ------------------------------------- File System Modulu
// const fs = require("fs");

// const files = fs.readdir("./", function (error, data) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(data);
//   }
// });

// const data = fs.readFile("index.html", "utf-8", function (error, data) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(data);
//   }
// });

// fs.writeFile("deneme.txt", "Hello World", function (error) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Dosya Oluşturuldu.");
//   }
// });

// fs.appendFile("deneme.txt", "Hello World", function (error) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Dosya Oluşturuldu.");
//   }
// });

// fs.unlink("deneme.txt", function (error) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Dosya Silindi.");
//   }
// });

// fs.rename("deneme.txt", "deneme1.txt", function (error) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Dosya İsmi Değiştirildi.");
//   }
// });

// ------------------------------------- Events Modulu
// const Logger = require("./logger");
// const logger = new Logger();
// // listener kayit et
// logger.on("connection", (args) => console.log("Bağlantı kuruldu.", args));
// // eventi tetikle
// logger.log("Aykut Login oldu.")

// ------------------------------------- Http Modulu
// const http = require("http");

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.write("Hello World");
//     res.end();
//   }
//   if (req.url === "/api/products") {
//     res.write("product list");
//     res.end();
//   }
// });

// server.on("connection", function () {
//   console.log("New Connection");
// });

// server.listen(3000);
// console.log("Listening port on 3000...");

// ------------------------------------- Sending Response
// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//   /*
//   //   res.setHeader("Content-Type", "text/plain");
//   //   res.setHeader("Content-Type", "application/json");
//   res.setHeader("Content-Type", "text/html");
//   res.statusCode = 200;
//   res.statusMessage = "Ok";
//   //   res.write("Hello World");
//   //   res.write(JSON.stringify({ name: "Samsung S8", price: 3000 }));
//   res.write("<html>");
//   res.write("<head><title>My First Page</title></head>")
//   res.write("<body><h1>Hello From Nodejs Server</h1></body>")
//   res.write("</html>")
//   res.end();
//   */

//   fs.readFile("index.html", function (error, file) {
//     if (error) {
//       res.setHeader("Content-Type", "text/plain");
//       res.statusCode = 404;
//       res.statusMessage = "Not Found";
//       res.end("Dosya bulunamadı.");
//     } else {
//       res.setHeader("Content-Type", "text/html");
//       res.statusCode = 200;
//       res.statusMessage = "Ok";
//       res.end(file);
//     }
//   });
// });

// server.listen(3000);
// console.log("Listening port on 3000...");

// ------------------------------------- Routing Request
// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//   const url = req.url;
//   const method = req.method;

//   if (url === "/") {
//     res.setHeader("Content-Type", "text/html");
//     res.write(`
//         <html>
//             <head>
//                 <title>Enter Message</title>
//             </head>
//             <body>
//                 <form method="POST" action="/log">
//                     <input type="text" name="message">
//                     <button type="submit">Save</button>
//                 </form>
//             </body>
//         </html>
//         `);
//     return res.end();
//   }

//   if (url === "/log" && method === "POST") {
//     fs.appendFileSync("message.txt", "deneme");
//     res.statusCode = 302;
//     res.setHeader("Location", "/");
//     return res.end();
//   }
// });
// server.listen(3000);
// console.log("Listening port on 3000...");

// ------------------------------------- Parsing Request Body
// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//   const url = req.url;
//   const method = req.method;

//   if (url === "/") {
//     res.setHeader("Content-Type", "text/html; charset=value");
//     res.write(`
//         <html>
//             <head>
//                 <title>Enter Message</title>
//             </head>
//             <body>
//                 <form method="POST" action="/log">
//                     <input type="text" name="message">
//                     <button type="submit">Save</button>
//                 </form>
//             </body>
//         </html>
//         `);
//     return res.end();
//   }

//   if (url === "/log" && method === "POST") {
//     // body parsing (bodyParser)

//     const body = [];

//     req.on("data", (chunk) => {
//       body.push(chunk);
//       console.log(chunk);
//     });

//     req.on("end", () => {
//       const bodyParsed = Buffer.concat(body).toString();
//       const message = bodyParsed.split("=")[1];
//       fs.appendFileSync("message.txt", message);
//     });

//     res.statusCode = 302;
//     res.setHeader("Location", "/");
//     return res.end();
//   }
// });
// server.listen(3000);
// console.log("Listening port on 3000...");

// ------------------------------------- Route Modulu
const http = require("http");
const routes = require("./routes");

const server = http.createServer(routes);
server.listen(3000);
console.log("Listening port on 3000...");
