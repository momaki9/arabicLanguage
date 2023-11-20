let letter = alphabet[0];

const letterElm = document.getElementById("letter");

letterElm.textContent = letter;

const btnElm = document.getElementById("btn");

btnElm.addEventListener("click", () => {
    let value = Number(btnElm.getAttribute("data"));
    if (value === 27) {
        value = 0
    } else {
        value = value += 1
    }
    btnElm.setAttribute("data", value)
    letterElm.textContent = alphabet[value]
});