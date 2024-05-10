var MININUM_BET = 5;
var STARTING_FUNDS = 50;

var point = 0;
var winnings = STARTING_FUNDS;
var bet = 0;

function checkRoll(roll) {
    if (point == 0) { 
        if (roll == 7 || roll == 11) {
            endRound(true);
        } else if (roll == 2 || roll == 3 || roll == 12) {
            endRound(false);
        } else {
            $("#point").text(roll);
            point = roll;
        }
    } else { 
        if (roll == point) {
            endRound(true);
        } else if (roll == 7) {
            endRound(false);

        }
    }
}

function endRound(win){
    if(win){
        $("#message").text("You win!");
        winnings +=bet
    }else{
        $("#message").text("You lose!");
        winnings -= bet;
    }

    console.log("Winnings: "+ winnings)

    $("#point").text("X");
    $("#bet").val("");
    $("#bet").prop("disabled",false);
    $("#winnings").text("$" + winnings);

    bet = 0;
    point = 0;
}
function rollDice() {
    if (point > 0 || validateBet()){
        $("#point").text("X");

        $("#message").text("");
    
        var roll1 = rollDie("d1");
        var roll2 = rollDie("d2");
        var total = roll1 + roll2;
    
        console.log("Total: " + total);
    
        checkRoll(total);
    } else {
        if (winnings < MINIMUM_BET) {
            $("#message").text("You don't have enough money to play");
        } else  {
            $("#message").text("Enter a bet between $" + MINIMUM_BET + " and $" + winnings);
        }
    }

}

function validateBet(){
    bet = parseInt($("#bet").val());

    if(isNaN(bet) || bet < MININUM_BET || bet > winnings){

        return false
    }

    $("#bet").prop("disabled", true);
    return true;
}

function rollDie(dieNum) {
    $("#" + dieNum + " ~ .pip").css("visibility", "hidden");

    var roll = Math.ceil(Math.random() * 6);
    console.log(dieNum + ": " + roll);

    if (roll == 1) {
        $("#" + dieNum + "p4").css("visibility", "visible");
    } else if (roll == 2) {
        $("#" + dieNum + "p1").css("visibility", "visible");
        $("#" + dieNum + "p7").css("visibility", "visible");
    } else if (roll == 3) {
        $("#" + dieNum + "p1").css("visibility", "visible");
        $("#" + dieNum + "p4").css("visibility", "visible");
        $("#" + dieNum + "p7").css("visibility", "visible");
    } else if (roll == 4) {
        $("#" + dieNum + "p1").css("visibility", "visible");
        $("#" + dieNum + "p3").css("visibility", "visible");
        $("#" + dieNum + "p5").css("visibility", "visible");
        $("#" + dieNum + "p7").css("visibility", "visible");
    } else if (roll == 5) {
        $("#" + dieNum + "p1").css("visibility", "visible");
        $("#" + dieNum + "p3").css("visibility", "visible");
        $("#" + dieNum + "p4").css("visibility", "visible");
        $("#" + dieNum + "p5").css("visibility", "visible");
        $("#" + dieNum + "p7").css("visibility", "visible");
    } else  { 
        $("#" + dieNum + "p1").css("visibility", "visible");
        $("#" + dieNum + "p2").css("visibility", "visible");
        $("#" + dieNum + "p3").css("visibility", "visible");
        $("#" + dieNum + "p5").css("visibility", "visible");
        $("#" + dieNum + "p6").css("visibility", "visible");
        $("#" + dieNum + "p7").css("visibility", "visible");
    }

    return roll;
}