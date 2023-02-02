const yourChoise=document.getElementById("your-choice")
const pcChoise= document.getElementById("pc-choice")
const pcArr =["tas", "kagit", "makas"];
const youScore = document.getElementById("you");
let userScore= 0;
const pcScore=document.getElementById("pc");
let pcPoint=0;
let userSelect;
let pcRandom;


// your select,  pc select  and  add slected   

const select = document.querySelector(".select")

select.addEventListener("click", (e)=>{
 
 if(e.target.className ){
    userSelect =e.target.className
   // console.log(userSelect);

 yourChoise.innerHTML = ` <img src="./assets/${userSelect}.png"  />`
 pc()
 result()
 }
    else{console.log("fvdsfsd dfb"); } 
} )

pc = function(){
    pcRandom = pcArr[Math.floor(Math.random()*3)]  ;
   // console.log(pcRandom);
    pcChoise.innerHTML = `<img src="./assets/${pcRandom}.png"/>`
   
    
}
    
function result(){

    if(userSelect ==="tas"){
       if(pcRandom ==="kagit"){ console.log("pc win");
       pcWin()   
      
    }
       else if(pcRandom ==="makas"){console.log("you win");
      youWin()
    }   
    }

    if(userSelect ==="kagit"){
        if(pcRandom ==="makas"){ console.log("pc win")
        pcWin();}
        else if(pcRandom ==="tas"){console.log("you win")
        youWin(); }   
     }

     if(userSelect ==="makas"){
        if(pcRandom ==="tas"){ console.log("pc win");
    pcWin();}
        else if(pcRandom ==="kagit"){console.log("you win")
        youWin(); }   
     }
     
    if(userSelect === pcRandom  ){
        console.log("beraber");
    }
 
}

const youWin = function(){
         userScore++;
       youScore.innerHTML=userScore;
}  

const pcWin = function(){
    pcPoint++
    pcScore.innerHTML=pcPoint
}



