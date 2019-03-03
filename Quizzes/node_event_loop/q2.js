/*
start
end
setInterval 1
promise 1
promise 2
processNextTick 1
setImmediate 1
promise 3
promise 4
*/

console.log("start");
const interval = setInterval(() => {
  console.log("setInterval 1");
  Promise.resolve()
    .then(_ => {
      console.log("promise 1");
    })
    .then(_ => {
      console.log("promise 2");
    })
    .then(_ => {
      clearInterval(interval);
    })
    .then(_ => {
      process.nextTick(() => {
        console.log("processNextTick 1");
      })
    })
    .then(_ => {
      setImmediate(() => {
        console.log("setImmediate 1");
        Promise.resolve()
          .then(() => {
            console.log("promise 3");
          })
          .then(() => {
            console.log("promise 4");
          });
      })
    })
}, 0);
console.log("end");
