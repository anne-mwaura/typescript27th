function capitalizeWords(input: string): string {
    return input.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
}
const example= "i love you";
console.log(`${example} => returns "${capitalizeWords(example)}"`);
