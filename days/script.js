const daysObj = [
    {
        day: "السبت",
        meaning: "Saturday"
    },
    {
        day: "الأحد",
        meaning: "Sunday"
    },
    {
        day: "الاثنين",
        meaning: "Monday"
    },
    {
        day: "الثلاثاء",
        meaning: "Tuesday"
    },
    {
        day: "الأربعاء",
        meaning: "Wednesday"
    },
    {
        day: "الخميس",
        meaning: "Thursday"
    },
    {
        day: "الجمعة",
        meaning: "Friday"
    }
];

let letter = daysObj[0].day;

const letterElm = document.getElementById("letter");

letterElm.textContent = letter;

const btnElm = document.getElementById("btn");

const meaningElm = document.getElementById("meaning");
let value = Number(btnElm.getAttribute("data"));

btnElm.addEventListener("click", () => {
    meaningElm.textContent = "";
    
    if (value === 6) {
        value = 0
    } else {
        value = value += 1
    }
    btnElm.setAttribute("data", value);
    letterElm.textContent = daysObj[value].day;
});

document.getElementById("showMeaning").addEventListener("click", ()=>{
    meaningElm.textContent = daysObj[value].meaning;
});