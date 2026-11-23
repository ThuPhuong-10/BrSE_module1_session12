let a = Number(prompt('Nhập số a'));
let b = Number(prompt('Nhập số b'));
if (a !== 0) {
alert('x = ' + (-b / a));
} else if (b === 0) {
    alert('Phương trình vô số nghiệm');
} else {
    alert('Phương trình vô nghiệm');
}
