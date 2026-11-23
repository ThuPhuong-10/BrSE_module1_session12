let a = 0;
let b = 1;
let sum = 1;

while (sum % 5 !== 0) {
  a = b;
  b = sum;
  sum = a + b;
} 
console.log(sum);
