const util = require("util");
const fs = require("fs");
const readFile = util.promisify(fs.readFile);

const files = ["../../node/files/demofile.txt", "../../node/files/demofile.other.txt"];

let promises = files.map(name => readFile(name, "utf8"));
Promise.all(promises)
  .then(values => {
    console.log(values);
  })
  .catch(err => console.error("Error: ", err));
