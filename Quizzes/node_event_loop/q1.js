/*
start
end
setInterval 1
promise 1
promise 2
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
    });
}, 0);
console.log("end");
