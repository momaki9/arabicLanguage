
const randomFromArray = function (arr) {
    const value = Math.floor(Math.random() * arr.length);
    return arr[value];
};

const randomIndFromArray = function (arr) {
    const value = Math.floor(Math.random() * arr.length);
    return value;
};

const alphabet = ["ا", "إ", "أ", "ب", "ت", "ث", "ج", "ح", "خ", "د", "ذ", "ر", "ز", "س", "ش", "ص", "ض", "ط", "ظ", "ع", "غ", "ف", "ق", "ك", "ل", "م", "ن", "هـ", "ه", "و", "ي"];

const highlightRandomLetter = function (str) {
    const split = str.split("");
    const randomIndex = randomIndFromArray(split);
    if (alphabet.includes(str[randomIndex])) {
        split.splice(randomIndex, 1, `<span class='red'>${str[randomIndex]}</span>`);
        console.log(split)
        const output = split.join("");
        return output;
    } else {
        console.log(split)
        var prevIndex = randomIndex - 1;
        split.splice(prevIndex, 1, `<span class='red'>${str[prevIndex]}</span>`);
        const output = split.join("");
        return output;
    }
};

const instance = randomFromArray(words);
const randomWord = instance.word;
const wordWithHighlight = highlightRandomLetter(randomWord);

const wordElm = document.getElementById("word");

wordElm.innerHTML = wordWithHighlight;

const btnElm = document.getElementById("btn");

btnElm.addEventListener("click", () => {
    window.location.reload();
});