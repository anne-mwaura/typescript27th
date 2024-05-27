function capitalizeWords(input) {
    return input.split(' ').map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
}
var example = "i love you";
console.log("".concat(example, " => returns \"").concat(capitalizeWords(example), "\""));
