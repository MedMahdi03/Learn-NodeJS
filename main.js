// const http = require('http');
// const fs = require("fs")
// const port = process.env.PORT || 3400;

// const server = http.createServer((req, res) => {
//    if(req.url === "/") {
//     res.writeHead(200,{"Content-Type": "text/plain"})
//     res.end("Home Page");
//    } else if (req.url === "/about") {
//     res.writeHead(200,{"Content-Type": "text/plain"})
//     res.end("About Page");
//    } else if (req.url === "/api") {
//     res.writeHead(200,{"Content-Type": "application/json"})
//     res.end(JSON.stringify({
//         firstName: "Mahdi",
//         lastName: "Sehli"
//     }));
//    } else {
//     res.writeHead(404);
//     res.end("Page not found")
//    }
// });

// server.listen(port, (err) => {
//     if (err) {
//         console.error('Failed to start server:', err);
//     } 
// });

// // Handle specific listen errors with friendly messages
// server.on('error', (err) => {
//     if (err.code === 'EADDRINUSE') {
//         console.error(`Port ${port} is already in use`);
//         // Attempt to use a different port
//         const newPort = port + 1;
//         server.listen(newPort, () => {
//             console.log(`Server running at http://localhost:${newPort}/`);
//         });
//     } else {
//         console.error('Server error:', err);
//     }
// });





// const fs = require("node:fs");
// const zlib = require("node:zlib");

// const gzip = zlib.createGzip();
// <<<<<<<<<<<<<<  ✨ Codeium Command ⭐ >>>>>>>>>>>>>>>>

// Quick Sort Algorithm in JavaScript
// function quickSort(arr) {
//     if (arr.length <= 1) {
//         return arr;
//     }
//     const pivot = arr[0];
//     const less = [];
//     const greater = [];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < pivot) {
//             less.push(arr[i]);
//         } else {
//             greater.push(arr[i]);
//         }
//     }
//     return [...quickSort(less), pivot, ...quickSort(greater)];
// }
// console.log(quickSort([]));
// <<<<<<<  164c6c72-2f42-4af2-9b30-049527d38633  >>>>>>>


// Explaining Quick Sort Algorithm:
// Quick Sort is a Divide and Conquer algorithm. It picks an element as pivot and partitions the given array around the pivot.
// There are following steps involved in quickSort function:

// 1. If the length of the array is less than or equal to 1, the array is already sorted, so it is returned as it is.

// 2. The first element of the array is chosen as the pivot element.

// 3. Two empty arrays less and greater are created.

// 4. Each element of the array is checked and if it is less than the pivot, it is added to the less array, otherwise, it is added to the greater array.

// 5. The less and greater arrays are then recursively sorted using the quickSort function.

// 6. The less array, the pivot element, and the greater array are concatenated and returned.


// const readableStream = fs.createReadStream("Learn/file.txt",{
//     encoding: "utf-8",
//     highWaterMark: 2,
// });


// readableStream.pipe(gzip).pipe(fs.WriteStream("./file2.txt.gz"))


// const writeableStream = fs.createWriteStream("Learn/file2.txt")


// readableStream.pipe(writeableStream);



















// const fs = require("node:fs/promises");


// async function readFile() {
//     try  {
//      const data = await fs.readFile("Learn/file.txt","utf-8")
//      console.log(data);
//     }catch (err) {
//      console.log(err)
//     }
// }

// readFile()




// fs.readFile("Learn/file.txt","utf-8").then(data => console.log(data)).catch(err => console.log(err))
// console.log("1")
// console.log("2")



















// const fs = require("node:fs");

// const fileTxt = fs.readFileSync("Learn/file.txt","utf-8");
// console.log("1.SyncRead:");
// console.log(fileTxt);
// console.log("2.ASyncRead:");
// fs.readFile("Learn/file.txt","utf-8",(err,data)=>{
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// })

// console.log("3.");

// fs.writeFileSync("Learn/poem.txt","The Poem: ")
// fs.writeFile("Learn/poem.txt","Hi I'am a Poem",(err)=> {
//     if(err) {
//         console.log(err)
//     }else {
//         console.log("File written")
//     }
// })

// const crypto = require("node:crypto");
// Sync password hashing
// const start = Date.now()
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// console.log("Hash: ",Date.now() - start);
// Asynchronous password hashing
// process.env.UV_THREADPOOL_SIZE = 5; // Ensure this is set before other imports

// const https = require("node:https");

// const MAX_CALLS = 16;

// const start = Date.now();

// console.log("Start Time:", start);
// for(let i = 0; i < MAX_CALLS; i++) {
// //   console.log(`Starting hash ${i + 1} at ${Date.now() - start}ms`);
// //   crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
// //     console.log(`Hash: ${i + 1}`, Date.now() - start);
// //   });
//     https.request("https://www.google.com", (res) => {
//         res.on("data",()=> {});
//         res.on("end", () => {
//             console.log(`Request: ${i + 1}`, Date.now() - start);
//         })
//     }).end();
// }

// console.log("hello");
// Promise.resolve().then(() => console.log("world"))
// process.nextTick(() => console.log("hello"))

// console.log("log 1")
// process.nextTick(() => console.log("next 1"))
// console.log("log 2")


// Promise.resolve().then(() => console.log("resolve 1"))
// setTimeout(()=> console.log("timeout 1"),1000)
// setTimeout(()=> console.log("timeout 2"),500)
// setTimeout(()=> console.log("timeout 3"),0)
// // process.nextTick(() => console.log("next Tick 1"))
// setTimeout(()=> console.log("timeout 1"),0)
// setTimeout(()=> {
//     console.log("timeout 2")
//     process.nextTick(() => console.log("nested next Tick in setTimeout"))
// },0)
// setTimeout(()=> console.log("timeout 3"),0)

// process.nextTick(() => console.log("next Tick 1"))
// process.nextTick(()=>{
//     console.log("next Tick 2")
//     process.nextTick(()=>{
//         console.log("nested next Tick")
//     })
// })
// process.nextTick(() => console.log("next Tick 3"))

// Promise.resolve().then(() => console.log("resolve 1"))
// Promise.resolve().then(() => {
//     console.log("resolve 2")
//     process.nextTick(() => console.log("nested next Tick"))
// })
// Promise.resolve().then(()=> console.log("resolve 3"))


// const fs = require("fs");
// fs.readFile(__filename,()=> {
//     console.log("this is ReadFile 1")
//     setImmediate(() => console.log("inner setImmediate in ReadFile 1")) 
//     process.nextTick(()=> 
//         console.log("nested next Tick in ReadFile 1")
// )
//     Promise.resolve().then(() => 
//         console.log("nested resolve in ReadFile 1")
// )
// })

// process.nextTick(()=> console.log("next Tick 1"))
// Promise.resolve().then(() => console.log("resolve 1"))
// setTimeout(()=> console.log("timeout 1"),0)


// for(let i = 0; i < 2000000000; i++) {}


// setImmediate(() => console.log("setImmediate 1"))
// setImmediate(()=> {
//     console.log("setImmediate 2");
//     process.nextTick(()=> console.log("nested next Tick in setImmediate 2"))
//     Promise.resolve().then(() => console.log("nested resolve in setImmediate 2"))
// })
// setImmediate(() => console.log("setImmediate 3"))

// const fs = require("fs")
// const readableStream = fs.createReadStream(__filename);
// readableStream.close();
// readableStream.on("close",()=> console.log("close"))
// setImmediate(()=> console.log("this is setImmediate"))
// setTimeout(()=> console.log("this is setTimeout"),0)
// Promise.resolve().then(()=> console.log("this is Promise"))
// process.nextTick(()=> console.log("this is nextTick"))


