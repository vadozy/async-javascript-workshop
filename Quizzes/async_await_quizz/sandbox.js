// Play with commented code!

async function printLine1() {
  console.log("1");
  //console.log(await 42);
}

async function printLine2() {
  console.log("2");
  //console.log(await 43);
}

async function main() {
  printLine1();
  //console.log(await 44);
  printLine2();
}
main();
console.log("Finished");
