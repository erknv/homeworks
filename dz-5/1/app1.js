let count = 0

function updateDisplay() {
    const counter = document.getElementById("counter");
    counter.textContent = `counter: ${count}`
}
function incrementCounter() {
    count++
    updateDisplay()
}
const increaseButton = document.getElementById("increaseButton")
increaseButton.onclick = incrementCounter
updateDisplay()