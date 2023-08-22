const promptButton = document.getElementById("button");
const displayText = document.getElementById("text")

promptButton.onclick = () => {
    const userInput = prompt("Введите текст: ")
    if (userInput !== null && userInput !== '') {
        text.textContent = userInput
    }
}