const payOptions = document.querySelectorAll(".container .payOptions input")
const subscribe = document.getElementById("subscribeBtn")
const submit = document.getElementById("submit")

submit.addEventListener('click', () => {
    let isPaySelected = false

    payOptions.forEach(input => {
        if (input.checked) {
            isPaySelected = true
        }
    })

    if (!isPaySelected) {
        window.alert("Please select a payment option")
    }

    if (!subscribe.checked) {
        window.alert("Please subscribe")
    } else if (isPaySelected) {
        window.alert("Subscribed!!")
    }


})

