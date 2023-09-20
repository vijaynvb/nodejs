console.log("First");
// 3 async method -> libuv

// 3rd timer
setTimeout(()=>console.log("setTimeout 1"), 0);
// 2nd promise
Promise.resolve().then(()=>console.log("Inside promise"))
// first nextick
process.nextTick(()=>console.log("Inside next tick"))
console.log("Last");