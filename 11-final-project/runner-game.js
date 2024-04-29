let score = 0
let win = 10000
let backgroundMove = 3;
let backgroundXChange = 997;
let obstacleMove = 3;

document.addEventListener('keydown', function(event) {
  if (event.keyCode === 32) {
    characterJump();
  }
});

function btnStartClicked() {
  $("#btn-start").removeClass("clickable").addClass("notclickable");
  fadeOutGenericObject("#btn-start", 200);
  fadeOutGenericObject("#txt-08", 1600);
  fadeOutGenericObject("#txt-07", 1400);
  fadeOutGenericObject("#txt-06", 1200);
  fadeOutGenericObject("#txt-05", 1000);
  fadeOutGenericObject("#txt-04", 800);
  fadeOutGenericObject("#txt-03", 600);
  fadeOutGenericObject("#txt-02", 400);
  fadeOutGenericObject("#txt-01", 200);
  game();
  setTimeout(function(){
    fadeOutGenericObject("#txt-21", 400);
    showEverything();
    revealStuff();

  },2000);
}

function revealStuff() {
  $("#txt-01").html("Run!");
  $("#txt-02").html("");
  $("#txt-03").html("");
  $("#txt-04").html("");
  $("#txt-05").html("");
  fadeInGenericObject("#game-runner",1000);
  fadeInGenericObject("#game-background",100);
  fadeInGenericObject("#game-background2",100);
  fadeInGenericObject("#score",100)
}

function showEverything(){
  setTimeout(() => {
    $("#game-runner").attr("visibility", "visible");
    $("#game-background").attr("visibility", "visible");
    $("#game-background2").attr("visibility", "visible");
    $("#score").attr("visibility" , "visible")
  }, 1000);
}

function fadeOutGenericObject(objectName, speed) {
  $(objectName).attr("visibility", "visible");
  $(objectName).velocity("fadeOut", { duration: speed, easing: "easeOutCubic" });
}

function fadeInGenericObject(objectName, speed) {
  $(objectName).attr("visibility", "visible");
  $(objectName).velocity("fadeIn", { duration: speed, easing: "easeInCubic" });
}


function keepScore(){
  setInterval(addScore, 50)
}

function addScore(){
  score++;
  $('#score').html("Score:" + score);
}
function moveBackGrounds(){
  let x = parseInt($("#game-background").attr("x"));
  if (x + 1000 < 0){
    x = backgroundXChange;
    
  }
  $("#game-background").attr("x", x - backgroundMove);

  let x2 = parseInt($("#game-background2").attr("x"));
  if (x2 + 1000 < 0){
    x2 = backgroundXChange;
  }
  $("#game-background2").attr("x", x2 - backgroundMove);

}
function game(){
  keepScore();
  requestAnimationFrame(gameLoop); 

  setTimeout(function(){
    setInterval(moveGame, 1);
  },2000);

}

function gameLoop() {
  updateJump(); 
  requestAnimationFrame(gameLoop); 
}

let isJumping = false;
let jumpVelocity;

function moveGame(){
  moveBackGrounds();
  moveObstacle();
  changeSpeed();
}
function characterJump() {
  if (!isJumping) {
    isJumping = true;
    jumpVelocity = 22; 
  }
}

function updateJump() {
  if (isJumping){
    let marioY = parseInt($("#game-runner").attr("y"));
    marioY -= jumpVelocity;
    jumpVelocity -= 1;
    if (marioY >= 325) {
      marioY = 325;
      isJumping = false;
    }
    $("#game-runner").attr("y", marioY);
  }
}

let isObstacle = false;
let newObstacle;
let obstacleX;

function createObstacle(){
  let randomNumber = Math.random();
  let obstacleNumber = Math.floor(randomNumber * 3) + 1;
  if (obstacleNumber == 1){
    newObstacle = $("#shell");
    obstacleMove = 4.5;
  }else if(obstacleNumber == 2){
    newObstacle = $("#goomba");
    obstacleMove = 4;
  }else if(obstacleNumber == 3){
    newObstacle = $("#pipe");
    obstacleMove = 3;
  }
  newObstacle.attr("x", 1200);
  newObstacle.attr("visibility" , "visible")
  isObstacle = true;
}


function moveObstacle(){
  if (!isObstacle){
    createObstacle();
  }
  
  obstacleX = parseInt(newObstacle.attr("x"));
  newObstacle.attr("x" , obstacleX - obstacleMove);

  checkObstacle();
}

function checkObstacle(){
  if(parseInt(newObstacle.attr("x")) < -150){
    isObstacle = false;
    newObstacle.attr("x", 1200);
    newObstacle.attr("visibility" , "hidden")
  }
}






