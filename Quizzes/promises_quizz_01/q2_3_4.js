const fs = require("fs");
const zlib = require("zlib");

// Using node util.promisify
const util = require("util");
const gzip = util.promisify(zlib.gzip);


/*
function gzip(data) {
  return new Promise((resolve, reject) => {
    zlib.gzip(data, (error, result) => {
      if (error) {
        reject("Error in zlib.gzip");
      } else {
        resolve(result);
      }
    });
  });
}
*/

function readFile(filename, encoding) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, encoding, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
}

const file = "../../node/files/demofile.txt";
//const file = "./blah.blah";

readFile(file, "utf-8")
  .then(data => gzip(data))
  .then(data => console.log(data))
  .catch(err => console.log("Caught: ", err))
  .finally(_ => console.log("Finally block"));

