function reverseDigits(n: number): number {
    const reversedString = n.toString().split('').reverse().join('');
    return parseInt(reversedString, 10);
}
const example = 67;
console.log(`${example} => returns ${reverseDigits(example)}`);
