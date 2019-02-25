const fs = require("fs");

function readFileThenDo(next) {
  //const file = "../../node/files/demofile.txt";
  const file = "./blah.blah";

  fs.readFile(file, {encoding: 'utf-8'}, (err, data) => {
    if (err) {
      throw err;
    }
    next(data);
  });
}

// Hint use try..catch, it does not work!
try {
  readFileThenDo(data => {
    console.log(data);
  });
} catch(err) {
  console.log("caught error: ", err);
}
