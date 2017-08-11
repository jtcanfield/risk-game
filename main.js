/*if unfixable errors, go to line 1777 in imagemapster*/
// Below is the Jquery
$('#imgmap').mapster({
    singleSelect: true,
    fill : true,
    fillOpacity : 0.6,
    fillColor: 'ffffff',
    mapKey: 'data-key',
    onMouseover: function(e) {
        $(this).mapster('set',false).mapster('set',true);
    },
    onMouseout: function(e) {
         $(this).mapster('set',false);
    }
});
//okay now dont do anymore jquery

var turnArray = [];
//BEGIN GAMEBOARDOBJECT HOLDER
var gameBoardObject = [
  //ORDER OF CONTINENTS: NA, SA, EU, AF, OC, AS
    { "name":"NA1",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["test1", "test2"],
    },
    { "name":"NA2",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["test1", "test2"],
    },
    { "name":"NA3",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["test1", "test2"],
    },
    { "name":"NA4",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["test1", "test2"],
    },
    { "name":"NA5",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["test1", "test2"],
    },
    { "name":"NA6",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["test1", "test2"],
    },
    { "name":"NA7",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["test1", "test2"],
    },
    { "name":"NA8",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["test1", "test2"],
    },
    { "name":"NA9",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["test1", "test2"],
    },
    { "name":"SA1",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["test1", "test2"],
    },
    { "name":"SA2",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["test1", "test2"],
    },
    { "name":"SA3",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["test1", "test2"],
    },
    { "name":"SA4",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["test1", "test2"],
    },
    { "name":"EU1",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["test1", "test2"],
    },
    { "name":"EU2",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["test1", "test2"],
    },
    { "name":"EU3",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["test1", "test2"],
    },
    { "name":"EU4",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["test1", "test2"],
    },
    { "name":"EU5",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["test1", "test2"],
    },
    { "name":"EU6",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["test1", "test2"],
    },
    { "name":"EU7",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["test1", "test2"],
    },
    { "name":"AF1",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["test1", "test2"],
    },
    { "name":"AF2",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["test1", "test2"],
    },
    { "name":"AF3",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["test1", "test2"],
    },
    { "name":"AF4",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["test1", "test2"],
    },
    { "name":"AF5",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["test1", "test2"],
    },
    { "name":"AF6",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["test1", "test2"],
    },
    { "name":"OC1",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["test1", "test2"],
    },
    { "name":"OC2",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["test1", "test2"],
    },
    { "name":"OC3",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["test1", "test2"],
    },
    { "name":"OC4",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["test1", "test2"],
    },
    { "name":"AS1",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["test1", "test2"],
    },
    { "name":"AS2",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["test1", "test2"],
    },
    { "name":"AS3",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["test1", "test2"],
    },
    { "name":"AS4",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["test1", "test2"],
    },
    { "name":"AS5",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["test1", "test2"],
    },
    { "name":"AS6",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["test1", "test2"],
    },
    { "name":"AS7",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["test1", "test2"],
    },
    { "name":"AS8",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["test1", "test2"],
    },
    { "name":"AS9",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["test1", "test2"],
    },
    { "name":"AS10",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["test1", "test2"],
    },
    { "name":"AS11",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["test1", "test2"],
    },
    { "name": "AS12",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["test1", "test2"],
    },
];
//END GAMEBOARDOBJECT HOLDER

//BEGIN PLAYER OBJECT ARRAY
var playerObjectArray = [
    { "name":"player1",
      "color":"red",
      "numberOfProvincesOwned":0,
      "provincesOwned":[],
      "numberOfTroopsPerTurn":0,
      "cardStack":"",
    },
    { "name":"player2",
      "color":"green",
      "numberOfProvincesOwned":0,
      "provincesOwned":[],
      "numberOfTroopsPerTurn":0,
      "cardStack":"",
      "attitude":"normal",
    },
    { "name":"player3",
      "color":"blue",
      "numberOfProvincesOwned":0,
      "provincesOwned":[],
      "numberOfTroopsPerTurn":0,
      "cardStack":"",
      "attitude":"normal",
    },
    { "name":"player4",
      "color":"yellow",
      "numberOfProvincesOwned":0,
      "provincesOwned":[],
      "numberOfTroopsPerTurn":0,
      "cardStack":"",
      "attitude":"normal",
    },
    { "name":"player5",
      "color":"purple",
      "numberOfProvincesOwned":0,
      "provincesOwned":[],
      "numberOfTroopsPerTurn":0,
      "cardStack":"",
      "attitude":"normal",
    },
    { "name":"player6",
      "color":"orange",
      "numberOfProvincesOwned":0,
      "provincesOwned":[],
      "numberOfTroopsPerTurn":0,
      "cardStack":"",
      "attitude":"normal",
    },
];
//END PLAYER OBJECT ARRAY


//BEGIN DIE FUNCTION
function rollTheWhiteDice(){
  var diceParent = document.getElementById("white_dice_holder");
  var whitedienumber = Math.floor(Math.random()*(6-1+1)+1);
  var newWhiteDice = document.createElement("img");
  newWhiteDice.setAttribute("style", "background-image: url(white"+whitedienumber+".png);");
  diceParent.appendChild(newWhiteDice);
  return whitedienumber;
}
function rollTheRedDice(){
  var diceParent = document.getElementById("red_dice_holder");
  var reddienumber = Math.floor(Math.random()*(6-1+1)+1);
  var newRedDice = document.createElement("img");
  newRedDice.setAttribute("style", "background-image: url(red"+reddienumber+".png);");
  diceParent.appendChild(newRedDice);
  return reddienumber;
}
//END DIE FUNCTION


//BEGIN PLAYER TURN TRACKER
function whosTurnIsIt(){
  // turnArray = [];
}
//END PLAYER TURN TRACKER


//BEGIN GAME START
function startGame(){
  let i = 0;
  var arrayOfPlayers = [1, 2, 3, 4, 5, 6];
  while (i < 6){
    var playerOrderIndex = Math.floor(Math.random()*arrayOfPlayers.length);
    var playerNumber = arrayOfPlayers[playerOrderIndex];
    var playerparent = document.getElementById("playerboxidentifiers");
    var newplayerspan = document.createElement("span");
    newplayerspan.innerHTML = "Player " + playerNumber;
    newplayerspan.setAttribute("id", "player"+playerNumber+"span");
    playerparent.appendChild(newplayerspan);
    arrayOfPlayers.splice(playerOrderIndex,1)
    turnArray.push(playerNumber);
    i++
  }
  document.getElementById("startgamebutton").style.display = "none";
}
//END GAME START



//BEGIN PLAYER PLACING
function playerPlacingTurn(){

}
//END PLAYER PLACING



/*TODO
STEP ONE: Roll Dice to see who goes first
STEP TWO: Every Player Puts down a piece
HAVE A GLOW AROUND WHICH PLAYERS TURN IT IS
*/
var playerTurnBoolean = false;
function logtest(x, index){
  if (playerTurnBoolean === false){
    console.log("no, stop, its not your turn");
  }
  if (playerTurnBoolean === true){
    console.log("okay go");
  }
  // Math.floor(Math.random()*arrayOfPlayers.length);
  console.log(x);
  var idOfClicked = $(x).attr('id');
  console.log(idOfClicked);
  var objectArrayIndex = gameBoardObject[index];
  console.log(objectArrayIndex);
}
