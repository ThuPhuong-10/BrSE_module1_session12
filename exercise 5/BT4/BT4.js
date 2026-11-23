const n = 21;
for (let i = 1; i <= 7; i++) {
    if (i === 1 || i === 7) {
        console.log('*'.repeat(n));
    } else {
        console.log('*' + ' '.repeat(n - 2) + '*');
    }
}