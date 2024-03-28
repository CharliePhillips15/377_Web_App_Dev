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
  fadeInGenericObject("#game-ground",100);
  
 
}



function showEverything(){
  setTimeout(() => {
    $("#game-runner").attr("visibility", "visible");
    $("#game-background").attr("visibility", "visible");
    $("#game-ground").attr("visibility", "visible");
   

  }, 1000);
}




function checkAnswer() {

  return userSum === 314 && desksClicked.length === 13;
}





function sumAndDisplay() {
  userSum = 0;
  for (let i = 0; i < userSequence.length; i++) {
    userSum += userSequence[i];
  }
  $("#user-sum-text").html(userSum);
}

function fadeOutGenericObject(objectName, speed) {
  $(objectName).attr("visibility", "visible");
  $(objectName).velocity("fadeOut", { duration: speed, easing: "easeOutCubic" });
}

function fadeInGenericObject(objectName, speed) {
  $(objectName).attr("visibility", "visible");
  $(objectName).velocity("fadeIn", { duration: speed, easing: "easeInCubic" });
}