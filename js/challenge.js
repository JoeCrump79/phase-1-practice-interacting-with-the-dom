
const counter = document.getElementById('counter')

const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const heartButton = document.getElementById('heart')
const pauseButton = document.getElementById('pause')

plusButton.addEventListener('click', (e) => {
   let counterNum = parseInt(counter.innerText)
   counterNum = counterNum + 1
   counter.innerText = counterNum
}) 

minusButton.addEventListener('click', (e) => {
    let minusNum = parseInt(counter.innerText) 
    minusNum = minusNum - 1
    counter.innerText = minusNum
}) 

heartButton.addEventListener('click', (e) => {
    
}) 

pauseButton.addEventListener('click', (e) => {
    console.log(e);    
}) 

