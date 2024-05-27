function countVowels(sentence: string): number {
    const vowels = 'aeiouAEIOU';
    let count = 0;

    for (let char of sentence) {
        if (vowels.indexOf(char) !== -1) {
            count++;
        }
    }

    return count;
}
const example = "volleyball";
console.log(`"${example}" => returns ${countVowels(example)}`); 
