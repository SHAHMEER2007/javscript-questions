// ================= FOR LOOP (Q1 – Q5) =================

// Q1: Print numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
console.log("-----------");

// Q2: Print even numbers between 1 and 20
for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}
console.log("-----------");

// Q3: Multiplication table of 7
for (let i = 1; i <= 10; i++) {
  console.log(`7 x ${i} = ${7 * i}`);
}
console.log("-----------");

// Q4: Numbers from 10 down to 1
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
console.log("-----------");

// Q5: Sum of first 50 natural numbers
let sum = 0;
for (let i = 1; i <= 50; i++) {
  sum += i;
}
console.log("Sum of first 50 natural numbers =", sum);
console.log("============================\n");


// ================= WHILE LOOP (Q6 – Q10) =================

// Q6: Numbers 1 to 5
let a = 1;
while (a <= 5) {
  console.log(a);
  a++;
}
console.log("-----------");

// Q7: Odd numbers 1 to 15
let b = 1;
while (b <= 15) {
  if (b % 2 !== 0) console.log(b);
  b++;
}
console.log("-----------");

// Q8: Factorial of 5
let n = 5;
let fact = 1;
let i = 1;
while (i <= n) {
  fact *= i;
  i++;
}
console.log("Factorial of 5 =", fact);
console.log("-----------");

// Q9: Numbers from 20 to 10
let c = 20;
while (c >= 10) {
  console.log(c);
  c--;
}
console.log("-----------");

// Q10: Keep printing until sum > 30
let d = 1;
let total = 0;
while (total <= 30) {
  console.log(d);
  total += d;
  d++;
}
console.log("============================\n");


// ================= DO-WHILE LOOP (Q11 – Q15) =================

// Q11: Numbers 1 to 5
let e = 1;
do {
  console.log(e);
  e++;
} while (e <= 5);
console.log("-----------");

// Q12: Multiples of 3 up to 30
let f = 3;
do {
  console.log(f);
  f += 3;
} while (f <= 30);
console.log("-----------");

// Q13: Reverse 15 to 1
let g = 15;
do {
  console.log(g);
  g--;
} while (g >= 1);
console.log("-----------");

// Q14: Numbers until product > 1000
let h = 1;
let product = 1;
do {
  console.log(h);
  product *= h;
  h++;
} while (product <= 1000);
console.log("-----------");

// Q15: 1–10 but skip 5
let j = 1;
do {
  if (j !== 5) console.log(j);
  j++;
} while (j <= 10);
console.log("============================\n");


// ================= CONDITIONAL STATEMENTS (Q16 – Q20) =================

// For input, you can hardcode or use prompt-sync (Node) / prompt() (browser).

// Q16: Positive / Negative / Zero
let num = 0; // change value to test
if (num > 0) console.log("Positive");
else if (num < 0) console.log("Negative");
else console.log("Zero");
console.log("-----------");

// Q17: Even or Odd
let evenOdd = 13;
console.log(evenOdd % 2 === 0 ? "Even" : "Odd");
console.log("-----------");

// Q18: Largest of three numbers
let x = 12, y = 42, z = 8;
if (x >= y && x >= z) console.log(`${x} is largest`);
else if (y >= x && y >= z) console.log(`${y} is largest`);
else console.log(`${z} is largest`);
console.log("-----------");

// Q19: Leap year or not
let year = 2028;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)
  console.log("Leap year");
else
  console.log("Not a leap year");
console.log("-----------");

// Q20: Day of the week (1–7)
let day = 3;
switch (day) {
  case 1: console.log("Monday"); break;
  case 2: console.log("Tuesday"); break;
  case 3: console.log("Wednesday"); break;
  case 4: console.log("Thursday"); break;
  case 5: console.log("Friday"); break;
  case 6: console.log("Saturday"); break;
  case 7: console.log("Sunday"); break;
  default: console.log("Invalid input");
}
