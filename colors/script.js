const colorElm = document.getElementById("color");
const defElm = document.getElementById("def");
const prevBtn = document.getElementById("btn0");
const meaningBtn = document.getElementById("btn1");
const nextBtn = document.getElementById("btn2");

const colorsObj = [
    {
        color: "أَزْرَق",
        def: "blue"
    },
    {
        color: "أَصْفَر",
        def: "yellow"
    },
    {
        color: "أَحْمَر",
        def: "red"
    },
    {
        color: "أَخْضَر",
        def: "green"
    },
    {
        color: "بُرْتُقالي",
        def: "orange"
    },
    {
        color: "وَردَّي",
        def: "pink"
    },
    {
        color: "أَبْيَض",
        def: "white"
    },
    {
        color: "أَسْوَد",
        def: "black"
    },
    {
        color: "بُنّي",
        def: "brown"
    }
];

// TODO: refactor this to select the first element from the shuffled arary
const shuffledColors = shuffleArray(colorsObj);

let chosenColor = shuffledColors[0];

colorElm.textContent = chosenColor.color;
colorElm.setAttribute("class", chosenColor.def)

let value = Number(nextBtn.getAttribute("data"));

if ((value > 0 ) && (value <= colorsObj.length-1)) {
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
    if (value === colorsObj.length - 1) {
        nextBtn.disabled = true;
        // value = 0
    } else {
        value = value += 1;
        if (value === colorsObj.length -1) {
            nextBtn.disabled = true;
        }
    }
    nextBtn.setAttribute("data", value);
    colorElm.textContent = shuffledColors[value].color;
    colorElm.setAttribute("class", shuffledColors[value].def)
});

prevBtn.addEventListener("click", () => {
    defElm.textContent = "";
    if (value <= 1) {
        prevBtn.disabled = true;
        // backBtn.setAttribute("class", "hidden");
    }
    value--;
    if (value <= colorsObj.length - 2) {
        // console.log("disable next? - here", value)
        nextBtn.disabled = false;
    }
    nextBtn.setAttribute("data", value);
    colorElm.textContent = shuffledColors[value].color;
    colorElm.setAttribute("class", shuffledColors[value].def)
});

meaningBtn.addEventListener("click", () => {
    defElm.textContent = shuffledColors[value].def;
});

document.getElementById("playBtn").addEventListener("click", ()=>{
    responsiveVoice.speak(shuffledColors[value].color, 'Arabic Female');
})