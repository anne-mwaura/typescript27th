function generateFibonaccisequence(limit: number): number[] {
    const fibonacci: number[] = [0, 1];
    for (let i = 2; ; i++) {
        const next = fibonacci[i - 1] + fibonacci[i - 2];
        if (next > limit) break;
        fibonacci.push(next);
    }
    return fibonacci;
}

const limit = 100;
console.log(generateFibonaccisequence(limit));
