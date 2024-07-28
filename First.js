let scoreuser=0;
let scorecomp=0;
const scoreusers=document.querySelector("#user-count");
const scorecomps=document.querySelector("#Computer-count");
  
const actualplays=document.querySelectorAll(".actual-play");
const msg=document.querySelector("#msg");

const compchoice=()=>{
const options =["rock","paper","scissors"];
const comchoice=Math.floor((Math.random())*3);
return options[comchoice];

};
const drawgame=()=>{
    msg.innerText="The game is draw";
    msg.style.backgroundColor="#264653";
};
const showWinner=(userwin,userchoice,gencomp)=>{
    if(userwin){
        scoreuser++;
        scoreusers.innerText=scoreuser;
msg.innerText=`You win good job Your ${userchoice} beats ${gencomp}`;
msg.style.backgroundColor="green";
    }
    else{
        scorecomp++;
        scorecomps.innerText=scorecomp;
        msg.innerText=`You loose sorry Computer ${gencomp} beats ${userchoice}`;
        msg.style.backgroundColor="Red";
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
    showWinner(userWin,userchoice,gencomp);
}

};

actualplays.forEach((actualplay) => {
actualplay.addEventListener("click",()=>{
    const userchoice=actualplay.getAttribute("id");
    userchoices(userchoice);
})  
});