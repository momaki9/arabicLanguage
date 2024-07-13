const wordElm = document.getElementById("word");
const defElm = document.getElementById("def");
const prevBtn = document.getElementById("btn0");
const meaningBtn = document.getElementById("btn1");
const nextBtn = document.getElementById("btn2");

// TODO: replace myArray name with name of obj array;
let myArray = [];

const shuffledArr = shuffleArray(myArray);

let selectedElm = shuffledArr[0];

wordElm.textContent = selectedElm.word;

let value = Number(nextBtn.getAttribute("data"));

if ((value > 0 ) && (value <= myArray.length-1)) {
    prevBtn.disabled = false;
} else if (value === 0) {
    prevBtn.disabled = true;
};

nextBtn.addEventListener("click", () => {
    if (value >= 0) {
        prevBtn.disabled = false;
    }
    defElm.textContent = "";
    if (value === myArray.length - 1) {
        nextBtn.disabled = true;
    } else {
        value = value += 1;
        if (value === myArray.length -1) {
            nextBtn.disabled = true;
        }
    }
    nextBtn.setAttribute("data", value);
    wordElm.textContent = shuffledArr[value].word;
});

prevBtn.addEventListener("click", () => {
    defElm.textContent = "";
    if (value <= 1) {
        prevBtn.disabled = true;
    }
    value--;
    if (value <= myArray.length - 2) {
        nextBtn.disabled = false;
    }
    nextBtn.setAttribute("data", value);
    wordElm.textContent = shuffledArr[value].word;
});

meaningBtn.addEventListener("click", () => {
    defElm.textContent = shuffledArr[value].def;
});