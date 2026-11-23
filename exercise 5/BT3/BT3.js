const n = 5;
//  tam giác số 1
for (let i = 1; i <= n; i++) {
    console.log('*'.repeat(i));
}
console.log('');

// tam giác số 2
for (let i = n; i >= 1; i--) {
    console.log('*'.repeat(i));
}
console.log('');

// tam giác số 3
for (let i = 1; i <= n; i++) {
    console.log(' '.repeat(n - i) + '*'.repeat(i));
}
console.log('');

// tam giác số 4
for (let i = n; i >= 1; i--) {
    console.log(' '.repeat(n - i) + '*'.repeat(i));
}
