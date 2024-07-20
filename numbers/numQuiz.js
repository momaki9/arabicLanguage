const wordElm = document.getElementById("num");
const defElm = document.getElementById("def");
const prevBtn = document.getElementById("btn0");
const meaningBtn = document.getElementById("btn1");
const nextBtn = document.getElementById("btn2");

// TODO: replace myArray name with name of obj array;
let myArray = [{
    num: "واحد    (١)",
    def: "One (1)"
},
{
    num: "اثنين    (٢)",
    def: "Two (2)"
},
{
    num: "ثلاثة    (٣)",
    def: "Three (3)"
},
{
    num: "أربَعه    (٤)",
    def: "Four (4)"
},
{
    num: "خمسة    (٥)",
    def: "Five (5)"
},
{
    num: "سِتّه    (٦)",
    def: "Six (6)"
},
{
    num: "سَبعه    (٧)",
    def: "Seven (7)"
},
{
    num: "ثمانية    (٨)",
    def: "Eight (8)"
},
{
    num: "تِسعه    (٩)",
    def: "Nine (9)"
},
{
    num: "عَشره    (١٠)",
    def: "Ten (10)"
},
{
    num: "عشرون    (٢٠)",
    def: "Twenty (20)"
},
{
    num: "ثلاثون    (٣٠)",
    def: "Thirty (30)"
},
{
    num: "أربَعون    (٤٠)",
    def: "Forty (40)"
},
{
    num: "خمسون    (٥٠)",
    def: "Fifty (50)"
},
{
    num: "ستون    (٦٠)",
    def: "Sixty (60)"
},
{
    num: "سبعون    (٧٠)",
    def: "Seventy (70)"
},
{
    num: "ثمانون    (٨٠)",
    def: "Eighty (80)"
},
{
    num: "تسعون    (٩٠)",
    def: "Ninty (90)"
},
{
    num: "مائة    (١٠٠)",
    def: "Hundred (100)"
}];

const shuffledArr = shuffleArray(myArray);

let selectedElm = shuffledArr[0];

wordElm.textContent = selectedElm.num;

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
    wordElm.textContent = shuffledArr[value].num;
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
    wordElm.textContent = shuffledArr[value].num;
});

meaningBtn.addEventListener("click", () => {
    defElm.textContent = shuffledArr[value].def;
});