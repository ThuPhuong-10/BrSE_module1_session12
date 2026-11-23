let count = 0; // Đếm số lượng số nguyên tố đã tìm được
let num = 2;   // Bắt đầu kiểm tra từ số 2

console.log("20 số nguyên tố đầu tiên là:");

while (count < 20) {
    let isPrime = true; // Giả sử num là số nguyên tố
    
    // Kiểm tra tính nguyên tố của num từ 2 đến căn bậc hai của num (hoặc num - 1)
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false; // Nếu chia hết cho i thì không phải số nguyên tố
            break;           // Thoát vòng lặp sớm khi tìm thấy ước số
        }
    }
    
    // Nếu là số nguyên tố thì in ra và tăng biến đếm
    if (isPrime && num > 1) {
        console.log(num);
        count++;
    }
    
    num++; // Chuyển sang số tiếp theo để kiểm tra
}