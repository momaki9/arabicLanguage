
const randomFromArray = function (arr) {
    const value = Math.floor(Math.random() * arr.length);
    return arr[value];
};

const randomIndFromArray = function (arr) {
    const value = Math.floor(Math.random() * arr.length);
    return value;
};


const highlightRandomLetter = function (str) {
    const split = str.split("");
    const randomIndex = randomIndFromArray(split);
    split.splice(randomIndex, 1, `<span class='red'>${str[randomIndex]}</span>`);
    const output = split.join("");
    return output;
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