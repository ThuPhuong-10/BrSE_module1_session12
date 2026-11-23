alert(`Menu lựa chọn: 
Lựa chọn 1: Nhập tên của người dùng.
Lựa chọn 2: Nhập tuổi của người dùng.
Lựa chọn 3: In tên và tuổi của người dùng.
Lựa chọn 4: In bảng cửu chương của một số.
Lựa chọn 5: Kiểm tra số nhập vào là số chẵn hay lẻ.
Lựa chọn 6: Tính tổng các số từ 1 đến N (N do người dùng nhập).
Lựa chọn 7: In các số trong một dãy (người dùng nhập dãy số).
Lựa chọn 8: Kiểm tra số nhập vào có phải là số nguyên tố hay không.
Lựa chọn 9: In chuỗi đảo ngược của một chuỗi mà người dùng nhập.
Lựa chọn 10: Thoát khỏi chương trình.`);

confirm('Bạn có muốn tiếp tục?');
let choice = +prompt('Mời bạn nhập lựa chọn');


switch (choice <= 10) {
    case 1:
        let name = '';
        name = prompt('Xin hãy nhập tên');
        alert('Đã lưu tên thành công.')
        break;
    case 2:
        let age = '';
        age = +prompt('Xin hãy nhập tuổi');
        alert('Đã lưu tuổi thành công.')
        break;
    case 3:
        alert(`Tên của bạn là: ${name} \n Tuổi: ${age}`);
        break;
    case 4:
        let num1 = +prompt('Nhập số muốn hiển thị bảng cửu chương');
        if (num1 !== 0) {
        for (let i = 1; i <= 10; i++) {
            result1 = `${num1} x ${i} = ${num1 * i}`;
        }
        alert(`Bảng cửu chương của ${num1}: \n ${result1}`);
    } else {
        alert('Không có bảng cửu chương.');
    }
    break;
    case 5:
        let num2 = +prompt('Nhập một số');
        if (num2 % 2 === 0) {
            alert(`${num2} là số chẵn`);
        } else {
            alert(`${num2} là số lẻ`);
        }
        break;
    case 6:
        let num3 = +prompt('Nhập một số');
        let result3 = 0;
        for (let i = 1; i <= num3; i++) {
            result3 = result3 + i;
        }
        alert(`Tổng từ 1 đến ${num3} = ${result3}`);
        break;
    case 7:
        let arr = prompt('Nhập dãy số (các số cách nhau bằng dấu (,))');
        alert(`Các số trong dãy là: ${arr.split(',')}`);
        break;
    case 8:
        let num4 = +prompt('Nhập một số');

    
    case 9:
        let str = promt('Nhập chuỗi');
        alert(`Chuỗi đảo ngược: ${str.split('').reverse().join('')}`);
        break;
    case 10:
        alert('Đã thoát chương trình!');
        break;
    default:
        alert('Lựa chọn không hợp lệ!');
        break;
}
