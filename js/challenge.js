let count = 0
let likeCountMap = {}
let isPaused = false
const counter = document.getElementById('counter')

const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const heartButton = document.getElementById('heart')
const pauseButton = document.getElementById('pause')
const commentForm = document.getElementById('comment-form')
const commentList = document.getElementById('list')


function increaseCount(){
    if (!isPaused){
            count ++
            counter.textContent = count
    } 
}
setInterval(() => {
    increaseCount()
}, 1000);

plusButton.addEventListener('click', (e) => {
   increaseCount()
}) 

minusButton.addEventListener('click', (e) => {
    if (!isPaused){
        count --
        counter.textContent = count
} 
}) 
// A "like" button (❤️) that adds a "like" for the number that is currently displayed by the timer
heartButton.addEventListener('click', (e) => {
    if (!likeCountMap[count]) {
        likeCountMap[count] = 0;
        }
        likeCountMap[count]++;
        
    const likesUl = document.querySelector('ul')
    console.log(likesUl)
    const li = document.createElement('li')
    li.textContent = `${count} has been liked ${likeCountMap[count]} times`
    likesUl.appendChild(li) 
}) 

pauseButton.addEventListener('click', (e) => {
  if(!isPaused){
    plusButton.disabled = true
    minusButton.disabled = true
    heartButton.disabled = true
    isPaused = true
    pauseButton.textContent = "resume"
  }     else {
    isPaused = false
    pauseButton.textContent = "pause" 
    plusButton.disabled = false 
    minusButton.disabled = false
    heartButton.disabled = false
  }
}) 

commentForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const comment = document.getElementById('comment-input').value
    commentList.innerHTML += `<p>${comment}</p>`

})

