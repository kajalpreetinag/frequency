const input = require("readline-sync");

let num1 = input.questionInt("Enter first number: ");
let num2 = input.questionInt("Enter second number: ");
let num3 = input.questionInt("Enter third number: ");
let num4 = input.questionInt("Enter fourth number: ");
let num5 = input.questionInt("Enter fifth number: ");

let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let count5 = 0;

if (num1 == num2) count1+=2;
if (num1 == num3) count1+=2;
if (num1 == num4) count1+=2;
if (num1 == num5) count1+=2;

if (num2 == num3) count2+=2;
if (num2 == num4) count2+=2;
if (num2 == num5) count2+=2;

if (num3 == num4) count3+=2;
if (num3 == num5) count3+=2;

if (num4 == num5) count4+=2;

if (count1 > 0) console.log(`${num1} = ${count1}`);
if (count2 > 0) console.log(`${num2} = ${count2}`);
if (count3 > 0) console.log(`${num3} = ${count3}`);
if (count4 > 0) console.log(`${num4} = ${count4}`);
if (count5 > 0) console.log(`${num5} = ${count5}`);
