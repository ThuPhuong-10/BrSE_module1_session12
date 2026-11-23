let n = +prompt('nhập số n bất kỳ');
let total = 1;

if (n === 0) {
    alert(`0! = 1`)
} else {
for (let i = 1; i <= n; i++) {
    total = total * i;
    }
alert(`${n}! = ${total}`);
}

