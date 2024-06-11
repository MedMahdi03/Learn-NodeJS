const cluster = require("node:cluster");
const http = require("node:http");
const OS = require("node:os")
console.log(OS.cpus().length)
if (cluster.isMaster) {
    console.log(`Master process ${process.pid} is running`)
    cluster.fork()
    cluster.fork()
}else {
    console.log(`Worker process ${process.pid} is running`)
    const server = http.createServer((req, res) => {
        if(req.url === "/") {
            res.writeHead(200,{"Content-Type": "text/plain"})
            res.end("Home Page");
        }else if (req.url === "/slow-page") {
            for(let i= 0; i < 60000000; i++) {}
            res.writeHead(200,{"Content-Type": "text/plain"})
            res.end("Slow Page");
        }
    })
    server.listen(8001,() => {console.log("Server is running on port 8001")})
}