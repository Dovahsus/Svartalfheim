var bill = 430;
var tip;

if (bill > 50 && bill < 300) {
  tip = bill * 0.15;
  console.log(tip);
} else if (bill > 300) {
  tip = bill * 0.2;
  console.log(tip);
}
var final = bill + tip;
console.log(final);

// const bill = 400;
// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

// All for what to pay
