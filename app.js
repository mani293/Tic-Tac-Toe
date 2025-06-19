let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".box-reset");
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("clicked");
        if(turn0){
            box.innerText = "0";
            turn0 = false;
        }
        else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    })
    
})

const checkWinner=() => {
    for(let pattern of winPatterns){
        let position1 = boxes[pattern[0]].innerText;
        let position2 = boxes[pattern[1]].innerText;
        let position3 = boxes[pattern[2]].innerText;

        if(position1 !="" && position2 !="" && position3 !="")
        {
            if(position1 === position2 && position2 === position3){
                console.log("Winner", position1);
                showWinner(position1);
            }
        }
    }
};

const showWinner = (winner) =>{
    msg.innerHTML = `Congratulations Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    boxDisabled();
};

const boxDisabled = () =>{
    for (let box of boxes){
        box.disabled = true;
    }
}

const resetButton = () =>{
    turn0 =true;
    enableboxes();
    msgContainer.classList.add("hide");
}

const enableboxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText ="";
    }
}

newBtn.addEventListener("click",resetButton);
resetBtn.addEventListener("click",resetButton);