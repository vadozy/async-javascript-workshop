let car1 = new Promise(resolve => setTimeout(resolve, 1000, "CarA 1."));
let car2 = new Promise(resolve => setTimeout(resolve, 2000, "CarA 2."));
let car3 = new Promise(resolve => setTimeout(resolve, 3000, "CarA 3."));

Promise.race([car1, car2, car3]).then(value => {
  console.log("Promise Resolved", value);
});

car1 = new Promise((_, reject) =>
  setTimeout(reject, 300, "CarB 1 Crashed.")
);
car2 = new Promise(resolve => setTimeout(resolve, 1000, "CarB 2."));
car3 = new Promise(resolve => setTimeout(resolve, 3000, "CarB 3."));

Promise.race([car1, car2, car3])
  .then(value => {
    console.log("Promise Resolved", value);
  })
  .catch(err => {
    console.log("Promise Rejected", err);
  });
