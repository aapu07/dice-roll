let inputElement = document.querySelector("#Input")
let buttonElement = document.querySelector("#Roll_Button")
let totalElement = document.querySelector("#total")
let showallrolls = document.querySelector("#Show-All-Rolls")
let allrolls = document.querySelector("#all-rolls")
let dieRolls = [];
let counter = 0
let counter1 = 0
let resetCountElement = document.querySelector("#reset-button")
let resetNumber = document.querySelector("#num-resets")
let resets = document.querySelector("#goals")


let myAudio = new Audio("mouse_click.mp3")

buttonElement.addEventListener("click", function () {
    let userinput = inputElement.value
    let RollTotal = 0
    while (counter < userinput) {
        let currentdiceRolls = Math.floor(Math.random() * 6 + 1)
        dieRolls.push(currentdiceRolls)
        counter += 1

    }
})

showallrolls.addEventListener("click", function () {
    let totalRolls = 0
    for (let counter1 = 0; counter1 < dieRolls.length; counter1 += 1) {

        let numberRolled = dieRolls[counter1]
        const newDiceString = '<li class="dice">' + numberRolled + "</li>"
        allrolls.innerHTML += newDiceString
        totalRolls = totalRolls + numberRolled

    }
    totalElement.innerHTML += "" + totalRolls

    console.log(totalRolls)
})

resetCountElement.addEventListener("click", function () {
    resetNumber.innerHTML = Number(resetNumber.innerHTML) + 1;

    if (resetNumber >= 0) {
        inputElement.innerHTML = [0];
        buttonElement.innerHTML = [0];
        totalElement.innerHTML = [0]; 
        showallrolls.innerHTML = []; 
        allrolls.innerHTML = [0]; 
        dieRolls.innerHTML = [0];
        counter.innerHTML = [0];
        counter1.innerHTML = [0];
        number.innerHTML = [0];

        myAudio.play();

    }
})




