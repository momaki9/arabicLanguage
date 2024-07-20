
const getRandomIndex = function (arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return randomIndex;
};

// console.log(shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log("test")

// var voicelist = responsiveVoice.getVoices();

// console.log(voicelist)

document.getElementById("playBtn").addEventListener("click", ()=>{
    responsiveVoice.speak('الشَمسْ', 'Arabic Female');
})