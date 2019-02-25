const fs = require("fs");

function readFileThenDo(next) {
  //const file = "../../node/files/demofile.txt";
  const file = "./blah.blah";

  fs.readFile(file, {encoding: 'utf-8'} , (err, data) => {
    next(err, data);
  });
}

readFileThenDo((err, data) => {
  if (err) {
    console.log("Got error", err);
  } else {
    console.log(data);
  }
});
