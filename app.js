const yourChoise=document.getElementById("your-choice")
const pcChoise= document.getElementById("pc-choice")
let userSelect;
let pcRandom;


// your select,  pc select  and  add slected  

const select = document.querySelector(".select")

select.addEventListener("click", (e)=>{
 
 // console.log(e);
 userSelect =e.target.className
 console.log(userSelect);
 yourChoise.innerHTML = ` <img src="./assets/${userSelect}.png"  />`
 pc()
} )

const pcArr =["tas", "kagit", "makas"];
pc = function(){
    pcRandom = pcArr[Math.floor(Math.random()*3)]  ;
    console.log(pcRandom);
    pcChoise.innerHTML = `<img src="./assets/${pcRandom}.png"/>`
    
}
    






