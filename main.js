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
      "valueToplayer2":0,
      "valueToplayer3":0,
      "valueToplayer4":0,
      "valueToplayer5":0,
      "valueToplayer6":0,
      "adjacentProvinces":["NA2", "AS7", "NA6"],
      "adjacentProvinceIndex":["1", "36", "5"],
      getValues : function(){},

    },
    { "provincename":"NA2",
      "owner":"",
      "numberOfTroops":0,
      "valueToplayer2":0,
      "valueToplayer3":0,
      "valueToplayer4":0,
      "valueToplayer5":0,
      "valueToplayer6":0,
      "adjacentProvinces":["NA1", "NA3", "NA4", "NA6"],
      "adjacentProvinceIndex":["0", "2", "3", "5"],
      getValues : function(){},

    },
    { "provincename":"NA3",
      "owner":"",
      "numberOfTroops":0,
      "valueToplayer2":0,
      "valueToplayer3":0,
      "valueToplayer4":0,
      "valueToplayer5":0,
      "valueToplayer6":0,
      "adjacentProvinces":["NA2", "NA4", "NA5", "EU1"],
      "adjacentProvinceIndex":["1", "3", "4", "13"],
      getValues : function(){},

    },
    { "provincename":"NA4",
      "owner":"",
      "numberOfTroops":0,
      "valueToplayer2":0,
      "valueToplayer3":0,
      "valueToplayer4":0,
      "valueToplayer5":0,
      "valueToplayer6":0,
      "adjacentProvinces":["NA2", "NA3", "NA5", "NA6", "NA7", "NA8"],
      "adjacentProvinceIndex":["1", "2", "4", "5", "6", "7"],
      getValues : function(){},

    },
    { "provincename":"NA5",
      "owner":"",
      "numberOfTroops":0,
      "valueToplayer2":0,
      "valueToplayer3":0,
      "valueToplayer4":0,
      "valueToplayer5":0,
      "valueToplayer6":0,
      "adjacentProvinces":["NA3", "NA4", "NA8"],
      "adjacentProvinceIndex":["2", "3", "7"],
      getValues : function(){},

    },
    { "provincename":"NA6",
      "owner":"",
      "numberOfTroops":0,
      "valueToplayer2":0,
      "valueToplayer3":0,
      "valueToplayer4":0,
      "valueToplayer5":0,
      "valueToplayer6":0,
      "adjacentProvinces":["NA1", "NA2", "NA3", "NA4", "NA7"],
      "adjacentProvinceIndex":["0", "1", "2", "3", "6"],
      getValues : function(){},

    },
    { "provincename":"NA7",
      "owner":"",
      "numberOfTroops":0,
      "valueToplayer2":0,
      "valueToplayer3":0,
      "valueToplayer4":0,
      "valueToplayer5":0,
      "valueToplayer6":0,
      "adjacentProvinces":["NA4", "NA6", "NA8", "NA9"],
      "adjacentProvinceIndex":["3", "5", "7", "8"],
      getValues : function(){},

    },
    { "provincename":"NA8",
      "owner":"",
      "numberOfTroops":0,
      "valueToplayer2":0,
      "valueToplayer3":0,
      "valueToplayer4":0,
      "valueToplayer5":0,
      "valueToplayer6":0,
      "adjacentProvinces":["NA4", "NA5", "NA6", "NA7", "NA9"],
      "adjacentProvinceIndex":["3", "4", "5", "6", "8"],
      getValues : function(){},

    },
    { "provincename":"NA9",
      "owner":"",
      "numberOfTroops":0,
      "valueToplayer2":0,
      "valueToplayer3":0,
      "valueToplayer4":0,
      "valueToplayer5":0,
      "valueToplayer6":0,
      "adjacentProvinces":["NA7", "NA8", "SA1"],
      "adjacentProvinceIndex":["6", "7", "9"],
      getValues : function(){},

    },
    { "provincename":"SA1",
      "owner":"",
      "numberOfTroops":0,
      "valueToplayer2":0,
      "valueToplayer3":0,
      "valueToplayer4":0,
      "valueToplayer5":0,
      "valueToplayer6":0,
      "adjacentProvinces":["NA9", "SA2", "SA3"],
      "adjacentProvinceIndex":["8", "10", "11"],
      getValues : function(){},

    },
    { "provincename":"SA2",
      "owner":"",
      "numberOfTroops":0,
      "valueToplayer2":0,
      "valueToplayer3":0,
      "valueToplayer4":0,
      "valueToplayer5":0,
      "valueToplayer6":0,
      "adjacentProvinces":["SA1", "SA3", "SA4", "AF1"],
      "adjacentProvinceIndex":["9", "11", "12", "20"],
      getValues : function(){},

    },
    { "provincename":"SA3",
      "owner":"",
      "numberOfTroops":0,
      "valueToplayer2":0,
      "valueToplayer3":0,
      "valueToplayer4":0,
      "valueToplayer5":0,
      "valueToplayer6":0,
      "adjacentProvinces":["SA1", "SA2", "SA4"],
      "adjacentProvinceIndex":["9", "10", "12"],
      getValues : function(){},

    },
    { "provincename":"SA4",
      "owner":"",
      "numberOfTroops":0,
      "valueToplayer2":0,
      "valueToplayer3":0,
      "valueToplayer4":0,
      "valueToplayer5":0,
      "valueToplayer6":0,
      "adjacentProvinces":["SA2", "SA3"],
      "adjacentProvinceIndex":["10", "11"],
      getValues : function(){},

    },
    { "provincename":"EU1",
      "owner":"",
      "numberOfTroops":0,
      "valueToplayer2":0,
      "valueToplayer3":0,
      "valueToplayer4":0,
      "valueToplayer5":0,
      "valueToplayer6":0,
      "adjacentProvinces":["NA3", "EU2", "EU7"],
      "adjacentProvinceIndex":["2", "14", "19"],
      getValues : function(){},

    },
    { "provincename":"EU2",
      "owner":"",
      "numberOfTroops":0,
      "valueToplayer2":0,
      "valueToplayer3":0,
      "valueToplayer4":0,
      "valueToplayer5":0,
      "valueToplayer6":0,
      "adjacentProvinces":["EU1", "EU3", "EU5", "EU7"],
      "adjacentProvinceIndex":["13", "15", "17", "19"],
      getValues : function(){},

    },
    { "provincename":"EU3",
      "owner":"",
      "numberOfTroops":0,
      "valueToplayer2":0,
      "valueToplayer3":0,
      "valueToplayer4":0,
      "valueToplayer5":0,
      "valueToplayer6":0,
      "adjacentProvinces":["EU2", "EU4", "EU5", "AF1"],
      "adjacentProvinceIndex":["14", "16", "17", "20"],
      getValues : function(){},

    },
    { "provincename":"EU4",
      "owner":"",
      "numberOfTroops":0,
      "valueToplayer2":0,
      "valueToplayer3":0,
      "valueToplayer4":0,
      "valueToplayer5":0,
      "valueToplayer6":0,
      "adjacentProvinces":["EU3", "EU5", "EU6", "AS1", "AF1", "AF2"],
      "adjacentProvinceIndex":["15", "17", "18", "30", "20", "21"],
      getValues : function(){},

    },
    { "provincename":"EU5",
      "owner":"",
      "numberOfTroops":0,
      "valueToplayer2":0,
      "valueToplayer3":0,
      "valueToplayer4":0,
      "valueToplayer5":0,
      "valueToplayer6":0,
      "adjacentProvinces":["EU2", "EU3", "EU4", "EU6", "EU7"],
      "adjacentProvinceIndex":["14", "15", "16", "18", "19"],
      getValues : function(){},

    },
    { "provincename":"EU6",
      "owner":"",
      "numberOfTroops":0,
      "valueToplayer2":0,
      "valueToplayer3":0,
      "valueToplayer4":0,
      "valueToplayer5":0,
      "valueToplayer6":0,
      "adjacentProvinces":["EU4", "EU5", "EU7", "AS1", "AS11", "AS12"],
      "adjacentProvinceIndex":["16", "17", "19", "30", "40", "41"],
      getValues : function(){},

    },
    { "provincename":"EU7",
      "owner":"",
      "numberOfTroops":0,
      "valueToplayer2":0,
      "valueToplayer3":0,
      "valueToplayer4":0,
      "valueToplayer5":0,
      "valueToplayer6":0,
      "adjacentProvinces":["EU1", "EU2", "EU5", "EU7"],
      "adjacentProvinceIndex":["13", "14", "17", "19"],
      getValues : function(){},

    },
    { "provincename":"AF1",
      "owner":"",
      "numberOfTroops":0,
      "valueToplayer2":0,
      "valueToplayer3":0,
      "valueToplayer4":0,
      "valueToplayer5":0,
      "valueToplayer6":0,
      "adjacentProvinces":["SA2", "EU3", "EU4", "AF2", "AF3", "AF4"],
      "adjacentProvinceIndex":["10", "15", "16", "21", "22", "23"],
      getValues : function(){},

    },
    { "provincename":"AF2",
      "owner":"",
      "numberOfTroops":0,
      "valueToplayer2":0,
      "valueToplayer3":0,
      "valueToplayer4":0,
      "valueToplayer5":0,
      "valueToplayer6":0,
      "adjacentProvinces":["AF1", "AF3", "EU4", "AS1"],
      "adjacentProvinceIndex":["20", "22", "16", "30"],
      getValues : function(){},

    },
    { "provincename":"AF3",
      "owner":"",
      "numberOfTroops":0,
      "valueToplayer2":0,
      "valueToplayer3":0,
      "valueToplayer4":0,
      "valueToplayer5":0,
      "valueToplayer6":0,
      "adjacentProvinces":["AF1", "AF2", "AF4", "AF5", "AF6", "AS1"],
      "adjacentProvinceIndex":["20", "21", "23", "24", "25", "30"],
      getValues : function(){},

    },
    { "provincename":"AF4",
      "owner":"",
      "numberOfTroops":0,
      "valueToplayer2":0,
      "valueToplayer3":0,
      "valueToplayer4":0,
      "valueToplayer5":0,
      "valueToplayer6":0,
      "adjacentProvinces":["AF1", "AF3", "AF5"],
      "adjacentProvinceIndex":["20", "22", "24"],
      getValues : function(){},

    },
    { "provincename":"AF5",
      "owner":"",
      "numberOfTroops":0,
      "valueToplayer2":0,
      "valueToplayer3":0,
      "valueToplayer4":0,
      "valueToplayer5":0,
      "valueToplayer6":0,
      "adjacentProvinces":["AF3", "AF4", "AF6"],
      "adjacentProvinceIndex":["22", "23", "25"],
      getValues : function(){},

    },
    { "provincename":"AF6",
      "owner":"",
      "numberOfTroops":0,
      "valueToplayer2":0,
      "valueToplayer3":0,
      "valueToplayer4":0,
      "valueToplayer5":0,
      "valueToplayer6":0,
      "adjacentProvinces":["AF3", "AF5"],
      "adjacentProvinceIndex":["22", "24"],
      getValues : function(){},

    },
    { "provincename":"OC1",
      "owner":"",
      "numberOfTroops":0,
      "valueToplayer2":0,
      "valueToplayer3":0,
      "valueToplayer4":0,
      "valueToplayer5":0,
      "valueToplayer6":0,
      "adjacentProvinces":["AS4", "OC2", "OC3"],
      "adjacentProvinceIndex":["33", "27", "28"],
      getValues : function(){},

    },
    { "provincename":"OC2",
      "owner":"",
      "numberOfTroops":0,
      "valueToplayer2":0,
      "valueToplayer3":0,
      "valueToplayer4":0,
      "valueToplayer5":0,
      "valueToplayer6":0,
      "adjacentProvinces":["OC1", "OC3", "OC4"],
      "adjacentProvinceIndex":["26", "28", "29"],
      getValues : function(){},

    },
    { "provincename":"OC3",
      "owner":"",
      "numberOfTroops":0,
      "valueToplayer2":0,
      "valueToplayer3":0,
      "valueToplayer4":0,
      "valueToplayer5":0,
      "valueToplayer6":0,
      "adjacentProvinces":["OC1", "OC2", "OC4"],
      "adjacentProvinceIndex":["26", "27", "29"],
      getValues : function(){},

    },
    { "provincename":"OC4",
      "owner":"",
      "numberOfTroops":0,
      "valueToplayer2":0,
      "valueToplayer3":0,
      "valueToplayer4":0,
      "valueToplayer5":0,
      "valueToplayer6":0,
      "adjacentProvinces":["OC2", "OC3"],
      "adjacentProvinceIndex":["27", "28"],
      getValues : function(){},

    },
    { "provincename":"AS1",
      "owner":"",
      "numberOfTroops":0,
      "valueToplayer2":0,
      "valueToplayer3":0,
      "valueToplayer4":0,
      "valueToplayer5":0,
      "valueToplayer6":0,
      "adjacentProvinces":["EU4", "EU6", "AF2", "AF3", "AS2", "AS3", "AS11"],
      "adjacentProvinceIndex":["16", "18", "21", "22", "31", "32", "40"],
      getValues : function(){},

    },
    { "provincename":"AS2",
      "owner":"",
      "numberOfTroops":0,
      "valueToplayer2":0,
      "valueToplayer3":0,
      "valueToplayer4":0,
      "valueToplayer5":0,
      "valueToplayer6":0,
      "adjacentProvinces":["AS1", "AS3", "AS4"],
      "adjacentProvinceIndex":["30", "32", "33"],
      getValues : function(){},

    },
    { "provincename":"AS3",
      "owner":"",
      "numberOfTroops":0,
      "valueToplayer2":0,
      "valueToplayer3":0,
      "valueToplayer4":0,
      "valueToplayer5":0,
      "valueToplayer6":0,
      "adjacentProvinces":["AS1", "AS2", "AS4", "AS5", "AS10", "AS12", "AS11"],
      "adjacentProvinceIndex":["30", "31", "33", "34", "39", "41", "40"],
      getValues : function(){},

    },
    { "provincename":"AS4",
      "owner":"",
      "numberOfTroops":0,
      "valueToplayer2":0,
      "valueToplayer3":0,
      "valueToplayer4":0,
      "valueToplayer5":0,
      "valueToplayer6":0,
      "adjacentProvinces":["AS2", "AS3", "OC1"],
      "adjacentProvinceIndex":["31", "32", "26"],
      getValues : function(){},

    },
    { "provincename":"AS5",
      "owner":"",
      "numberOfTroops":0,
      "valueToplayer2":0,
      "valueToplayer3":0,
      "valueToplayer4":0,
      "valueToplayer5":0,
      "valueToplayer6":0,
      "adjacentProvinces":["AS3", "AS6", "AS7", "AS8", "AS10"],
      "adjacentProvinceIndex":["32", "35", "36", "37", "39"],
      getValues : function(){},

    },
    { "provincename":"AS6",
      "owner":"",
      "numberOfTroops":0,
      "valueToplayer2":0,
      "valueToplayer3":0,
      "valueToplayer4":0,
      "valueToplayer5":0,
      "valueToplayer6":0,
      "adjacentProvinces":["AS5", "AS7"],
      "adjacentProvinceIndex":["34", "36"],
      getValues : function(){},

    },
    { "provincename":"AS7",
      "owner":"",
      "numberOfTroops":0,
      "valueToplayer2":0,
      "valueToplayer3":0,
      "valueToplayer4":0,
      "valueToplayer5":0,
      "valueToplayer6":0,
      "adjacentProvinces":["NA1", "AS5", "AS6", "AS8", "AS9"],
      "adjacentProvinceIndex":["0", "34", "35", "37", "38"],
      getValues : function(){},

    },
    { "provincename":"AS8",
      "owner":"",
      "numberOfTroops":0,
      "valueToplayer2":0,
      "valueToplayer3":0,
      "valueToplayer4":0,
      "valueToplayer5":0,
      "valueToplayer6":0,
      "adjacentProvinces":["AS5", "AS7", "AS9", "AS10"],
      "adjacentProvinceIndex":["34", "36", "38", "39"],
      getValues : function(){},

    },
    { "provincename":"AS9",
      "owner":"",
      "numberOfTroops":0,
      "valueToplayer2":0,
      "valueToplayer3":0,
      "valueToplayer4":0,
      "valueToplayer5":0,
      "valueToplayer6":0,
      "adjacentProvinces":["AS7", "AS8", "AS10"],
      "adjacentProvinceIndex":["36", "37", "39"],
      getValues : function(){},

    },
    { "provincename":"AS10",
      "owner":"",
      "numberOfTroops":0,
      "valueToplayer2":0,
      "valueToplayer3":0,
      "valueToplayer4":0,
      "valueToplayer5":0,
      "valueToplayer6":0,
      "adjacentProvinces":["AS3", "AS5", "AS8", "AS9", "AS12"],
      "adjacentProvinceIndex":["32", "34", "37", "38", "41"],
      getValues : function(){},

    },
    { "provincename":"AS11",
      "owner":"",
      "numberOfTroops":0,
      "valueToplayer2":0,
      "valueToplayer3":0,
      "valueToplayer4":0,
      "valueToplayer5":0,
      "valueToplayer6":0,
      "adjacentProvinces":["AS1", "AS3", "AS12", "EU6"],
      "adjacentProvinceIndex":["30", "32", "41", "18"],
      getValues : function(){},

    },
    { "provincename": "AS12",
      "owner":"",
      "numberOfTroops":0,
      "valueToplayer2":0,
      "valueToplayer3":0,
      "valueToplayer4":0,
      "valueToplayer5":0,
      "valueToplayer6":0,
      "adjacentProvinces":["AS3", "AS10", "AS11", "EU6"],
      "adjacentProvinceIndex":["32", "39", "40", "18"],
      getValues : function(){},

    },
];
//END GAMEBOARDOBJECT HOLDER
//BEGIN CONTINENT HOLDER
var continentObjectArray = [
    { "continentname":"NA",
      "troopbonus":5,
      "provincesincontinent":["NA1", "NA2", "NA3", "NA4", "NA5", "NA6", "NA7", "NA8", "NA9"],
    },
    { "continentname":"SA",
      "troopbonus":2,
      "provincesincontinent":["SA1", "SA2", "SA3", "SA4"],
    },
    { "continentname":"EU",
      "troopbonus":5,
      "provincesincontinent":["EU1", "EU2", "EU3", "EU4", "EU5", "EU6", "EU7"],
    },
    { "continentname":"AF",
      "troopbonus":3,
      "provincesincontinent":["AF1", "AF2", "AF3", "AF4", "AF5", "AF6"],
    },
    { "continentname":"OC",
      "troopbonus":2,
      "provincesincontinent":["OC1", "OC2", "OC3", "OC4"],
    },
    { "continentname":"AS",
      "troopbonus":7,
      "provincesincontinent":["AS1", "AS2", "AS3", "AS4", "AS5", "AS6", "AS7", "AS8", "AS9", "AS10", "AS11", "AS12"],
    },
];
//END CONTINENT HOLDER
//BEGIN PLAYER OBJECT ARRAY
var playerObjectArray = [
    { "playername":"player1",
      "color":"red",
      "numberOfProvincesOwned":0,
      "provincesOwned":[],
      "provincesOwnedIndex":[],
      "continentsOwned":[],
      "numberOfTroopsPerTurn":0,
      "cardStack":"",
    },
    { "playername":"player2",
      "color":"green",
      "numberOfProvincesOwned":0,
      "provincesOwned":[],
      "provincesOwnedIndex":[],
      "continentsOwned":[],
      "numberOfTroopsPerTurn":0,
      "cardStack":"",
      "attitude":"normal",
    },
    { "playername":"player3",
      "color":"blue",
      "numberOfProvincesOwned":0,
      "provincesOwned":[],
      "provincesOwnedIndex":[],
      "continentsOwned":[],
      "numberOfTroopsPerTurn":0,
      "cardStack":"",
      "attitude":"normal",
    },
    { "playername":"player4",
      "color":"yellow",
      "numberOfProvincesOwned":0,
      "provincesOwned":[],
      "provincesOwnedIndex":[],
      "continentsOwned":[],
      "numberOfTroopsPerTurn":0,
      "cardStack":"",
      "attitude":"normal",
    },
    { "playername":"player5",
      "color":"purple",
      "numberOfProvincesOwned":0,
      "provincesOwned":[],
      "provincesOwnedIndex":[],
      "continentsOwned":[],
      "numberOfTroopsPerTurn":0,
      "cardStack":"",
      "attitude":"normal",
    },
    { "playername":"player6",
      "color":"orange",
      "numberOfProvincesOwned":0,
      "provincesOwned":[],
      "provincesOwnedIndex":[],
      "continentsOwned":[],
      "numberOfTroopsPerTurn":0,
      "cardStack":"",
      "attitude":"normal",
    },
];
//END PLAYER OBJECT ARRAY

//BEGIN VALUE CALCULATIONS

//END VALUE CALCULATIONS

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




//STAGING OBJECT HERE
var gameStage = {stage:"placing", substage:"NA", turn:0, mapFilled:42};
//Stages: placing, beginning reinforcement, main gameplay(activates substages)
//SubStages: Reinforcement, Cards, Attack, FreeMove




var playerTurnBoolean = false;
var indexOfTurn = 0;
//BEGIN BEGINNING TURN TRACKER
function whosTurnIsIt(indexOfTurn){
  if (gameStage.mapFilled <= 0){
    gameStage.stage = "reinforceStart";
  }
  if (indexOfTurn >= 6){
    indexOfTurn = 0;
    gameStage.turn += 1;
  }
  var changeAvail = document.getElementById("troop_count");
  changeAvail.innerHTML = 20-gameStage.turn;
  var checkForPlayer1Index = turnArray[indexOfTurn];
  var setHighlight = document.getElementById("player"+turnArray[indexOfTurn]+"span");
  setHighlight.setAttribute("class", "highlight");
  if (gameStage.stage === "placing"){
    if (playerObjectArray[checkForPlayer1Index-1].playername !== "player1"){
      playerTurnBoolean = false;
      computerSelecting(indexOfTurn);
    } else {
      playerTurnBoolean = true;
    }
  }
  if (gameStage.stage === "reinforceStart"){
    // outer for loop should loop thru each player
    for (let i = 0; i < 6; i++){
      console.log(playerObjectArray[i].playername);
      //map thru every object owned by current player selected
      playerObjectArray[i].provincesOwnedIndex.map((o) =>{
        // Map thru every object that is adjacent to the province Selected by the current player selected
        gameBoardObject[o].adjacentProvinceIndex.map((e) =>{
          var valueAdd = "valueTo"+playerObjectArray[i].playername;
          var nextToAlly = 0; //begin counter to see if surrounded by allies
          //Check every adjacent province for ally or enemy
          if (playerObjectArray[i].playername === gameBoardObject[e].owner){
            nextToAlly += 1;
            gameBoardObject[o][ valueAdd ] -= 1;
            gameBoardObject[e][ valueAdd ] -= 1;
          }
          if (playerObjectArray[i].playername !== gameBoardObject[e].owner){
            switch (true) {
              case gameBoardObject[o].numberOfTroops > gameBoardObject[e].numberOfTroops:
                  console.log("we have more troops");
                  gameBoardObject[o][ valueAdd ] -= 5;
                  gameBoardObject[e][ valueAdd ] += 20;
                  break;
              case gameBoardObject[o].numberOfTroops === gameBoardObject[e].numberOfTroops:
                  console.log("same Amount of troops");
                  gameBoardObject[o][ valueAdd ] -= 5;
                  gameBoardObject[e][ valueAdd ] += 5;
                  break;
              case gameBoardObject[o].numberOfTroops < gameBoardObject[e].numberOfTroops:
                  console.log("we have less troops");
                  gameBoardObject[o][ valueAdd ] += 10;
                  gameBoardObject[e][ valueAdd ] -= 10;
                  break;
            }
          }
          if (nextToAlly === gameBoardObject[o].adjacentProvinceIndex.length){
              gameBoardObject[o][ valueAdd ] = 0;
              console.log("surrounded by friendlies");
          }
        });
      });
    }
    playerTurnBoolean = true;
  }
}
//END BEGINNING TURN TRACKER


//BEGIN COMPUTER PLACING LOGIC
function computerSelecting(indexOfTurn){
  var setHighlight = document.getElementById("player"+turnArray[indexOfTurn]+"span");
  var index = Math.floor(Math.random()*(42-0+0)+0);
  var idOfClicked = gameBoardObject[index].provincename;
  placingTurn(index, (turnArray[indexOfTurn]-1), idOfClicked, indexOfTurn);
}
//END COMPUTER PLACING LOGIC


function mapClick(province, index){
  console.log(gameBoardObject[index]);
  console.log(gameBoardObject[index].owner);
  var idOfClicked = $(province).attr('id');
  if (playerTurnBoolean === false){
    console.log("its not your turn yet");
  }
  if (playerTurnBoolean === true){
    if (gameStage.stage === "placing"){
      placingTurn(index, "0", idOfClicked);
    }
    setTimeout(function() { setplayerTurnBoolean = false;}, 1);
  }
}


//BEGIN PLACING FUNCTION
function placingTurn(index, playerindex, idOfClicked, indexOfTurn){
  if (gameBoardObject[index].owner !== "" && playerindex === "0"){
    return
  } else if (gameBoardObject[index].owner !== ""){
    computerSelecting(indexOfTurn);
    return
  } else {
    var playernamePlacing = playerObjectArray[playerindex].playername
    gameBoardObject[index].owner = playernamePlacing;
    var counterDiv = document.getElementById(idOfClicked+"Counter");
    counterDiv.setAttribute("style", "background-color: "+playerObjectArray[playerindex].color+";");
    var valueAdd = "valueTo"+playernamePlacing;
    gameBoardObject[index][ valueAdd ] += 1;
    gameBoardObject[index].numberOfTroops += 1;
    counterDiv.innerHTML = gameBoardObject[index].numberOfTroops;
    playerObjectArray[playerindex].numberOfProvincesOwned += 1;
    (playerObjectArray[playerindex].provincesOwned).push(idOfClicked);
    (playerObjectArray[playerindex].provincesOwnedIndex).push(index);
  }
  if (playerindex === "0"){
    gameStage.mapFilled -= 1;
    var setHighlight = document.getElementById("player1span");
    setHighlight.setAttribute("class", "");
    whosTurnIsIt((turnArray.indexOf(1)) + 1);
  } else if (playerindex !== "0"){
    gameStage.mapFilled -= 1;
    var setHighlight = document.getElementById("player"+turnArray[indexOfTurn]+"span");
    setTimeout(function() { setHighlight.setAttribute("class", ""); whosTurnIsIt(indexOfTurn + 1);}, 1);
  }
}
//END PLACING FUNCTION



/*TODO
PLACING IS CURRENTLY RANDOM, MAKE COMPUTER THINK
IF IT IS A TIE, THE DEFENDER WINS
*/
