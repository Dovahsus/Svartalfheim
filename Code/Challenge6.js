var bill = Number(prompt("Enter the bill"));

//tip depends on the bill

if ((300 >= bill) && (bill >= 50)){
var tip = bill * 0.15;
  console.log(`Tip is ${tip}`);
} else {
  tip = bill * 0.2;
  console.log(`Tip is ${tip}`);
}

const total = bill + tip;
console.log(`Total is ${total}`);


const calcTip = function (bill){
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);