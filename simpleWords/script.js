const wordElm = document.getElementById("word");
const defElm = document.getElementById("def");
const prevBtn = document.getElementById("btn0");
const meaningBtn = document.getElementById("btn1");
const nextBtn = document.getElementById("btn2");

/* older code
const chosenWord = chooseOneWord(words);

wordElm.textContent = chosenWord.word;

btn1.addEventListener("click", function(){
    defElm.textContent = chosenWord.def;
});

btn2.addEventListener("click", function(){
    window.location.reload();
});

*/

// updated code

// TODO: refactor this to select the first element from the shuffled arary
const shuffledWords = shuffleArray(words);

let chosenWord = shuffledWords[0];

wordElm.textContent = chosenWord.word;

let value = Number(nextBtn.getAttribute("data"));

if ((value > 0 ) && (value <= words.length-1)) {
    prevBtn.disabled = false;
    // backBtn.removeAttribute("class", "hidden");
} else if (value === 0) {
    // backBtn.setAttribute("class", "hidden");
    prevBtn.disabled = true;
};

nextBtn.addEventListener("click", () => {
    // console.log("disable next?", value)
    if (value >= 0) {
        prevBtn.disabled = false;
    }
    defElm.textContent = "";
    if (value === words.length - 1) {
        nextBtn.disabled = true;
        // value = 0
    } else {
        value = value += 1;
        if (value === words.length -1) {
            nextBtn.disabled = true;
        }
    }
    nextBtn.setAttribute("data", value);
    wordElm.textContent = shuffledWords[value].word;
});

prevBtn.addEventListener("click", () => {
    defElm.textContent = "";
    if (value <= 1) {
        prevBtn.disabled = true;
        // backBtn.setAttribute("class", "hidden");
    }
    value--;
    if (value <= words.length - 2) {
        // console.log("disable next? - here", value)
        nextBtn.disabled = false;
    }
    nextBtn.setAttribute("data", value);
    wordElm.textContent = shuffledWords[value].word;
});

meaningBtn.addEventListener("click", () => {
    defElm.textContent = shuffledWords[value].def;
});

document.getElementById("playBtn").addEventListener("click", ()=>{
    responsiveVoice.speak(shuffledWords[value].word, 'Arabic Female');
})