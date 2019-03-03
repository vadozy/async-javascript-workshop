const util = require("util");
const fs = require("fs");
const readFile = util.promisify(fs.readFile);

/* Sequential ? 
function* fileLoader(files) {
  for (let f of files) {
    yield readFile(f, "utf8");
  }
}
*/

// Parallel
function* fileLoader(files) {
  const promises = files.map(name => readFile(name, "utf8"));
  for (let p of promises) {
    yield p;
  }
}

(async () => {
  for await (let contents of fileLoader([
    "../../node/files/demofile.txt",
    "../../node/files/demofile.other.txt"
  ])) {
    console.log(contents);
  }
})();
