function doAsyncTask(cb) {
  setImmediate(cb);
  // process.nextTick(cb);
}
doAsyncTask(_ => console.log(message));

let message = "Callback Called";
