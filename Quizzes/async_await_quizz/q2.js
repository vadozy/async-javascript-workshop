const util = require("util");
const fs = require("fs");
const readFile = util.promisify(fs.readFile);

const fileIterator = files => ({
  [Symbol.asyncIterator]: () => ({
    x: 0,
    next() {
      if (this.x < files.length) {
        return readFile(files[this.x++], "utf8")
          .then(value => ({done: false, value}));
      } else {
        return Promise.resolve({done: true});
      }
    }
  })
});

(async () => {
  for await (let x of fileIterator([
    "../../node/files/demofile.txt",
    "../../node/files/demofile.other.txt"
  ])) {
    console.log(x);
  }
})();
