// For higher levels, show english sentences and have Arabic words to select from to translate to arabic

function shuffleWords(words) {
    // Shuffle the words using Fisher-Yates algorithm
    for (let i = words.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [words[i], words[j]] = [words[j], words[i]];
    }

    return words;
}

function shuffleSentence(sentence) {
    // Split the sentence into an array of words
    const words = sentence.split(' ');

    // Shuffle the array of words
    const shuffledWords = shuffleWords([...words]);

    // Return the shuffled words as a string
    return shuffledWords.join(' ');
}

let correctOrder = [];

function displayShuffledSentence() {
    const originalSentence = "This is a sentence"; // Replace with your own sentence
    const shuffledSentence = shuffleSentence(originalSentence);

    // Display each shuffled word
    const wordContainer = document.getElementById('wordContainer');
    wordContainer.innerHTML = shuffledSentence
        .split(' ')
        .map((word, index) => {
            correctOrder[index] = word; // Store the correct order
            return `<div class="draggable" draggable="true" ondragstart="drag(event)">${word}</div>`;
        })
        .join('');

    // Create blank spaces for correct order
    const blankContainer = document.getElementById('blankContainer');
    blankContainer.innerHTML = correctOrder
        .map(() => '<div class="draggable blank" ondrop="drop(event)" ondragover="allowDrop(event)"></div>')
        .join('');
}


function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData('text', event.target.innerText);
}

function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData('text');
    event.target.innerHTML = `<div class="draggable" draggable="true" ondragstart="drag(event)" ondrop="drop(event)" ondragover="allowDrop(event)">${data}</div>`;
}

document.addEventListener('DOMContentLoaded', displayShuffledSentence);

const wordContainer = document.getElementById('wordContainer');
wordContainer.addEventListener('drop', drop);
wordContainer.addEventListener('dragover', allowDrop);


function checkOrder() {
    const wordContainer = document.getElementById('wordContainer');
    const blankContainer = document.getElementById('blankContainer');
    const checkmarkContainer = document.getElementById('checkmarkContainer');

    const wordDivs = Array.from(wordContainer.children);
    const blankDivs = Array.from(blankContainer.children);

    const isCorrectOrder = wordDivs.every((wordDiv, index) => {
        const blankDiv = blankDivs[index];
        const isCorrect = wordDiv.innerText.trim() === correctOrder[index].trim();
        console.log(`Word ${index + 1}: ${isCorrect}`);
        return isCorrect;
    });

    if (isCorrectOrder) {
        showCheckmark();
    } else {
        hideCheckmark();
    }
}

function showCheckmark() {
    console.log("Showing checkmark...");
    const checkmarkContainer = document.getElementById('checkmarkContainer');
    checkmarkContainer.innerHTML = '<p style="color: green;">Correct</p>';
}

function hideCheckmark() {
    console.log("hide checkmark...");
    const checkmarkContainer = document.getElementById('checkmarkContainer');
    checkmarkContainer.innerHTML = 'ok';
}

