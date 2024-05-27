function reverseDigits(n) {
    var reversedString = n.toString().split('').reverse().join('');
    return parseInt(reversedString, 10);
}
var example = 67;
console.log("".concat(example, " => returns ").concat(reverseDigits(example)));
