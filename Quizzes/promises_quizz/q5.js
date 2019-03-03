// This resolves a promise after "sleep" seconds, pretend it's a large file being read from disk
function readFileFake(sleep) {
  return new Promise(resolve => {
    timeoutId = setTimeout(resolve, sleep, "File is Read!!!");
  });
}

Promise.race([
  new Promise((resolve, reject) => {
    setTimeout(reject, 1000, "Reject Timeout");
    //setTimeout(resolve, 1000, "Resolve Timeout");
  }),
  readFileFake(2000)
])
  .then(val => console.log("Done after ", val))
  .catch(err => console.log("Done after ", err));
