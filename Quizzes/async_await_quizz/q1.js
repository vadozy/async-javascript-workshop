// Using promises
const util = require("util");
const fs = require("fs");
const readFile = util.promisify(fs.readFile);

const files = ["../../node/files/demofile.txt", "../../node/files/demofile.other.txt"];

const promises = files.map(name => readFile(name, { encoding: "utf8" }));
Promise.all(promises).then(values => {
  // <-- Uses .all
  console.log(values);
});

// Using async/await

// Solution 1 (sequential read, not concurrent)
(async () => {
  const results = [];
  for (n of files) {
    results.push(await readFile(n, { encoding: "utf8" }));
  }
  return results;
})()
  .then(console.log);

// Solution 2 (concurrent)
(async () => {
  const promises = files.map(name => readFile(name, { encoding: "utf8" }));
  return Promise.all(promises);
})()
  .then(console.log);

// Solution 2 b
(async () => {
  const promises = files.map(name => readFile(name, { encoding: "utf8" }));
  console.log(await Promise.all(promises));
})();
