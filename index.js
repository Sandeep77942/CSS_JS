let countEl = document.getElementById("cnt")
let count = 0
function increment(){
    count = count + 1
    countEl.innerText = "Likes : "+count
}
function reset(){
    countEl.innerText = "Likes : "+0
    count = 0
}