const number = document.getElementById("number")
const button = document.getElementById("button")
const image = document.querySelector(".container img")

button.addEventListener('click', () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    image.src = "images/animation-dice.gif"

    setTimeout(() => {
        switch(randomNumber) {
            case 1:
            image.src = "images/dice-one.png"
            break;

            case 2:
            image.src = "images/dice-two.png"
            break;

            case 3:
            image.src = "images/dice-three.png"
            break;

            case 4:
            image.src = "images/dice-four.png"
            break;

            case 5:
            image.src = "images/dice-five.png"
            break;

            case 6:
            image.src = "images/dice-six.png"
            break;
        }
    },1000)
})