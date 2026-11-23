let soTien = +prompt('nhập số tiền gửi');
let soThang = +prompt('nhập số tháng gửi');
let laiSuat = parseFloat(prompt('nhập lãi suất (%)')).toFixed(2);
let tongTien = soTien;

for (let i = 1; i <= soThang; i++) {
    tongTien = tongTien + (tongTien * laiSuat);
} 

let tienLoi = tongTien - soTien;

alert(`Tổng tiền sau ${soThang} tháng với lãi suất ${laiSuat}% là ${tongTien.toFixed(0)} VND
Tiền lời = ${tienLoi.toFixed(0)} VND`);