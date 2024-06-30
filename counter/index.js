const decrease = document.getElementById("decrease")
const reset = document.getElementById("reset")
const increase = document.getElementById("increase")
const count = document.getElementById("count")

let interval;

//intervalo de 100ms entre as adições
const startInterval = (operation) => {
    interval = setInterval(operation, 100);
}

const stopInterval = () => {
    clearInterval(interval)
}


reset.addEventListener('click', () => {
    count.textContent = 0
})


increase.addEventListener('mousedown', () => {
    startInterval(() => {
        count.textContent++
    })
})

increase.addEventListener('mouseup', stopInterval)
increase.addEventListener('mouseleave', stopInterval)


decrease.addEventListener('mousedown', () => {
    startInterval(() => {
        count.textContent--
    })
})

decrease.addEventListener('mouseup', stopInterval)
decrease.addEventListener('mouseleave', stopInterval)




