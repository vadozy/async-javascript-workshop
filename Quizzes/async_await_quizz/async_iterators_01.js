(async () => {
  const util = require("util");
  const fs = require("fs");
  const readFile = util.promisify(fs.readFile);

  const files = ["../../node/files/demofile.txt", "../../node/files/demofile.other.txt"];
  const promises = files.map(name => readFile(name, "utf8"));

  console.log("0")
  for (let content of promises) {
    console.log(content);
  }

  console.log("1")
  for (let content of promises) {
    await content;
    console.log(content);
  }
  
  console.log("2")
  for await (let content of promises) {
    console.log(content);
  }

  console.log("3")
  for (let content of promises) {
    content = await content;
    console.log(content);
  }
})();
