var clubs2 = { value: 2, href: "cards/fronts/clubs_2.svg" };
var clubs3 = { value: 3, href: "cards/fronts/clubs_3.svg" };
var clubs4 = { value: 4, href: "cards/fronts/clubs_4.svg" };
var clubs5 = { value: 5, href: "cards/fronts/clubs_5.svg" };
var clubs6 = { value: 6, href: "cards/fronts/clubs_6.svg" };
var clubs7 = { value: 7, href: "cards/fronts/clubs_7.svg" };
var clubs8 = { value: 8, href: "cards/fronts/clubs_8.svg" };
var clubs9 = { value: 9, href: "cards/fronts/clubs_9.svg" };
var clubs10 = { value: 10, href: "cards/fronts/clubs_10.svg" };
var clubsAce = { value: 14, href: "cards/fronts/clubs_ace.svg" };
var clubsJack = { value: 11, href: "cards/fronts/clubs_jack.svg" };
var clubsKing = { value: 13, href: "cards/fronts/clubs_king.svg" };
var clubsQueen = { value: 12, href: "cards/fronts/clubs_queen.svg" };
var diamonds2 = { value: 2, href: "cards/fronts/diamonds_2.svg" };
var diamonds3 = { value: 3, href: "cards/fronts/diamonds_3.svg" };
var diamonds4 = { value: 4, href: "cards/fronts/diamonds4.svg" };
var diamonds5 = { value: 5, href: "cards/fronts/diamonds_5.svg" };
var diamonds6 = { value: 6, href: "cards/fronts/diamonds_6.svg" };
var diamonds7 = { value: 7, href: "cards/fronts/diamonds_7.svg" };
var diamonds8 = { value: 8, href: "cards/fronts/diamonds_8.svg" };
var diamonds9 = { value: 9, href: "cards/fronts/diamonds_9.svg" };
var diamonds10 = { value: 10, href: "cards/fronts/diamonds_10.svg" };
var diamondsAce = { value: 14, href: "cards/fronts/diamonds_ace.svg" };
var diamondsJack = { value: 11, href: "cards/fronts/diamonds_jack.svg" };
var diamondsKing = { value: 13, href: "cards/fronts/diamonds_king.svg" };
var diamondsQueen = { value: 12, href: "cards/fronts/diamonds_queen.svg" };
var hearts2 = { value: 2, href: "cards/fronts/hearts_2.svg" };
var hearts3 = { value: 3, href: "cards/fronts/hearts_3.svg" };
var hearts4 = { value: 4, href: "cards/fronts/hearts_4.svg" };
var hearts5 = { value: 5, href: "cards/fronts/hearts_5.svg" };
var hearts6 = { value: 6, href: "cards/fronts/hearts_6.svg" };
var hearts7 = { value: 7, href: "cards/fronts/hearts_7.svg" };
var hearts8 = { value: 8, href: "cards/fronts/hearts_8.svg" };
var hearts9 = { value: 9, href: "cards/fronts/hearts_9.svg" };
var hearts10 = { value: 10, href: "cards/fronts/hearts_10.svg" };
var heartsAce = { value: 14, href: "cards/fronts/hearts_ace.svg" };
var heartsJack = { value: 11, href: "cards/fronts/hearts_jack.svg" };
var heartsKing = { value: 13, href: "cards/fronts/hearts_king.svg" };
var heartsQueen = { value: 12, href: "cards/fronts/hearts_queen.svg" };
var spades2 = { value: 2, href: "cards/fronts/spades_2.svg" };
var spades3 = { value: 3, href: "cards/fronts/spades_3.svg" };
var spades4 = { value: 4, href: "cards/fronts/spades_4.svg" };
var spades5 = { value: 5, href: "cards/fronts/spades_5.svg" };
var spades6 = { value: 6, href: "cards/fronts/spades_6.svg" };
var spades7 = { value: 7, href: "cards/fronts/spades_7.svg" };
var spades8 = { value: 8, href: "cards/fronts/spades_8.svg" };
var spades9 = { value: 9, href: "cards/fronts/spades_9.svg" };
var spades10 = { value: 10, href: "cards/fronts/spades_10.svg" };
var spadesAce = { value: 14, href: "cards/fronts/spades_ace.svg" };
var spadesJack = { value: 11, href: "cards/fronts/spades_jack.svg" };
var spadesKing = { value: 13, href: "cards/fronts/spades_king.svg" };
var spadesQueen = { value: 12, href: "cards/fronts/spades_queen.svg" };

var blankCard= {value: -1, href: "cards/backs/red2.svg"};

var cardsOnScreen = [];
var clickedCard;
var computerCards = [];
var userCards = [];

var deck=[clubs2, 
            clubs3, 
            clubs4,
            clubs5, 
            clubs6,
            clubs7,
            clubs8,
            clubs9,
            clubs10,
            clubsAce,
            clubsJack,
            clubsKing,
            clubsQueen,
            diamonds2,
            diamonds3,
            diamonds4,
            diamonds5,
            diamonds6,
            diamonds7,
            diamonds8,
            diamonds9,
            diamonds10,
            diamondsAce,
            diamondsJack,
            diamondsKing,
            diamondsQueen,
            hearts2,
            hearts3,
            hearts4,
            hearts5,
            hearts6,
            hearts7,
            hearts8,
            hearts9,
            hearts10,
            heartsAce,
            heartsJack,
            heartsKing,
            heartsQueen,
            spades2,
            spades3,
            spades4,
            spades5,
            spades6,
            spades7,
            spades8,
            spades9,
            spades10,
            spadesAce,
            spadesJack,
            spadesKing,
            spadesQueen
        ]

function shuffleCards() {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
          
          
    for (let i = 0; i < 16 ; i++) {
      cardsOnScreen.push(deck[i]);
      deck.shift()
    }

    $("#card0").attr("href", cardsOnScreen[0].href);
    $("#card1").attr("href", cardsOnScreen[1].href);
    $("#card2").attr("href", cardsOnScreen[2].href);
    $("#card3").attr("href", cardsOnScreen[3].href);
    $("#card4").attr("href", cardsOnScreen[4].href);
    $("#card5").attr("href", cardsOnScreen[5].href);
    $("#card6").attr("href", cardsOnScreen[6].href);
    $("#card7").attr("href", cardsOnScreen[7].href);
    $("#card8").attr("href", cardsOnScreen[8].href);
    $("#card9").attr("href", cardsOnScreen[9].href);
    $("#card10").attr("href", cardsOnScreen[10].href);
    $("#card11").attr("href", cardsOnScreen[11].href);
    $("#card12").attr("href", cardsOnScreen[12].href);
    $("#card13").attr("href", cardsOnScreen[13].href);
    $("#card14").attr("href", cardsOnScreen[14].href);
    $("#card15").attr("href", cardsOnScreen[15].href);
    $("#outcome").text("Pick A Card");
    $("#shuffle").css("visibility", "hidden");
    $("#cardsLeft").text("Cards Left: " + deck.length);

    return deck;
}

function startGame(){
    $("#wholeGame").css("display", "block");
    $("#instructions").css("display", "none");
    $("#title").css("display", "none");
    $("#gameStart").css("display", "none");
    $("#container").css("display", "none");





}

function displayHorL(card){
  $("#higher").css("visibility", "visible");
  $("#same").css("visibility", "visible");
  $("#lower").css("visibility", "visible");
  $("#outcome").text("Will the Next Card in the Deck be Higher or Lower?");
  clickedCard = card;
  if (cardsOnScreen[clickedCard] == blankCard){
    $("#outcome").text("Cannot pick that card. Pick another.");
    $("button").prop("disabled", true);

  }else if(cardsOnScreen[clickedCard] != blankCard){
    $("button").prop("disabled", false);

  }
}

function higher(){
  
  if(deck[0].value > cardsOnScreen[clickedCard].value){
    $("#card" + clickedCard).attr("href", deck[0].href);
    cardsOnScreen[clickedCard] = deck[0]
    deck.shift()
    $("#outcome").text("Correct! Pick another Card");
    $("#cardsLeft").text("Cards Left: " + deck.length);

  }
  else{
    $("#card" + clickedCard).attr("href", blankCard.href);
    cardsOnScreen[clickedCard] = blankCard
    deck.shift()
    $("#outcome").text("Wrong! Pick another Card");
    $("#cardsLeft").text("Cards Left: " + deck.length);
  }

}

function lower(){

  if(deck[0].value < cardsOnScreen[clickedCard].value){
    $("#card" + clickedCard).attr("href", deck[0].href);
    cardsOnScreen[clickedCard] = deck[0]
    deck.shift()
    $("#outcome").text("Correct! Pick another Card");
    $("#cardsLeft").text("Cards Left: " + deck.length);

  }
  else{
    $("#card" + clickedCard).attr("href", blankCard.href);
    cardsOnScreen[clickedCard] = blankCard
    deck.shift()
    $("#outcome").text("Wrong! Pick another Card");
    $("#cardsLeft").text("Cards Left: " + deck.length);
  }
  

}

// function same(){
  
//   if(deck[0].value == cardsOnScreen[clickedCard].value){
//     $("#card" + clickedCard).attr("href", deck[0].href);
//     cardsOnScreen[clickedCard] = deck[0]
//     deck.shift()
//     $("#outcome").text("Correct! Pick another Card");
//     $("#cardsLeft").text("Cards Left: " + deck.length);

//   }
//   else{
//     $("#card" + clickedCard).attr("href", blankCard.href);
//     cardsOnScreen[clickedCard] = blankCard
//     deck.shift()
//     $("#outcome").text("Wrong! Pick another Card");
//     $("#cardsLeft").text("Cards Left: " + deck.length);
//   }




// }

function endGame(){

}