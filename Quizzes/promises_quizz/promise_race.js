// file name promise_race.js
//
// Question: what will be printed when running “node promise_race.js” ?

let car1 = new Promise(resolve => setTimeout(resolve, 3000, "Car 1 Wins!"));
let car2 = new Promise(resolve => setTimeout(resolve, 2000, "Car 2 Wins!"));
let car3 = new Promise(resolve => setTimeout(resolve, 1000, "Car 3 Wins!"));

Promise.race([car1, car2, car3])
  .then(value => {
    console.log(`Race 1: ${value}`);
  })
  .catch(err => {
    console.log(`Race 1: ${err}`);
  });

car1 = new Promise((_, reject) =>
  setTimeout(reject, 300, "Car 1 Crashes!")
);
car2 = new Promise(resolve => setTimeout(resolve, 2000, "Car 2 Wins!"));
car3 = new Promise(resolve => setTimeout(resolve, 1000, "Car 3 Wins!"));

Promise.race([car1, car2, car3])
  .then(value => {
    console.log(`Race 2: ${value}`);
  })
  .catch(err => {
    console.log(`Race 2: ${err}`);
  });
