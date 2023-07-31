const input=document.getElementById("input")
const playerName=document.getElementById("username")
const compScore=document.getElementById("compScore")
const userScore=document.getElementById("userScore")
const rock=document.getElementById("rock")
const paper=document.getElementById("paper")
const scissors=document.getElementById("scissors")
const selectedCard=document.getElementById("selectedCard")
const compCard=document.getElementById("compSelectedCard")
const message=document.getElementById("message")
const popup=document.getElementById("popup")
const reset=document.getElementById("reset")
let userInput;
let compInput;
const playerArr=[]
const compArr=[]
//getting playername
input.addEventListener("keyup",(e)=>{{
    playerName.innerHTML=e.target.value
}})
//resetting game
function gameReset(){
    popup.classList.remove("open-popup")
    location.reload()
}
reset.addEventListener("click",gameReset)
///initialising game
function newGame(){
    playerArr.pop()
    compArr.pop()
}
///getting and displaying user selected card
rock.addEventListener("click",()=>{
    const rockSrc=(rock.getAttribute("src"))
    selectedCard.setAttribute("src",rockSrc)
    userInput=rockSrc
    playerArr.push(rock)
    compHand()
    winner()
    newGame()
})
paper.addEventListener("click",()=>{
    const paperSrc=(paper.getAttribute("src"))
    selectedCard.setAttribute("src",paperSrc)
    userInput=paperSrc
    playerArr.push(paper)
    compHand()
    winner()
    newGame()
})
scissors.addEventListener("click",()=>{
    const scissorsSrc=(scissors.getAttribute("src"))
    selectedCard.setAttribute("src",scissorsSrc)
    userInput=scissorsSrc
    playerArr.push(scissors)
    compHand()
    winner()
    newGame()
})
//getting compInput
let cardArray=[rock,paper,scissors]
function compHand(){
    const randomIndex=Math.floor(Math.random()*3)
    const compSrc=cardArray[randomIndex].getAttribute("src")
    compCard.setAttribute("src",compSrc)
    compInput=compSrc
    compArr.push(cardArray[randomIndex])
}
function winner(){
    if (compArr[0]==playerArr[0]){
        message.innerHTML="It's a tie, Go another round"
    }
    else {
        if (compArr[0]==rock && playerArr[0]==scissors){
            message.innerHTML="rock wins, ei waky3 computer 1"
            compScore.innerHTML++
        }
        else if  (compArr[0]==rock && playerArr[0]==paper){
            message.innerHTML="paper wins, kaish letsgooooo"
            userScore.innerHTML++
        }
        else if  (compArr[0]==paper && playerArr[0]==rock){
            message.innerHTML="paper wins, y3 steady oo"
            compScore.innerHTML++
        }
        else if  (compArr[0]==paper && playerArr[0]==scissors){
            message.innerHTML="scissors wins, bossu nie"
            userScore.innerHTML++
        }
        else if  (compArr[0]==scissors && playerArr[0]==rock){
            message.innerHTML="rock wins, we moooove"
            userScore.innerHTML++
        }
        else if  (compArr[0]==scissors && playerArr[0]==paper){
            message.innerHTML="scissors wins, wo luck asa ong"
            compScore.innerHTML++
        }
        joke()
    }
}
function joke(){
    if (userScore.innerHTML<3 && compScore.innerHTML >= 3){
        popup.classList.add("open-popup")
        const loser=document.querySelector(".popup_message")
        loser.innerHTML="Wonni luck massa! Fri ha kc 😒"
        loser.style.color="red"
    }
    else if (userScore.innerHTML >= 3 && compScore.innerHTML < 3){
        popup.classList.add("open-popup")
        const congrats=document.querySelector(".popup_message")
        congrats.innerHTML="all the luck dey your side baba 🙌, congrats🎉"
        congrats.style.color ="green"
    }
}

