const yourChoise = document.getElementById("your-choice");
const pcChoise = document.getElementById("pc-choice");
const pcArr = ["tas", "kagit", "makas"];
const youScore = document.getElementById("you");
let userScore = 0;
const pcScore = document.getElementById("pc");
let pcPoint = 0;
let userSelect;
let pcRandom;
let topScore=document.querySelector(".container .top-score")
let maxScore = 0;

const resultDiv = document.querySelector(".result-msg");
const containerEl = document.querySelector(".container");
const modalEl = document.querySelector(".modal-container");
const modalBtn = document.querySelector("#modal-ok");

// final message
const final = document.getElementById("final")



const select = document.querySelector(".select");

select.addEventListener("click", (e) => {
  // your select,  pc select  and  add slected

  if (e.target.className) {
    userSelect = e.target.className;
    // console.log(userSelect);

    yourChoise.innerHTML = ` <img src="./assets/${userSelect}.png"  />`;
    pc();
    result();
  } else {
    console.log("fvdsfsd dfb");
  }
});

pc = function () {
  pcRandom = pcArr[Math.floor(Math.random() * 3)];
  // console.log(pcRandom);
  pcChoise.innerHTML = `<img src="./assets/${pcRandom}.png"/>`;
};

function result() {
  if (userSelect === "tas") {
    if (pcRandom === "kagit") {
      console.log("pc win");
      pcWin();
    } else if (pcRandom === "makas") {
      console.log("you win");
      youWin();
    }
  }

  if (userSelect === "kagit") {
    if (pcRandom === "makas") {
      console.log("pc win");
      pcWin();
    } else if (pcRandom === "tas") {
      console.log("you win");
      youWin();
    }
  }

  if (userSelect === "makas") {
    if (pcRandom === "tas") {
      console.log("pc win");
      pcWin();
    } else if (pcRandom === "kagit") {
      console.log("you win");
      youWin();
    }
  }

  if (userSelect === pcRandom) {
    console.log("beraber");
    resultDiv.classList.add("active");
    resultDiv.innerHTML = "It's a draw ";
    containerEl.style.boxShadow = "3px 3px 10px 1px #ffc538";
    resultDiv.style.backgroundColor = "#ffc538";
  }
  
console.log(youScore.innerText);
if(youScore.innerText == '3'){ 
    
    maxScore=youScore.innerText +"-" +pcScore.innerText

    topScore.innerText = maxScore
    console.log("your scor 3?");
    modalEl.classList.add("show");
    final.innerHTML = `💃 You Win🕺`
        document.querySelector(".modal").style.backgroundColor = "#5AB7AC"
        modalBtn.style.color = "#5AB7AC"
        modal();
}
else if (pcScore.innerText == 9){    
    console.log("pc 3 ")
    modalEl.classList.add("show");
    modal()



}


// player win --> player score = 10 

}



const youWin = function () {
  userScore++;
  youScore.innerHTML = userScore;
  resultDiv.classList.add("active");
  resultDiv.innerHTML = "You win";
  containerEl.style.boxShadow = "3px 3px 10px 1px #5ab7ac";
  resultDiv.style.backgroundColor = "#5ab7ac";
};

const pcWin = function () {
  pcPoint++;
  pcScore.innerHTML = pcPoint;
  resultDiv.classList.add("active");
  resultDiv.innerHTML = "You lost";
  containerEl.style.boxShadow = "3px 3px 10px 1px #fb778b";
  resultDiv.style.backgroundColor = "#fb778b";
};

function modal(){
 // modalEl.classList.add("show")
}

modalBtn.addEventListener("click", ()=>{

  modalEl.style.display="none";
    window.location.reload();

  })