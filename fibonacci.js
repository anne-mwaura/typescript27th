function generateFibonaccisequence(limit) {
    var fibonacci = [0, 1];
    for (var i = 2;; i++) {
        var next = fibonacci[i - 1] + fibonacci[i - 2];
        if (next > limit)
            break;
        fibonacci.push(next);
    }
    return fibonacci;
}
var limit = 100;
console.log(generateFibonaccisequence(limit));
