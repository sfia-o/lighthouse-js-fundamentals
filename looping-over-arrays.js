const amounts = [34.00, 6.00, 4.99, 27,99];

/*
let total = 0;

for (let i= 0; i < amounts.length;  i++){
  total += amounts[i];
}

console.log("Order total is ", total);
*/

let total = 0;
for (let amount of amounts) {
  total += amount;
}

console.log("Order total is: ", total);