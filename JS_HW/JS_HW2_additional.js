console.log("----------------- Task 1-----------------");

let i = 1;
while (i <= 10) {
    console.log(2 ** i);
    i++;
}

console.log("----------------- Task 1*-----------------");

function power(a) {
    let rez = 2 ** a;
    console.log(rez);
    return a;
}
power(3);

console.log("----------------- Task 2-----------------");

let sml = ":)";
let t = 1;
while (t <= 5) {
    console.log(sml.repeat(t));
    t++;
}

console.log("----------------- Task 2*-----------------");

function printSmile(stroka, numberOfRows) {
    let mn = 1;
    while (mn <= numberOfRows) {
        console.log(stroka.repeat(mn));
        mn++;
    }
    return stroka, numberOfRows;
}
printSmile("*", 4);

console.log("----------------- Task 3**-----------------");

function getWordStructure(word) {
    let vowels = ["a", "e", "i", "o", "u", "y"];
    let vcount = 0;
    let ccount = 0;
    let symbols = ["-", " ", ".", ",", "!"];
    for (let char of word.toLowerCase()) {
        if (vowels.includes(char)) {
            vcount++;
        } else if (symbols.includes(char)) {
            continue;
        } else ccount++;
    }
    console.log(
        "Your word consists of ",
        vcount,
        " vowels and ",
        ccount,
        " consonants letters."
    );
    return ccount, vcount;
}
console.log("-- Check#1 'case' --");
getWordStructure("case");

console.log("-- Check#2 'Case' --");
getWordStructure("Case");

console.log("-- Check#3 'Check-list' --");
getWordStructure("Check-list");

console.log("----------------- Task 4****-----------------");

function isPalindrom(word) {
    word = word.toLowerCase();
    if (word === word.split("").reverse().join("")) {
        console.log("Your word is a palindrom");
    } else console.log("Your word isn't a palindrom");
    return word;
}

console.log("-- Check#1 'abba' --");
isPalindrom("abba");

console.log("-- Check#2 'Abba' --");
isPalindrom("Abba");
