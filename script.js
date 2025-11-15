let boxs=document.querySelectorAll(".box");
let turnO=true;
let resetButton=document.querySelector("#reset-btn");
let newGame=document.querySelector(".new-game");
let msg=document.querySelector("#msg");
let memessageContainer=document.querySelector(".message-container");

const winnerPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
]

const resetBtn=()=>{
    turnO=true;
    enabledBoxs();
    memessageContainer.classList.remove("hide");
    msg.innerText= "";

}


const disabledBoxs=()=>{
    for (const box of boxs) {
        box.disabled=true;
    }
}
const enabledBoxs=()=>{
    for (const box of boxs) {
        box.disabled=false;
        box.innerText="";
    }
}

boxs.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("clicked")

        if(turnO===true){
            box.innerText="O";
            box.style.color="blue";
            turnO=false;
        }
        else{
             box.innerText="X";
             box.style.color="red";
             //box.classList.add("O");
             turnO=true;
        }
        box.Disabled=true;
         checkWinner();
    })

   
    
})
const showWinner=(winner)=>{
    msg.innerText= `Congratulations you got the winner ${winner}`;
    memessageContainer.classList.remove("hide")
     disabledBoxs();
       gameOver = true;
}

const checkWinner=()=>{
    for (let pattern of winnerPattern) {
        console.log(pattern[0],pattern[1],pattern[2]);
        console.log(
            boxs[pattern[0]].innerText,
            boxs[pattern[1]].innerText,
            boxs[pattern[2]].innerText
        );

        let panVal1= boxs[pattern[0]].innerText;
        
        let panVal2= boxs[pattern[1]].innerText;
        
        let panVal3= boxs[pattern[2]].innerText;

        if(panVal1!==""&& panVal2!==""&& panVal3!==""){
            if(panVal1===panVal2 && panVal2==panVal3){
                console.log("winner")
                showWinner(panVal1);
            }
        }
        
    }
}

resetButton.addEventListener("click",resetBtn);
newGame.addEventListener("click",resetBtn);