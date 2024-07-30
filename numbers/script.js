const nums = [
    {
        num: "(٠)  صِفر",
        def: "Zero (0)"
    },
    {
        num: "واحِدٌ    (١)",
        def: "One (1)"
    },
    {
        num: "اثْنَيْنِ    (٢)",
        def: "Two (2)"
    },
    {
        num: "ثَلاثَةٌ    (٣)",
        def: "Three (3)"
    },
    {
        num: "أَرْبَعُهُ    (٤)",
        def: "Four (4)"
    },
    {
        num: "خَمْسَةٌ    (٥)",
        def: "Five (5)"
    },
    {
        num: "سَتَهُ    (٦)",
        def: "Six (6)"
    },
    {
        num: "سَبْعُهُ    (٧)",
        def: "Seven (7)"
    },
    {
        num: "ثَمانيَةٌ    (٨)",
        def: "Eight (8)"
    },
    {
        num: "تَسَعُهُ    (٩)",
        def: "Nine (9)"
    },
    {
        num: "عَشْرُهُ    (١٠)",
        def: "Ten (10)"
    },
    {
        num: "عِشْرُونَ    (٢٠)",
        def: "Twenty (20)"
    },
    {
        num: "ثَلَاثُونَ    (٣٠)",
        def: "Thirty (30)"
    },
    {
        num: "أَرْبَعُونَ    (٤٠)",
        def: "Forty (40)"
    },
    {
        num: "خَمْسُونَ    (٥٠)",
        def: "Fifty (50)"
    },
    {
        num: "سِتّونَ    (٦٠)",
        def: "Sixty (60)"
    },
    {
        num: "سَبْعُونَ    (٧٠)",
        def: "Seventy (70)"
    },
    {
        num: "ثَمَانُونَ    (٨٠)",
        def: "Eighty (80)"
    },
    {
        num: "تِسْعونَ    (٩٠)",
        def: "Ninty (90)"
    },
    {
        num: "مِائَةٌ    (١٠٠)",
        def: "Hundred (100)"
    }
];

let number = nums[0].num;

const numberElm = document.getElementById("number");

numberElm.textContent = number;

const btnElm = document.getElementById("btn");
const backBtn = document.getElementById("backBtn");

const meaningElm = document.getElementById("meaning");
let value = Number(btnElm.getAttribute("data"));

if ((value > 0 ) && (value <= nums.length-1)) {
    backBtn.disabled = false;
    // backBtn.removeAttribute("class", "hidden");
} else if (value === 0) {
    // backBtn.setAttribute("class", "hidden");
    backBtn.disabled = true;
};

btnElm.addEventListener("click", () => {
    // console.log("disable next?", value)
    if (value >= 0) {
        backBtn.disabled = false;
    }
    meaningElm.textContent = "";
    if (value === nums.length - 1) {
        btnElm.disabled = true;
        // value = 0
    } else {
        value = value += 1;
        if (value === nums.length -1) {
            btnElm.disabled = true;
        }
    }
    btnElm.setAttribute("data", value);
    numberElm.textContent = nums[value].num;
});

backBtn.addEventListener("click", () => {
    if (value <= 1) {
        backBtn.disabled = true;
        // backBtn.setAttribute("class", "hidden");
    }
    value--;
    if (value <= nums.length - 2) {
        // console.log("disable next? - here", value)
        btnElm.disabled = false;
    }
    btnElm.setAttribute("data", value);
    numberElm.textContent = nums[value].num;
});

document.getElementById("showMeaning").addEventListener("click", () => {
    meaningElm.textContent = nums[value].def;
});

document.getElementById("playBtn").addEventListener("click", ()=>{
    responsiveVoice.speak(nums[value].num, 'Arabic Female');
});

/* older code
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

*/