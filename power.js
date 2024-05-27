function isPowerOfTwo(n) {
    if (n <= 0)
        return false;
    return (n & (n - 1)) === 0;
}
var example1 = 9;
var example2 = 12;
console.log("".concat(example1, " => returns ").concat(isPowerOfTwo(example1)));
console.log("".concat(example2, " => returns ").concat(isPowerOfTwo(example2)));
