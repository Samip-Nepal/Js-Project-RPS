let scoreuser=0;
let scorecomp=0;
  
const actualplays=document.querySelectorAll(".actual-play");


const compchoice=()=>{
const options =["rock","paper","scissors"];
const comchoice=Math.floor((Math.random())*3);
return options[comchoice];

};
const drawgame=()=>{
    console.log("The game is draw");
};
const showWinner=(userwin)=>{
    if(userwin){
console.log("You win");
    }
    else{
        console.log("You lose");
            }
}

const userchoices=(userchoice)=>{
console.log("userchoice=",userchoice);
const gencomp=compchoice();
console.log("compchoice=",gencomp);
if(userchoice===gencomp)
{
    drawgame();
}

 else {
    let userWin = true;
     if (userchoice=== "rock") {
        userWin = gencomp === "paper" ? false : true;
    } else if (userchoice === "paper") {
        userWin = gencomp === "scissors" ? false : true;
    } else {
        userWin = gencomp === "rock" ? false : true;
    }
    showWinner(userWin);
}

};




actualplays.forEach((actualplay) => {
    console.log(actualplay);
actualplay.addEventListener("click",()=>{
    const userchoice=actualplay.getAttribute("id");
    console.log("choices was clicks",userchoice);
    userchoices(userchoice);
})  
});