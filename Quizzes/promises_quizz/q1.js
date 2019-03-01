const fs = require("fs");

function readFile(filename, encoding) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, encoding, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
  
}

const file = "../../node/files/demofile.txt";
//const file = "./blah.blah";

readFile(file, "utf-8")
    .then(data => console.log("readFile", data))
    .catch(err => console.log("Caught promise error:\n", err));

// Using node util.promisify
const util = require("util");
const readFile2 = util.promisify(fs.readFile);

readFile2(file, "utf-8")
    .then(data => console.log("readFile2: ", data))
    .catch(err => console.log("Caught promise error:\n", err));
