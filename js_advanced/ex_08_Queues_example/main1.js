const fs = require("node:fs")
fs.readFileSync("/file.txt", data =>{
    console.log("read file 1");
});
Promise.resolve().then(()=>console.log("promise 1"));
// these in build modules like async.js and observables and rxjs 
process.nextTick(()=>console.log("NextTick 1"));
setTimeout(()=>console.log("setTimeout 1"),0);
// check queue
setImmediate(()=>console.log("setImmediate 1"));
for (let i = 0; i < 1000000000; i++) {}