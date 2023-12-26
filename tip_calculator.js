console.log("Welcome to the tip calculator");

var bill = parseFloat(prompt("What was the total bill? $"));
var tip = parseInt(
  prompt("How much tip would you like to give? 10, 12, or 15? ")
);
var people = parseInt(prompt("How many people to split the bill?"));

var tipAsPercent = tip / 100;
var totalTipAmount = bill * tipAsPercent;
var totalBill = bill + totalTipAmount;
var billPerPerson = totalBill / people;

// Using toFixed to round to 2 decimal places
var finalAmount = billPerPerson.toFixed(2);

console.log("Each person should pay $" + finalAmount);
