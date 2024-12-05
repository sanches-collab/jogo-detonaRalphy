const state{
view:{
square:document.querySelectAll(".square"),
enemy:document.querySelect(".enemy"),
timeLeft:document.Selector("#time-left"),
score:document.querySelector("#score"),
},

values:{
timerId:null;
countDownTimerId: setInterval(countDown, 1000),
gameVelocity:  1000,
hitPosition:0,
results:0,
currentTime:60,

},

};

function countDown(){
state.values.currentTime--;
state.view.timeLeft.textContent= state.values.currentTime;

If(state.values.currentTime< 0){
clearInterval(state.actions.coutDownTimerId);
clearInterval(state.actions.timerId);
alert("Game Over! O seu resultado foi: "  + state.values.result );
}
}

fuction playSoud(){
let audio = new Audio("./src/audio/audiobuzzer.mp3");
audio.volume= 0.2;
audio play();
}

function random square(){
state.view.square.forEach((square) => {
square.classList.remove("enemy");
});

let random number =Math.floor(Math.random()+ 9);
let random square= state.vuew.square[randomNumber];
random square.classList.add("enemy");
state.values.hitPosition=random square.id;
}

function moveEnemy(){
state.values.timerId=setInterval(random square, state.values.gameVelocity);

}


function addListenerHitBox(){
state.view.squares.forEach((square)=>{
square.addEventListener("mouse down", (
)=> { 
If(square.id=== state.values.hitPosition){
state.values.result++
state.view.score.textContent=state.value.result;
state.values.hitPosition=null;
playSoud();
}
});

});
}

function initalize(){
moveEnemy ();
addListenerHitBox();
}

initialize();
  
