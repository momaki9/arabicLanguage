const nums = [
    {
        num: "أربَعه",
        def: "four (4)"
    },
    {
        num: "سِتّه",
        def: "six (6)"
    },
    {
        num: "سَبعه",
        def: "seven (7)"
    },
    {
        num: "تِسعه",
        def: "nine (9)"
    },
    {
        num: "عَشره",
        def: "ten (10)"
    },
    {
        num: "أربَعون",
        def: "forty (40)"
    }
];

const chooseOneNum = function (arr) {
    const value = Math.floor(Math.random() * arr.length);
    return arr[value];
};

const numElm = document.getElementById("num");
const defElm = document.getElementById("def");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

const chosenNum = chooseOneNum(nums);

numElm.textContent = chosenNum.num;

btn1.addEventListener("click", function(){
    defElm.textContent = chosenNum.def;
});

btn2.addEventListener("click", function(){
    window.location.reload();
});