const input = document.getElementById("myInput")
const bottomText = document.querySelector(".result p")
const topText = document.getElementById("topText")
const borderText = document.getElementById("borderText")

let cTof = true;
let result;
let f;
let c;

function convert() {
    let value = Number(input.value)

    if (input.value === '') {
        value.value = 0
    }

    if (cTof) {
        f = (value * 1.8) + 32
        result = `${value}°C= ${f.toFixed()}ºF`
        bottomText.textContent = result

    } else {
        c = (value - 32) / 1.8
        result = `${value}ºF = ${c.toFixed()}°C`
        bottomText.textContent = result
    }
}

function isSwap() {
    if (!cTof) {
        cTof = true
        topText.textContent = "Celsius to Fahrenheit (ºC to ºF) conversion calculator"
        borderText.textContent = "Celsius to Fahrenheit (Swap Units)"
        input.placeholder = "°C";
        if (!isNaN(c)) {
            input.value = c.toFixed();
        } else {
            input.value = '';
        }

    } else {
        cTof = false
        topText.textContent = "Fahrenheit to Celsius (°F to °C) conversion calculator"
        borderText.textContent = "Fahrenheit to Celsius (Swap Units)"
        input.placeholder = "°F";
        if (!isNaN(f)) {
            input.value = f.toFixed();
        } else {
            input.value = '';
        }
    }
    convert();
}
