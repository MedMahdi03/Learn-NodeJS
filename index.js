const http = require("node:http");

const server = http.createServer((req, res) => {
    res.writeHead(200,{"Content-Type": "text/plain"})
    res.end("Hello World");
});
const PORT = process.env.PORT || 8002;

server.listen(PORT,() => {console.log(`Server is running on port ${PORT}`)})