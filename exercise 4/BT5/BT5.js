let a = 0;
let b = 1;
let total = 0;

console.log('20 số đầu tiên là: ');
for (let i = 1; i <= 20; i++) {
  console.log(a);
  total = total + a;
  let sum = a + b;
  a = b;
  b = sum;
}
console.log('Tổng 20 số đầu tiên là: ');
console.log(total);
