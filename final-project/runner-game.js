let wallWidth = 1000; // Adjust this as needed
let score = 0
let win = 10000
document.addEventListener('keydown', function(event) {
  if (event.keyCode === 32) {
    characterJump()
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
  fadeInGenericObject("#ground",100);
  fadeInGenericObject("#score",100)
}

function showEverything(){
  setTimeout(() => {
    $("#game-runner").attr("visibility", "visible");
    $("#game-background").attr("visibility", "visible");
    $("#game-background2").attr("visibility", "visible");
    $("#ground").attr("visibility", "visible");
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
function moveGround(){

  let x = parseInt($("#game-background").attr("x"));
  if (x + 1000 < 0){
    x += 1000
    
  }
  $("#game-background").attr("x", x - 2);



  // let x2 = parseInt($("#game-background2").attr("x"));
  // if (x2 + 1000 < 0){
  //   x2 += 1000
  // }
  // $("#game-background2").attr("x", x2 - 2);


}

function keepScore(){
  setInterval(addScore, 50)
}

function addScore(){
  score++;
  $('#score').html("Score:" + score);
}

function game(){
  keepScore();
  setInterval(moveGround, 10);
}

function characterJump(){

  let y = parseInt($("#game-runner").attr("y"));

  setInterval($("#game-runner").attr("y", y - 100), 10);


}


