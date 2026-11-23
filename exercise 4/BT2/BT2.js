let temp = Number(prompt('Mời nhập nhiệt độ hiện tại'));
while (temp >= 100 || temp <= 20) {
    if (temp >= 100) {
        alert('Nhiệt độ cao! Hãy giảm nhiệt độ');
    } else {
        alert('Nhiệt độ thấp! Hãy tăng nhiệt độ');
    }
    temp = Number(prompt('Nhập lại nhiệt độ'));
}
alert('Nhiệt độ phù hợp');