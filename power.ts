function isPowerOfTwo(n: number): boolean {
    if (n <= 0) return false;
    return (n & (n - 1)) === 0;
}
const example1 = 9;
const example2 = 12;

console.log(`${example1} => returns ${isPowerOfTwo(example1)}`); 
console.log(`${example2} => returns ${isPowerOfTwo(example2)}`);