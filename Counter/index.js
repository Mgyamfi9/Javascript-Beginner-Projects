const screen = document.querySelector(".screen")
const increment = document.querySelector(".increment")
const decrement = document.getElementById("decrease")

increment.addEventListener("click", function (){
    screen.innerHTML++
})
decrement.addEventListener("click",()=>screen.innerHTML--)
 


