let a = Number(prompt('Nhập một số a'));
let b = Number(prompt('Nhập một số b'));
let equal = a % b;
if (equal === 0) {
    alert(`${a} chia hết cho ${b}`);
} else {
    alert(`${a} không chia hết cho ${b}`);
}