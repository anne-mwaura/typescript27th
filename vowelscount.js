function countVowels(sentence) {
    var vowels = 'aeiouAEIOU';
    var count = 0;
    for (var _i = 0, sentence_1 = sentence; _i < sentence_1.length; _i++) {
        var char = sentence_1[_i];
        if (vowels.indexOf(char) !== -1) {
            count++;
        }
    }
    return count;
}
// Example usage:
var example = "volleyball";
console.log("\"".concat(example, "\" => returns ").concat(countVowels(example))); // returns 3
