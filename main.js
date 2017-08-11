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
    { "provincename":"NA1",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["test1", "test2"],
    },
    { "provincename":"NA2",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["test1", "test2"],
    },
    { "provincename":"NA3",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["test1", "test2"],
    },
    { "provincename":"NA4",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["test1", "test2"],
    },
    { "provincename":"NA5",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["test1", "test2"],
    },
    { "provincename":"NA6",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["test1", "test2"],
    },
    { "provincename":"NA7",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["test1", "test2"],
    },
    { "provincename":"NA8",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["test1", "test2"],
    },
    { "provincename":"NA9",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["test1", "test2"],
    },
    { "provincename":"SA1",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["test1", "test2"],
    },
    { "provincename":"SA2",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["test1", "test2"],
    },
    { "provincename":"SA3",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["test1", "test2"],
    },
    { "provincename":"SA4",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["test1", "test2"],
    },
    { "provincename":"EU1",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["test1", "test2"],
    },
    { "provincename":"EU2",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["test1", "test2"],
    },
    { "provincename":"EU3",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["test1", "test2"],
    },
    { "provincename":"EU4",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["test1", "test2"],
    },
    { "provincename":"EU5",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["test1", "test2"],
    },
    { "provincename":"EU6",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["test1", "test2"],
    },
    { "provincename":"EU7",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["test1", "test2"],
    },
    { "provincename":"AF1",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["test1", "test2"],
    },
    { "provincename":"AF2",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["test1", "test2"],
    },
    { "provincename":"AF3",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["test1", "test2"],
    },
    { "provincename":"AF4",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["test1", "test2"],
    },
    { "provincename":"AF5",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["test1", "test2"],
    },
    { "provincename":"AF6",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["test1", "test2"],
    },
    { "provincename":"OC1",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["test1", "test2"],
    },
    { "provincename":"OC2",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["test1", "test2"],
    },
    { "provincename":"OC3",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["test1", "test2"],
    },
    { "provincename":"OC4",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["test1", "test2"],
    },
    { "provincename":"AS1",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["test1", "test2"],
    },
    { "provincename":"AS2",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["test1", "test2"],
    },
    { "provincename":"AS3",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["test1", "test2"],
    },
    { "provincename":"AS4",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["test1", "test2"],
    },
    { "provincename":"AS5",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["test1", "test2"],
    },
    { "provincename":"AS6",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["test1", "test2"],
    },
    { "provincename":"AS7",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["test1", "test2"],
    },
    { "provincename":"AS8",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["test1", "test2"],
    },
    { "provincename":"AS9",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["test1", "test2"],
    },
    { "provincename":"AS10",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["test1", "test2"],
    },
    { "provincename":"AS11",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["test1", "test2"],
    },
    { "provincename": "AS12",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["test1", "test2"],
    },
];
//END GAMEBOARDOBJECT HOLDER

//BEGIN PLAYER OBJECT ARRAY
var playerObjectArray = [
    { "playername":"player1",
      "color":"red",
      "numberOfProvincesOwned":0,
      "provincesOwned":[],
      "numberOfTroopsPerTurn":0,
      "cardStack":"",
    },
    { "playername":"player2",
      "color":"green",
      "numberOfProvincesOwned":0,
      "provincesOwned":[],
      "numberOfTroopsPerTurn":0,
      "cardStack":"",
      "attitude":"normal",
    },
    { "playername":"player3",
      "color":"blue",
      "numberOfProvincesOwned":0,
      "provincesOwned":[],
      "numberOfTroopsPerTurn":0,
      "cardStack":"",
      "attitude":"normal",
    },
    { "playername":"player4",
      "color":"yellow",
      "numberOfProvincesOwned":0,
      "provincesOwned":[],
      "numberOfTroopsPerTurn":0,
      "cardStack":"",
      "attitude":"normal",
    },
    { "playername":"player5",
      "color":"purple",
      "numberOfProvincesOwned":0,
      "provincesOwned":[],
      "numberOfTroopsPerTurn":0,
      "cardStack":"",
      "attitude":"normal",
    },
    { "playername":"player6",
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

var playerTurnBoolean = true;

//BEGIN PLAYER PLACING
function placingTurn(province, index, playerindex, idOfClicked){
  var selectedProvinceObject = gameBoardObject[index];
  var selectedPlayerPlacingObject = playerObjectArray[playerindex];
  // if (){
  //
  // }
  console.log(province);
  console.log(selectedProvinceObject);
  console.log(selectedPlayerPlacingObject);
  console.log(idOfClicked);
  // playerTurnBoolean = false;
}
//END PLAYER PLACING



/*TODO
STEP ONE: Roll Dice to see who goes first
STEP TWO: Every Player Puts down a piece
HAVE A GLOW AROUND WHICH PLAYERS TURN IT IS
*/
function logtest(province, index){
  var idOfClicked = $(province).attr('id');
  // console.log(idOfClicked);
  if (playerTurnBoolean === false){
    console.log("no, stop, its not your turn");
  }
  if (playerTurnBoolean === true){
    placingTurn(province, index, "0", idOfClicked);
  }
}
