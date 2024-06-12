const wordElm = document.getElementById("word");
const defElm = document.getElementById("def");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

const chosenWord = chooseOneWord(words);

wordElm.textContent = chosenWord.word;

btn1.addEventListener("click", function(){
    defElm.textContent = chosenWord.def;
});

btn2.addEventListener("click", function(){
    window.location.reload();
});