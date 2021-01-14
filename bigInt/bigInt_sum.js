let a = prompt("Nhập số nguyên a: ")
let b = prompt("Nhập số nguyên b: ")

let offset = Math.abs(a.length - b.length)

if (a.length < b.length) {
    for (let i = 0; i < offset; i++) {
        a = '0' + a
    }
} else {
    for (let i = 0; i < offset; i++) {
        b = '0' + b
    }
}
let carry = 0;
let count = 1;
let result = "";
let s = 0;
for (let i = a.length - 1; i > -1; i--) {
    s = parseInt(a[i]) + parseInt(b[i]) + carry;
    if (i == 0) {
        result = s + result;
        break;
    }
    if (s > 9) {
        carry = 1;
        s = s - 10;
    } else {
        carry = 0;
    }
    result = s + result;
}
alert(result);