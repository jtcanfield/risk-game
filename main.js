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
      "adjacentProvinces":["NA2", "AS7", "NA6"],
    },
    { "provincename":"NA2",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["NA1", "NA3", "NA4", "NA6"],
    },
    { "provincename":"NA3",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["NA2", "NA4", "NA5", "EU1"],
    },
    { "provincename":"NA4",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["NA2", "NA3", "NA5", "NA6", "NA7", "NA8"],
    },
    { "provincename":"NA5",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["NA3", "NA4", "NA8"],
    },
    { "provincename":"NA6",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["NA1", "NA2", "NA3", "NA4", "NA7"],
    },
    { "provincename":"NA7",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["NA4", "NA6", "NA8", "NA9"],
    },
    { "provincename":"NA8",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["NA4", "NA5", "NA6", "NA7", "NA9"],
    },
    { "provincename":"NA9",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["NA7", "NA8", "SA1"],
    },
    { "provincename":"SA1",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["NA9", "SA2", "SA3"],
    },
    { "provincename":"SA2",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["SA1", "SA3", "SA4", "AF1"],
    },
    { "provincename":"SA3",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["SA1", "SA2", "SA4"],
    },
    { "provincename":"SA4",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["SA2", "SA3"],
    },
    { "provincename":"EU1",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["NA3", "EU2", "EU7"],
    },
    { "provincename":"EU2",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["EU1", "EU3", "EU5", "EU7"],
    },
    { "provincename":"EU3",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["EU2", "EU4", "EU5", "AF1"],
    },
    { "provincename":"EU4",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["EU3", "EU5", "EU6", "AS1", "AF1", "AF2"],
    },
    { "provincename":"EU5",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["EU2", "EU3", "EU4", "EU6", "EU7"],
    },
    { "provincename":"EU6",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["EU4", "EU5", "EU7", "AS1", "AS11", "AS12"],
    },
    { "provincename":"EU7",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["EU1", "EU2", "EU5", "EU7"],
    },
    { "provincename":"AF1",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["SA2", "EU3", "EU4", "AF2", "AF3", "AF4"],
    },
    { "provincename":"AF2",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["AF1", "AF3", "EU4", "AS1"],
    },
    { "provincename":"AF3",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["AF1", "AF2", "AF4", "AF5", "AF6", "AS1"],
    },
    { "provincename":"AF4",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["AF1", "AF3", "AF5"],
    },
    { "provincename":"AF5",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["AF3", "AF4", "AF6"],
    },
    { "provincename":"AF6",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["AF3", "AF5"],
    },
    { "provincename":"OC1",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["AS4", "OC2", "OC3"],
    },
    { "provincename":"OC2",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["OC1", "OC3", "OC4"],
    },
    { "provincename":"OC3",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["OC1", "OC2", "OC4"],
    },
    { "provincename":"OC4",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["OC2", "OC3"],
    },
    { "provincename":"AS1",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["EU4", "EU6", "AF2", "AF3", "AS2", "AS3", "AS11"],
    },
    { "provincename":"AS2",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["AS1", "AS3", "AS4"],
    },
    { "provincename":"AS3",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["AS1", "AS2", "AS4", "AS5", "AS10", "AS12", "AS11"],
    },
    { "provincename":"AS4",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["AS2", "AS3", "OC1"],
    },
    { "provincename":"AS5",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["AS3", "AS6", "AS7", "AS8", "AS10"],
    },
    { "provincename":"AS6",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["AS5", "AS7"],
    },
    { "provincename":"AS7",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["NA1", "AS5", "AS6", "AS8", "AS9"],
    },
    { "provincename":"AS8",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["AS5", "AS7", "AS9", "AS10"],
    },
    { "provincename":"AS9",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["AS7", "AS8", "AS10"],
    },
    { "provincename":"AS10",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["AS3", "AS5", "AS8", "AS9", "AS12"],
    },
    { "provincename":"AS11",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["AS1", "AS3", "AS12", "EU6"],
    },
    { "provincename": "AS12",
      "owner":"",
      "numberOfTroops":0,
      "adjacentProvinces":["AS3", "AS10", "AS11", "EU6"],
    },
];
//END GAMEBOARDOBJECT HOLDER

//BEGIN PLAYER OBJECT ARRAY
var playerObjectArray = [
    { "playername":"player1",
      "color":"red",
      "numberOfProvincesOwned":0,
      "provincesOwned":[],
      "continentsOwned":[],
      "numberOfTroopsPerTurn":0,
      "cardStack":"",
    },
    { "playername":"player2",
      "color":"green",
      "numberOfProvincesOwned":0,
      "provincesOwned":[],
      "continentsOwned":[],
      "numberOfTroopsPerTurn":0,
      "cardStack":"",
      "attitude":"normal",
    },
    { "playername":"player3",
      "color":"blue",
      "numberOfProvincesOwned":0,
      "provincesOwned":[],
      "continentsOwned":[],
      "numberOfTroopsPerTurn":0,
      "cardStack":"",
      "attitude":"normal",
    },
    { "playername":"player4",
      "color":"yellow",
      "numberOfProvincesOwned":0,
      "provincesOwned":[],
      "continentsOwned":[],
      "numberOfTroopsPerTurn":0,
      "cardStack":"",
      "attitude":"normal",
    },
    { "playername":"player5",
      "color":"purple",
      "numberOfProvincesOwned":0,
      "provincesOwned":[],
      "continentsOwned":[],
      "numberOfTroopsPerTurn":0,
      "cardStack":"",
      "attitude":"normal",
    },
    { "playername":"player6",
      "color":"orange",
      "numberOfProvincesOwned":0,
      "provincesOwned":[],
      "continentsOwned":[],
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

var gameStage = {stage:"placing", substage:"NA", turn:0};
//Stages: placing, beginning reinforcement, main gameplay(activates substages)
//SubStages: Reinforcement, Cards, Attack, FreeMove


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
  whosTurnIsIt(0);
}
//END GAME START
var playerTurnBoolean = false;
var indexOfTurn = 0;

//BEGIN BEGINNING TURN TRACKER
function whosTurnIsIt(indexOfTurn){
  if (indexOfTurn >= 6){
    indexOfTurn = 0;
  }
  var checkForPlayer1Index = turnArray[indexOfTurn];
  var setHighlight = document.getElementById("player"+turnArray[indexOfTurn]+"span");
  setHighlight.setAttribute("class", "highlight");
  console.log(playerObjectArray[checkForPlayer1Index-1].playername);
  if (playerObjectArray[checkForPlayer1Index-1].playername === "player1"){
    playerTurnBoolean = true;
  }
  if (playerObjectArray[checkForPlayer1Index-1].playername !== "player1") {
    playerTurnBoolean = false;
    computerSelecting(indexOfTurn);
  }
}
//END BEGINNING TURN TRACKER


//BEGIN COMPUTER PLACING
function computerSelecting(indexOfTurn){
  var setHighlight = document.getElementById("player"+turnArray[indexOfTurn]+"span");
  setTimeout(function() { setHighlight.setAttribute("class", ""); whosTurnIsIt(indexOfTurn + 1);}, 1000);
}
//END COMPUTER PLACING


//BEGIN PLACING FUNCTION
function placingTurn(province, index, playerindex, idOfClicked){
  if (gameBoardObject[index].owner !== ""){
    return
  } else {
    gameBoardObject[index].owner = playerObjectArray[playerindex].playername;
    var counterDiv = document.getElementById(idOfClicked+"Counter");
    counterDiv.setAttribute("style", "background-color: "+playerObjectArray[playerindex].color+";");
    gameBoardObject[index].numberOfTroops += 1;
    counterDiv.innerHTML = gameBoardObject[index].numberOfTroops;
    playerObjectArray[playerindex].numberOfProvincesOwned += 1;
    (playerObjectArray[playerindex].provincesOwned).push(idOfClicked);
  }
  if (playerindex === "0"){
    var setHighlight = document.getElementById("player1span");
    setHighlight.setAttribute("class", "");
    whosTurnIsIt((turnArray.indexOf(1)) + 1);
  }
}
//END PLACING FUNCTION


function mapClick(province, index){
  var idOfClicked = $(province).attr('id');
  if (playerTurnBoolean === false){
    console.log(province);
    console.log(index);
  }
  if (playerTurnBoolean === true){
    placingTurn(province, index, "0", idOfClicked);
    setTimeout(function() { setplayerTurnBoolean = false;}, 1);
  }
}


/*TODO
STEP ONE: Roll Dice to see who goes first
STEP TWO: Every Player Puts down a piece
HAVE A GLOW AROUND WHICH PLAYERS TURN IT IS
*/
