let a =  Number(prompt('Nhập số a (a ≠ 0)'));
let b =  Number(prompt('Nhập số b'));
let c =  Number(prompt('Nhập số c'));

let delta = (b ** 2) - (4 * a * c);
let x1 = (-b + Math.sqrt(delta)) / (2 * a);
let x2 = (-b - Math.sqrt(delta)) / (2 * a);

// tìm nghiệm
if (delta > 0) {
alert(`PT có hai nghiệm phân biệt là x1 = ${x1}, x2 = ${x2}`);
} else if (delta === 0) {
    alert(`PT có nghiệm kép là x1 = x2 = ${x1}`);
} else {
    alert('PT vô nghiệm');
}