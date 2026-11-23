let diemKT = parseFloat(prompt('Nhập điểm kiểm tra')).toFixed(2);
let diemGK = parseFloat(prompt('Nhập điểm giữa kỳ')).toFixed(2);
let diemCK = parseFloat(prompt('Nhập điểm cuối kỳ')).toFixed(2);

// tính điểm trung bình
let diemTB = (diemKT * 0.3 + diemGK * 0.3 + diemCK * 0.4);

// xếp loại học lực
if (diemTB >= 9) {
    alert(`Điểm trung bình là: ${diemTB.toFixed(1)}
Xếp loại học lực: Xuất sắc`);
} else if (diemTB >= 8) {
     alert(`Điểm trung bình là: ${diemTB.toFixed(1)}
Xếp loại học lực: Giỏi`);
} else if (diemTB >= 6.5) {
     alert(`Điểm trung bình là: ${diemTB.toFixed(1)}
Xếp loại học lực: Khá`);
} else if (diemTB >= 5) {
     alert(`Điểm trung bình là: ${diemTB.toFixed(1)}
Xếp loại học lực: Trung bình`);
} else {
     alert(`Điểm trung bình là: ${diemTB.toFixed(1)}
Xếp loại học lực: Yếu`);
}
