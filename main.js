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
var playerrenif = 0;
var turnArray = [];
//BEGIN GAMEBOARDOBJECT HOLDER
var gameBoardObject = [
  //ORDER OF CONTINENTS: NA, SA, EU, AF, OC, AS
    { "provincename":"NA1",
      "provinceindexnumber": 0;
      "owner":"",
      "numberOfTroops":0,
      "valueToplayer2":0,
      "valueToplayer3":0,
      "valueToplayer4":0,
      "valueToplayer5":0,
      "valueToplayer6":0,
      "adjacentProvinces":["NA2", "AS7", "NA6"],
      "adjacentProvinceIndex":["1", "36", "5"],
      "continenton":"NA",
      getValues : function(){},

    },
    { "provincename":"NA2",
      "provinceindexnumber": 1;
      "owner":"",
      "numberOfTroops":0,
      "valueToplayer2":0,
      "valueToplayer3":0,
      "valueToplayer4":0,
      "valueToplayer5":0,
      "valueToplayer6":0,
      "adjacentProvinces":["NA1", "NA3", "NA4", "NA6"],
      "adjacentProvinceIndex":["0", "2", "3", "5"],
      "continenton":"NA",
      getValues : function(){},

    },
    { "provincename":"NA3",
      "provinceindexnumber": 2;
      "owner":"",
      "numberOfTroops":0,
      "valueToplayer2":0,
      "valueToplayer3":0,
      "valueToplayer4":0,
      "valueToplayer5":0,
      "valueToplayer6":0,
      "adjacentProvinces":["NA2", "NA4", "NA5", "EU1"],
      "adjacentProvinceIndex":["1", "3", "4", "13"],
      "continenton":"NA",
      getValues : function(){},

    },
    { "provincename":"NA4",
      "provinceindexnumber": 3;
      "owner":"",
      "numberOfTroops":0,
      "valueToplayer2":0,
      "valueToplayer3":0,
      "valueToplayer4":0,
      "valueToplayer5":0,
      "valueToplayer6":0,
      "adjacentProvinces":["NA2", "NA3", "NA5", "NA6", "NA7", "NA8"],
      "adjacentProvinceIndex":["1", "2", "4", "5", "6", "7"],
      "continenton":"NA",
      getValues : function(){},

    },
    { "provincename":"NA5",
      "provinceindexnumber": 4;
      "owner":"",
      "numberOfTroops":0,
      "valueToplayer2":0,
      "valueToplayer3":0,
      "valueToplayer4":0,
      "valueToplayer5":0,
      "valueToplayer6":0,
      "adjacentProvinces":["NA3", "NA4", "NA8"],
      "adjacentProvinceIndex":["2", "3", "7"],
      "continenton":"NA",
      getValues : function(){},

    },
    { "provincename":"NA6",
      "provinceindexnumber": 5;
      "owner":"",
      "numberOfTroops":0,
      "valueToplayer2":0,
      "valueToplayer3":0,
      "valueToplayer4":0,
      "valueToplayer5":0,
      "valueToplayer6":0,
      "adjacentProvinces":["NA1", "NA2", "NA3", "NA4", "NA7"],
      "adjacentProvinceIndex":["0", "1", "2", "3", "6"],
      "continenton":"NA",
      getValues : function(){},

    },
    { "provincename":"NA7",
      "provinceindexnumber": 6;
      "owner":"",
      "numberOfTroops":0,
      "valueToplayer2":0,
      "valueToplayer3":0,
      "valueToplayer4":0,
      "valueToplayer5":0,
      "valueToplayer6":0,
      "adjacentProvinces":["NA4", "NA6", "NA8", "NA9"],
      "adjacentProvinceIndex":["3", "5", "7", "8"],
      "continenton":"NA",
      getValues : function(){},

    },
    { "provincename":"NA8",
      "provinceindexnumber": 7;
      "owner":"",
      "numberOfTroops":0,
      "valueToplayer2":0,
      "valueToplayer3":0,
      "valueToplayer4":0,
      "valueToplayer5":0,
      "valueToplayer6":0,
      "adjacentProvinces":["NA4", "NA5", "NA6", "NA7", "NA9"],
      "adjacentProvinceIndex":["3", "4", "5", "6", "8"],
      "continenton":"NA",
      getValues : function(){},

    },
    { "provincename":"NA9",
      "provinceindexnumber": 8;
      "owner":"",
      "numberOfTroops":0,
      "valueToplayer2":0,
      "valueToplayer3":0,
      "valueToplayer4":0,
      "valueToplayer5":0,
      "valueToplayer6":0,
      "adjacentProvinces":["NA7", "NA8", "SA1"],
      "adjacentProvinceIndex":["6", "7", "9"],
      "continenton":"NA",
      getValues : function(){},

    },
    { "provincename":"SA1",
      "provinceindexnumber": 9;
      "owner":"",
      "numberOfTroops":0,
      "valueToplayer2":0,
      "valueToplayer3":0,
      "valueToplayer4":0,
      "valueToplayer5":0,
      "valueToplayer6":0,
      "adjacentProvinces":["NA9", "SA2", "SA3"],
      "adjacentProvinceIndex":["8", "10", "11"],
      "continenton":"SA",
      getValues : function(){},

    },
    { "provincename":"SA2",
      "provinceindexnumber": 10;
      "owner":"",
      "numberOfTroops":0,
      "valueToplayer2":0,
      "valueToplayer3":0,
      "valueToplayer4":0,
      "valueToplayer5":0,
      "valueToplayer6":0,
      "adjacentProvinces":["SA1", "SA3", "SA4", "AF1"],
      "adjacentProvinceIndex":["9", "11", "12", "20"],
      "continenton":"SA",
      getValues : function(){},

    },
    { "provincename":"SA3",
      "provinceindexnumber": 11;
      "owner":"",
      "numberOfTroops":0,
      "valueToplayer2":0,
      "valueToplayer3":0,
      "valueToplayer4":0,
      "valueToplayer5":0,
      "valueToplayer6":0,
      "adjacentProvinces":["SA1", "SA2", "SA4"],
      "adjacentProvinceIndex":["9", "10", "12"],
      "continenton":"SA",
      getValues : function(){},

    },
    { "provincename":"SA4",
      "provinceindexnumber": 12;
      "owner":"",
      "numberOfTroops":0,
      "valueToplayer2":0,
      "valueToplayer3":0,
      "valueToplayer4":0,
      "valueToplayer5":0,
      "valueToplayer6":0,
      "adjacentProvinces":["SA2", "SA3"],
      "adjacentProvinceIndex":["10", "11"],
      "continenton":"SA",
      getValues : function(){},

    },
    { "provincename":"EU1",
      "provinceindexnumber": 13;
      "owner":"",
      "numberOfTroops":0,
      "valueToplayer2":0,
      "valueToplayer3":0,
      "valueToplayer4":0,
      "valueToplayer5":0,
      "valueToplayer6":0,
      "adjacentProvinces":["NA3", "EU2", "EU7"],
      "adjacentProvinceIndex":["2", "14", "19"],
      "continenton":"EU",
      getValues : function(){},

    },
    { "provincename":"EU2",
      "provinceindexnumber": 14;
      "owner":"",
      "numberOfTroops":0,
      "valueToplayer2":0,
      "valueToplayer3":0,
      "valueToplayer4":0,
      "valueToplayer5":0,
      "valueToplayer6":0,
      "adjacentProvinces":["EU1", "EU3", "EU5", "EU7"],
      "adjacentProvinceIndex":["13", "15", "17", "19"],
      "continenton":"EU",
      getValues : function(){},

    },
    { "provincename":"EU3",
      "provinceindexnumber": 15;
      "owner":"",
      "numberOfTroops":0,
      "valueToplayer2":0,
      "valueToplayer3":0,
      "valueToplayer4":0,
      "valueToplayer5":0,
      "valueToplayer6":0,
      "adjacentProvinces":["EU2", "EU4", "EU5", "AF1"],
      "adjacentProvinceIndex":["14", "16", "17", "20"],
      "continenton":"EU",
      getValues : function(){},

    },
    { "provincename":"EU4",
      "provinceindexnumber": 16;
      "owner":"",
      "numberOfTroops":0,
      "valueToplayer2":0,
      "valueToplayer3":0,
      "valueToplayer4":0,
      "valueToplayer5":0,
      "valueToplayer6":0,
      "adjacentProvinces":["EU3", "EU5", "EU6", "AS1", "AF1", "AF2"],
      "adjacentProvinceIndex":["15", "17", "18", "30", "20", "21"],
      "continenton":"EU",
      getValues : function(){},

    },
    { "provincename":"EU5",
      "provinceindexnumber": 17;
      "owner":"",
      "numberOfTroops":0,
      "valueToplayer2":0,
      "valueToplayer3":0,
      "valueToplayer4":0,
      "valueToplayer5":0,
      "valueToplayer6":0,
      "adjacentProvinces":["EU2", "EU3", "EU4", "EU6", "EU7"],
      "adjacentProvinceIndex":["14", "15", "16", "18", "19"],
      "continenton":"EU",
      getValues : function(){},

    },
    { "provincename":"EU6",
      "provinceindexnumber": 18;
      "owner":"",
      "numberOfTroops":0,
      "valueToplayer2":0,
      "valueToplayer3":0,
      "valueToplayer4":0,
      "valueToplayer5":0,
      "valueToplayer6":0,
      "adjacentProvinces":["EU4", "EU5", "EU7", "AS1", "AS11", "AS12"],
      "adjacentProvinceIndex":["16", "17", "19", "30", "40", "41"],
      "continenton":"EU",
      getValues : function(){},

    },
    { "provincename":"EU7",
      "provinceindexnumber": 19;
      "owner":"",
      "numberOfTroops":0,
      "valueToplayer2":0,
      "valueToplayer3":0,
      "valueToplayer4":0,
      "valueToplayer5":0,
      "valueToplayer6":0,
      "adjacentProvinces":["EU1", "EU2", "EU5", "EU7"],
      "adjacentProvinceIndex":["13", "14", "17", "19"],
      "continenton":"EU",
      getValues : function(){},

    },
    { "provincename":"AF1",
      "provinceindexnumber": 20;
      "owner":"",
      "numberOfTroops":0,
      "valueToplayer2":0,
      "valueToplayer3":0,
      "valueToplayer4":0,
      "valueToplayer5":0,
      "valueToplayer6":0,
      "adjacentProvinces":["SA2", "EU3", "EU4", "AF2", "AF3", "AF4"],
      "adjacentProvinceIndex":["10", "15", "16", "21", "22", "23"],
      "continenton":"AF",
      getValues : function(){},

    },
    { "provincename":"AF2",
      "provinceindexnumber": 21;
      "owner":"",
      "numberOfTroops":0,
      "valueToplayer2":0,
      "valueToplayer3":0,
      "valueToplayer4":0,
      "valueToplayer5":0,
      "valueToplayer6":0,
      "adjacentProvinces":["AF1", "AF3", "EU4", "AS1"],
      "adjacentProvinceIndex":["20", "22", "16", "30"],
      "continenton":"AF",
      getValues : function(){},

    },
    { "provincename":"AF3",
      "provinceindexnumber": 22;
      "owner":"",
      "numberOfTroops":0,
      "valueToplayer2":0,
      "valueToplayer3":0,
      "valueToplayer4":0,
      "valueToplayer5":0,
      "valueToplayer6":0,
      "adjacentProvinces":["AF1", "AF2", "AF4", "AF5", "AF6", "AS1"],
      "adjacentProvinceIndex":["20", "21", "23", "24", "25", "30"],
      "continenton":"AF",
      getValues : function(){},

    },
    { "provincename":"AF4",
      "provinceindexnumber": 23;
      "owner":"",
      "numberOfTroops":0,
      "valueToplayer2":0,
      "valueToplayer3":0,
      "valueToplayer4":0,
      "valueToplayer5":0,
      "valueToplayer6":0,
      "adjacentProvinces":["AF1", "AF3", "AF5"],
      "adjacentProvinceIndex":["20", "22", "24"],
      "continenton":"AF",
      getValues : function(){},

    },
    { "provincename":"AF5",
      "provinceindexnumber": 24;
      "owner":"",
      "numberOfTroops":0,
      "valueToplayer2":0,
      "valueToplayer3":0,
      "valueToplayer4":0,
      "valueToplayer5":0,
      "valueToplayer6":0,
      "adjacentProvinces":["AF3", "AF4", "AF6"],
      "adjacentProvinceIndex":["22", "23", "25"],
      "continenton":"AF",
      getValues : function(){},

    },
    { "provincename":"AF6",
      "provinceindexnumber": 25;
      "owner":"",
      "numberOfTroops":0,
      "valueToplayer2":0,
      "valueToplayer3":0,
      "valueToplayer4":0,
      "valueToplayer5":0,
      "valueToplayer6":0,
      "adjacentProvinces":["AF3", "AF5"],
      "adjacentProvinceIndex":["22", "24"],
      "continenton":"AF",
      getValues : function(){},

    },
    { "provincename":"OC1",
      "provinceindexnumber": 26;
      "owner":"",
      "numberOfTroops":0,
      "valueToplayer2":0,
      "valueToplayer3":0,
      "valueToplayer4":0,
      "valueToplayer5":0,
      "valueToplayer6":0,
      "adjacentProvinces":["AS4", "OC2", "OC3"],
      "adjacentProvinceIndex":["33", "27", "28"],
      "continenton":"OC",
      getValues : function(){},

    },
    { "provincename":"OC2",
      "provinceindexnumber": 27;
      "owner":"",
      "numberOfTroops":0,
      "valueToplayer2":0,
      "valueToplayer3":0,
      "valueToplayer4":0,
      "valueToplayer5":0,
      "valueToplayer6":0,
      "adjacentProvinces":["OC1", "OC3", "OC4"],
      "adjacentProvinceIndex":["26", "28", "29"],
      "continenton":"OC",
      getValues : function(){},

    },
    { "provincename":"OC3",
      "provinceindexnumber": 28;
      "owner":"",
      "numberOfTroops":0,
      "valueToplayer2":0,
      "valueToplayer3":0,
      "valueToplayer4":0,
      "valueToplayer5":0,
      "valueToplayer6":0,
      "adjacentProvinces":["OC1", "OC2", "OC4"],
      "adjacentProvinceIndex":["26", "27", "29"],
      "continenton":"OC",
      getValues : function(){},

    },
    { "provincename":"OC4",
      "provinceindexnumber": 29;
      "owner":"",
      "numberOfTroops":0,
      "valueToplayer2":0,
      "valueToplayer3":0,
      "valueToplayer4":0,
      "valueToplayer5":0,
      "valueToplayer6":0,
      "adjacentProvinces":["OC2", "OC3"],
      "adjacentProvinceIndex":["27", "28"],
      "continenton":"OC",
      getValues : function(){},

    },
    { "provincename":"AS1",
      "provinceindexnumber": 30;
      "owner":"",
      "numberOfTroops":0,
      "valueToplayer2":0,
      "valueToplayer3":0,
      "valueToplayer4":0,
      "valueToplayer5":0,
      "valueToplayer6":0,
      "adjacentProvinces":["EU4", "EU6", "AF2", "AF3", "AS2", "AS3", "AS11"],
      "adjacentProvinceIndex":["16", "18", "21", "22", "31", "32", "40"],
      "continenton":"AS",
      getValues : function(){},

    },
    { "provincename":"AS2",
      "provinceindexnumber": 31;
      "owner":"",
      "numberOfTroops":0,
      "valueToplayer2":0,
      "valueToplayer3":0,
      "valueToplayer4":0,
      "valueToplayer5":0,
      "valueToplayer6":0,
      "adjacentProvinces":["AS1", "AS3", "AS4"],
      "adjacentProvinceIndex":["30", "32", "33"],
      "continenton":"AS",
      getValues : function(){},

    },
    { "provincename":"AS3",
      "provinceindexnumber": 32;
      "owner":"",
      "numberOfTroops":0,
      "valueToplayer2":0,
      "valueToplayer3":0,
      "valueToplayer4":0,
      "valueToplayer5":0,
      "valueToplayer6":0,
      "adjacentProvinces":["AS1", "AS2", "AS4", "AS5", "AS10", "AS12", "AS11"],
      "adjacentProvinceIndex":["30", "31", "33", "34", "39", "41", "40"],
      "continenton":"AS",
      getValues : function(){},

    },
    { "provincename":"AS4",
      "provinceindexnumber": 33;
      "owner":"",
      "numberOfTroops":0,
      "valueToplayer2":0,
      "valueToplayer3":0,
      "valueToplayer4":0,
      "valueToplayer5":0,
      "valueToplayer6":0,
      "adjacentProvinces":["AS2", "AS3", "OC1"],
      "adjacentProvinceIndex":["31", "32", "26"],
      "continenton":"AS",
      getValues : function(){},

    },
    { "provincename":"AS5",
      "provinceindexnumber": 34;
      "owner":"",
      "numberOfTroops":0,
      "valueToplayer2":0,
      "valueToplayer3":0,
      "valueToplayer4":0,
      "valueToplayer5":0,
      "valueToplayer6":0,
      "adjacentProvinces":["AS3", "AS6", "AS7", "AS8", "AS10"],
      "adjacentProvinceIndex":["32", "35", "36", "37", "39"],
      "continenton":"AS",
      getValues : function(){},

    },
    { "provincename":"AS6",
      "provinceindexnumber": 35;
      "owner":"",
      "numberOfTroops":0,
      "valueToplayer2":0,
      "valueToplayer3":0,
      "valueToplayer4":0,
      "valueToplayer5":0,
      "valueToplayer6":0,
      "adjacentProvinces":["AS5", "AS7"],
      "adjacentProvinceIndex":["34", "36"],
      "continenton":"AS",
      getValues : function(){},

    },
    { "provincename":"AS7",
      "provinceindexnumber": 36;
      "owner":"",
      "numberOfTroops":0,
      "valueToplayer2":0,
      "valueToplayer3":0,
      "valueToplayer4":0,
      "valueToplayer5":0,
      "valueToplayer6":0,
      "adjacentProvinces":["NA1", "AS5", "AS6", "AS8", "AS9"],
      "adjacentProvinceIndex":["0", "34", "35", "37", "38"],
      "continenton":"AS",
      getValues : function(){},

    },
    { "provincename":"AS8",
      "provinceindexnumber": 37;
      "owner":"",
      "numberOfTroops":0,
      "valueToplayer2":0,
      "valueToplayer3":0,
      "valueToplayer4":0,
      "valueToplayer5":0,
      "valueToplayer6":0,
      "adjacentProvinces":["AS5", "AS7", "AS9", "AS10"],
      "adjacentProvinceIndex":["34", "36", "38", "39"],
      "continenton":"AS",
      getValues : function(){},

    },
    { "provincename":"AS9",
      "provinceindexnumber": 38;
      "owner":"",
      "numberOfTroops":0,
      "valueToplayer2":0,
      "valueToplayer3":0,
      "valueToplayer4":0,
      "valueToplayer5":0,
      "valueToplayer6":0,
      "adjacentProvinces":["AS7", "AS8", "AS10"],
      "adjacentProvinceIndex":["36", "37", "39"],
      "continenton":"AS",
      getValues : function(){},

    },
    { "provincename":"AS10",
      "provinceindexnumber": 39;
      "owner":"",
      "numberOfTroops":0,
      "valueToplayer2":0,
      "valueToplayer3":0,
      "valueToplayer4":0,
      "valueToplayer5":0,
      "valueToplayer6":0,
      "adjacentProvinces":["AS3", "AS5", "AS8", "AS9", "AS12"],
      "adjacentProvinceIndex":["32", "34", "37", "38", "41"],
      "continenton":"AS",
      getValues : function(){},

    },
    { "provincename":"AS11",
      "provinceindexnumber": 40;
      "owner":"",
      "numberOfTroops":0,
      "valueToplayer2":0,
      "valueToplayer3":0,
      "valueToplayer4":0,
      "valueToplayer5":0,
      "valueToplayer6":0,
      "adjacentProvinces":["AS1", "AS3", "AS12", "EU6"],
      "adjacentProvinceIndex":["30", "32", "41", "18"],
      "continenton":"AS",
      getValues : function(){},

    },
    { "provincename": "AS12",
      "provinceindexnumber": 41;
      "owner":"",
      "numberOfTroops":0,
      "valueToplayer2":0,
      "valueToplayer3":0,
      "valueToplayer4":0,
      "valueToplayer5":0,
      "valueToplayer6":0,
      "adjacentProvinces":["AS3", "AS10", "AS11", "EU6"],
      "adjacentProvinceIndex":["32", "39", "40", "18"],
      "continenton":"AS",
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
      "color":"hotpink",
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


var turnskipper = document.getElementById("skipTurn");
turnskipper.style.display = "none";
var dieholder = document.getElementById("die_holder");
dieholder.style.display = "none";
var announcements = document.getElementById("announcements");

//STAGING OBJECT HERE
var gameStage = {stage:"placing", substage:"NA", turn:-20, mapFilled:42};
//Stages: placing, beginning reinforcement, maingameplay(activates substages)
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


//BEGIN AI LOGIC AND VALUE CALCULATIONS
function valueCalculationFunction(i){
  var valueAdd = "valueTo"+playerObjectArray[i].playername;
  //clear current values
  for (let c = 0; c < 42; c++){
    gameBoardObject[c][ valueAdd ] = 0;
  }
  //1. ADJACENCY DETECTION
  //map thru every object owned by current player selected
  playerObjectArray[i].provincesOwnedIndex.map((o) =>{
    // Map thru every object that is adjacent to the province Selected by the current player selected
    gameBoardObject[o].adjacentProvinceIndex.map((e) =>{
      var nextToAlly = 0; //begin counter to see if surrounded by allies
      //Check every adjacent province for ally or enemy
      if (playerObjectArray[i].playername === gameBoardObject[e].owner){
        nextToAlly += 1;
        gameBoardObject[o][ valueAdd ] += 5;//change value of current player owned
        gameBoardObject[e][ valueAdd ] -= 1;//change value of adjacent
      }
      //The Higher the Value for "o", the more it needs reinforcements
      //The Higher the value for "e", the more likely the computer should attack
      if (playerObjectArray[i].playername !== gameBoardObject[e].owner){
        var changevalue = 0;
        //Switch for adjacency
        switch (true) {
          /*case gameBoardObject[o].numberOfTroops > gameBoardObject[e].numberOfTroops:
              //Selected has way more than adjacent, and sees no reason to reinforce

              //MAKE THIS SO IF THERE IS A LARGE AMOUNT NEARBY IT DOESNT FIRE

              gameBoardObject[o][ valueAdd ] -= 10;
              gameBoardObject[e][ valueAdd ] += (Math.floor(gameBoardObject[o].numberOfTroops/gameBoardObject[e].numberOfTroops)*5);
              break;*/
          case gameBoardObject[o].numberOfTroops > gameBoardObject[e].numberOfTroops:
              //Selected has more than adjacent
              gameBoardObject[o][ valueAdd ] += 5;
              gameBoardObject[e][ valueAdd ] += (Math.floor(gameBoardObject[o].numberOfTroops/gameBoardObject[e].numberOfTroops)*5);
              break;
          case gameBoardObject[o].numberOfTroops === gameBoardObject[e].numberOfTroops:
              //Selected is equal to adjacent
              gameBoardObject[o][ valueAdd ] += Math.floor(Math.random() * (10 - 5)) + 5;//5;
              gameBoardObject[e][ valueAdd ] += Math.floor(Math.random() * (10 - 5)) + 5;//5;
              break;
          case gameBoardObject[o].numberOfTroops < gameBoardObject[e].numberOfTroops && gameBoardObject[o].numberOfTroops > 20 && (Math.floor(gameBoardObject[e].numberOfTroops/gameBoardObject[o].numberOfTroops)) < 3:
              //Selected has less than adjacent and figures its pointless
              gameBoardObject[o][ valueAdd ] -= Math.floor(Math.random() * (25 - 20)) + 20;//20;
              gameBoardObject[e][ valueAdd ] -= Math.floor(Math.random() * (35 - 25)) + 25;//30;
              break;
          case gameBoardObject[o].numberOfTroops < gameBoardObject[e].numberOfTroops:
              //Selected has less than adjacent
              gameBoardObject[o][ valueAdd ] += Math.floor(Math.random() * (25 - 15)) + 15;//20;
              gameBoardObject[e][ valueAdd ] -= Math.floor(Math.random() * (15 - 5)) + 5;//10;
              break;
        }
      }
      if (nextToAlly === gameBoardObject[o].adjacentProvinceIndex.length){
        //ADD AN IF STATEMENT FOR WEATHER OR NOT TO DEFEND CONT
          gameBoardObject[o][ valueAdd ] -= 100;
          console.log("surrounded by friendlies");
      }
    });
  });
  //2. CONTINENT DETECTION
  var naDetect = 0; var saDetect = 0; var euDetect = 0; var afDetect = 0; var ocDetect = 0; var asDetect = 0;
  var contDetection = [];
  playerObjectArray[i].provincesOwnedIndex.map((a) =>{
    switch (gameBoardObject[a].continenton) {
      case "NA":
          naDetect += 1;
          break;
      case "SA":
          saDetect += 1;
          break;
      case "EU":
          euDetect += 1;
          break;
      case "AF":
          afDetect += 1;
          break;
      case "OC":
          ocDetect += 1;
          break;
      case "AS":
          asDetect += 1;
          break;
    }
  });
  if (naDetect === 9){/*ADD WHAT TO DO WHEN OWNED*/} else if (naDetect !== 9 && naDetect >= 5){
    playerObjectArray[i].provincesOwnedIndex.map((b) =>{
      if (gameBoardObject[b].continenton === "NA"){
        gameBoardObject[b][ valueAdd ] += 25;
      }
    });
  };
  if (saDetect === 4){/*ADD WHAT TO DO WHEN OWNED*/} else if (saDetect !== 4 && saDetect >= 2){
    playerObjectArray[i].provincesOwnedIndex.map((b) =>{
      if (gameBoardObject[b].continenton === "SA"){
        gameBoardObject[b][ valueAdd ] += 30;
      }
    });
  };
  if (euDetect === 7){/*ADD WHAT TO DO WHEN OWNED*/} else if (euDetect !== 7 && euDetect >= 4){
    playerObjectArray[i].provincesOwnedIndex.map((b) =>{
      if (gameBoardObject[b].continenton === "EU"){
        gameBoardObject[b][ valueAdd ] += 15;
      }
    });
  };
  if (afDetect === 6){/*ADD WHAT TO DO WHEN OWNED*/} else if (afDetect !== 6 && afDetect >= 3){
    playerObjectArray[i].provincesOwnedIndex.map((b) =>{
      if (gameBoardObject[b].continenton === "AF"){
        gameBoardObject[b][ valueAdd ] += 20;
      }
    });
  };
  if (ocDetect === 4){/*ADD WHAT TO DO WHEN OWNED*/} else if (ocDetect !== 4 && ocDetect >= 2){
    playerObjectArray[i].provincesOwnedIndex.map((b) =>{
      if (gameBoardObject[b].continenton === "OC"){
        gameBoardObject[b][ valueAdd ] += 35;
      }
    });
  };
  if (asDetect === 12){/*ADD WHAT TO DO WHEN OWNED*/} else if (asDetect !== 12 && asDetect >= 7){
    playerObjectArray[i].provincesOwnedIndex.map((b) =>{
      if (gameBoardObject[b].continenton === "AS"){
        gameBoardObject[b][ valueAdd ] += 10;
      }
    });
  };
  //3. RETURN SECTION
  var arrayToChooseFrom = [];
  var arrayofValues = [];
  playerObjectArray[i].provincesOwnedIndex.map((z) =>{
      arrayToChooseFrom.push(gameBoardObject[z]);
      arrayofValues.push(gameBoardObject[z][ valueAdd ]);
  });
  var max = Math.max(...arrayofValues);
  var indexmax = arrayofValues.indexOf(max);
  // console.log(arrayToChooseFrom);
  // console.log(arrayofValues);
  return arrayToChooseFrom[indexmax];
}
//END AI LOGIC AND VALUE CALCULATIONS



//BEGIN BEGINNING TURN TRACKER
function whosTurnIsIt(indexOfTurn){
  var turns = document.getElementById("turns_lapsed");
  turns_lapsed.innerHTML = "Turn " + gameStage.turn;
  if (indexOfTurn >= turnArray.length){
    gameStage.turn += 1;
    setTimeout(function() { whosTurnIsIt(0); }, 10);
    return
  }
  if (gameStage.mapFilled === 0){
    gameStage.stage = "reinforceStart";
    gameStage.mapFilled -= 99;
  }
  var changeAvail = document.getElementsByClassName('troop_count')[0];
  // if (gameStage.stage !== "maingameplay"){
  //   changeAvail.innerHTML  = 20-gameStage.turn;
  // }
  if (gameStage.turn === 0){
    gameStage.stage = "maingameplay";
  }
  var checkForPlayer1Index = turnArray[indexOfTurn];
  var setHighlight = document.getElementById("player"+turnArray[indexOfTurn]+"span");
  setHighlight.setAttribute("class", "highlight");
  if (gameStage.stage === "placing"){
    announcements.innerHTML = playerObjectArray[turnArray[indexOfTurn]-1].playername + " is Placing"
    if (playerObjectArray[checkForPlayer1Index-1].playername !== "player1"){
      playerTurnBoolean = false;
      computerSelecting(indexOfTurn);
    } else {
      playerTurnBoolean = true;
      announcements.innerHTML = "Pick a Province!";
    }
  }
  if (gameStage.stage === "reinforceStart"){
    if (playerObjectArray[checkForPlayer1Index-1].playername !== "player1"){
      playerTurnBoolean = false;
      computerReinforce(indexOfTurn);
    } else {
      playerTurnBoolean = true;
      announcements.innerHTML = "Your Turn!";
    }
  }
  if (gameStage.stage === "maingameplay"){
    if (playerObjectArray[checkForPlayer1Index-1].playername !== "player1"){
      playerTurnBoolean = false;
      computerReinforce(indexOfTurn);
    } else {
      playerTurnBoolean = true;
      playerrenif = calculateTroopPerTurn(playerObjectArray[0].numberOfProvincesOwned);
      announcements.innerHTML = "Your Turn!";
    }
  }
}
//END BEGINNING TURN TRACKER



//BEGIN INDEX CALCULATIONS
function calculateIndex(x){
  for (let i = 0; i < 43; i++){
    if (x.provincename === gameBoardObject[i].provincename){
      return i;
    }
  }
}
//END INDEX CALCULATIONS


//BEGIN REINFORCE TROOP CALCULATIONS
function calculateTroopPerTurn(x){
  //ADD CONTINENT OWNERSHIP TO CALCULATIONS
  if (x <= 9){
    return 3
  }
  if (x > 9)
  return Math.floor(x/3);
}
//END REINFORCE TROOP CALCULATIONS


//BEGIN COMPUTER REINFORCING LOGIC
function computerReinforce(indexOfTurn, reinforceAllowed){
  var playerindex = turnArray[indexOfTurn]-1;
  // console.log(reinforceAllowed);
  if (reinforceAllowed === undefined){
    reinforceAllowed = calculateTroopPerTurn(playerObjectArray[playerindex].numberOfProvincesOwned);
  }
  announcements.innerHTML = playerObjectArray[playerindex].playername + " is Reinforcing"
  var setHighlight = document.getElementById("player"+turnArray[indexOfTurn]+"span");
  var objectChosen = valueCalculationFunction(playerindex);
  var index = calculateIndex(objectChosen);
  var idOfClicked = objectChosen.provincename;
  setTimeout(function() { reinforceTurn(index, playerindex, idOfClicked, reinforceAllowed, indexOfTurn); }, 10/*00*/);
}
//END COMPUTER REINFORCING LOGIC


//BEGIN REINFORCE FUNCTION
function reinforceTurn(index, playerindex, idOfClicked, reinforceAllowed, indexOfTurn){
  if (gameBoardObject[index].owner !== "player1" && playerindex === "0"){
    console.log("you cant reinforce there");
    return
  }
  // console.log(playerObjectArray[playerindex].playername + " Is Now Reinforcing. They are adding a unit to " + idOfClicked);
  if (playerindex === "0"){
    var counterDiv = document.getElementById(idOfClicked+"Counter");
    gameBoardObject[index].numberOfTroops += 1;
    counterDiv.innerHTML = gameBoardObject[index].numberOfTroops;
    if (gameStage.stage === "reinforceStart"){
      var setHighlight = document.getElementById("player1span");
      setHighlight.setAttribute("class", "");
      whosTurnIsIt((turnArray.indexOf(1)) + 1);
    }
    if (gameStage.stage === "maingameplay"){
      console.log(reinforceAllowed);
      playerrenif -= 1;
      if (reinforceAllowed === 0){
        console.log("Click again to attack");
        // attackTurn((turnArray.indexOf(1)), playerindex);
      }
      // else if (reinforceAllowed === 0){
      //   attackTurn((turnArray.indexOf(1)), playerindex);
      // }
    }
  } else if (playerindex !== "0"){
    var counterDiv = document.getElementById(idOfClicked+"Counter");
    gameBoardObject[index].numberOfTroops += 1;
    counterDiv.innerHTML = gameBoardObject[index].numberOfTroops;
    var setHighlight = document.getElementById("player"+turnArray[indexOfTurn]+"span");
    if (gameStage.stage === "reinforceStart"){
      setTimeout(function() { setHighlight.setAttribute("class", ""); whosTurnIsIt(indexOfTurn + 1);}, 100);
    }
    if (gameStage.stage === "maingameplay"){
      if (reinforceAllowed > 0){
        computerReinforce(indexOfTurn, reinforceAllowed-1);
      } else if (reinforceAllowed === 0){
        index = 0;
        idOfClicked = 0;
        skip = false;
        setTimeout(function() { attackTurn(index, playerindex, idOfClicked, skip, indexOfTurn);}, 10/*00*/);
      }
    }
  }
}
//END REINFORCE FUNCTION


var playerselected = "";
//BEGIN ATTACK TURN SELECTION FUNCTION
function attackTurn(index, playerindex, idOfClicked, skip, indexOfTurn){
  var setHighlight = document.getElementById("player"+turnArray[indexOfTurn]+"span");
  if (playerindex === "0" ){
    if (skip === true){
      console.log("player"+turnArray[indexOfTurn]+" is skipping their turn");
      setTimeout(function() { setHighlight.setAttribute("class", ""); whosTurnIsIt((turnArray.indexOf(1)) + 1);}, 100);
    }
    if (skip !== true){
      if (playerselected === "" && gameBoardObject[index].owner !== "player1"){
        return
      }
      if (gameBoardObject[index].owner === "player1" && gameBoardObject[index].numberOfTroops === 1){
        announcements.innerHTML = "Your province must have more than 1 troop!";
        return
      }
      if (playerselected === "" && gameBoardObject[index].owner === "player1"){
        announcements.innerHTML = "Select an adjacent province to attack!";
        playerselected = idOfClicked;
        var counterflash = document.getElementById(playerselected+"Counter");
        counterflash.classList.add('flashing');
      }
      if (playerselected !== "" && gameBoardObject[index].owner === "player1"){
        var counterflash = document.getElementById(playerselected+"Counter");
        counterflash.classList.remove('flashing');
        playerselected = idOfClicked;
        var counterflash = document.getElementById(playerselected+"Counter");
        counterflash.classList.add('flashing');
      }
      if (playerselected !== "" && gameBoardObject[index].owner !== "player1"){
        var counterflash = document.getElementById(playerselected+"Counter");
        var isadjacenttrue = false;
        gameBoardObject[index].adjacentProvinces.map((b) =>{//maps thru each adjacent province id
          if (b === playerselected){
            isadjacenttrue = true;
          }
        });
        if (isadjacenttrue === false){
          announcements.innerHTML = "Province must be adjacent!";
          console.log("PLEASE SELECT ADJACENT, CLICK SHOULD STOP HERE");
          return
        } else if (isadjacenttrue === true){
          counterflash.classList.remove('flashing');
          var allyprovince = "";
          gameBoardObject.map((b) =>{
            if (b.provincename === playerselected){
              console.log("PROVINCE FOUND");
              allyprovince = b;
            }
          });
          setPlayerBattle(gameBoardObject[index], allyprovince);
          playerselected = "";
        }
      }
    }
  } else if (playerindex !== "0"){
    console.log("player"+turnArray[indexOfTurn]+" is now attacking");
    setTimeout(function() { setHighlight.setAttribute("class", ""); whosTurnIsIt(indexOfTurn + 1);}, 10/*00*/);
  }
}
//END ATTACK TURN SELECTION FUNCTION

//BEGIN BATTLE SETUP
var enemyProvince = "";
var allyProvince = "";
function setPlayerBattle(enempv, allpv){
  var dieholder = document.getElementById("die_holder");
  dieholder.style.display = "";
  enemyProvince = enempv;
  allyProvince = allpv;
  playerTurnBoolean = false;
}
//END BATTLE SETUP


//BEGIN AND DIE FUNCTION BATTLE FUNCTION
function playerbattleFunction(){
  var atknbr = 0;
  var defnbr = 0;
  var endBattle = false;
    //Step one: Clear and set die divs
    var reddiceParent = document.getElementById("red_dice_holder");
    while (reddiceParent.hasChildNodes()) {
      reddiceParent.removeChild(reddiceParent.lastChild);
    }
    var whitediceParent = document.getElementById("white_dice_holder");
    while (whitediceParent.hasChildNodes()) {
      whitediceParent.removeChild(whitediceParent.lastChild);
    }
    var arrowParent = document.getElementById("arrow_holder");
    while (arrowParent.hasChildNodes()) {
      arrowParent.removeChild(arrowParent.lastChild);
    }
    var atkcntr = document.getElementById("attacker");
    var allynumoftroops = allyProvince.numberOfTroops-1;
    atkcntr.innerHTML = allynumoftroops;
    switch (true) {
      case allynumoftroops >= 3:
        atknbr = 3;
        break;
      case allynumoftroops === 2:
        atknbr = 2;
        break;
      case allynumoftroops === 1:
        atknbr = 1;
        break;
      case allynumoftroops === 0://Attacker Lost
        cleanUpBattle();
        endBattle = true;
        break;
      default:
        break;
    }
    var defcntr = document.getElementById("defender");
    var enemynumoftroops = enemyProvince.numberOfTroops;
    defcntr.innerHTML = enemynumoftroops;
    switch (true) {
      case enemynumoftroops >= 2:
        defnbr = 2;
        break;
      case enemynumoftroops === 1:
        defnbr = 1;
        break;
      case enemynumoftroops === 0://Attacker Won
        var losinplayer = "";
        for (let i = 0; i < 6; i++){
          if (enemyProvince.owner === playerObjectArray[i].playername){
            losinplayer = i;
          }
        }
        var losinplayer = enemyProvince.owner;
        attackerWon(enemyProvince, playerObjectArray[losinplayer], playerObjectArray[0])
        cleanUpBattle();
        endBattle = true;
        break;
      default:
        break;
    }
    if (endBattle === true){
      return
    }
    //Step two: Roll and sort Atk Die
    attackDieArray = [];
    var atkvar = 0;
    while (atkvar < atknbr){
      var reddienumber = Math.floor(Math.random()*(6-1+1)+1);
      attackDieArray.push(reddienumber);
      atkvar++
    }
    attackDieArray.sort((a, b) => (b - a));//sort attack die array from high to low
    atkvar = 0;
    while (atkvar < attackDieArray.length){
      var newRedDice = document.createElement("img");
      var numbertoappend = attackDieArray[atkvar];
      newRedDice.setAttribute("style", "background-image: url(red"+numbertoappend+".png);");
      reddiceParent.appendChild(newRedDice);
      atkvar++
    }
    //Step three: Roll and sort Def Die
    defDieArray = [];
    var defvar = 0;
    while (defvar < defnbr){
      var whitedienumber = Math.floor(Math.random()*(6-1+1)+1);
      defDieArray.push(whitedienumber);
      defvar++
    }
    defDieArray.sort((a, b) => (b - a));//sort def die array from high to low
    defvar = 0;
    while (defvar < defDieArray.length){
      var newWhiteDice = document.createElement("img");
      var numbertoappend = defDieArray[defvar];
      newWhiteDice.setAttribute("style", "background-image: url(white"+numbertoappend+".png);");
      whitediceParent.appendChild(newWhiteDice);
      defvar++
    }
    //Step four: compare atk and def die
    //find which array is shorter
    var longestarray = "";
    if (attackDieArray.length >= defDieArray.length){//if attacker has more than def
      for (var a = 0; a < defDieArray.length; a++){
        if (defDieArray[a] >= attackDieArray[a]){//Def Wins
          allyProvince.numberOfTroops -= 1;
          var newarrow = document.createElement("img");
          newarrow.setAttribute("class", "whitearrow");
          arrowParent.appendChild(newarrow);
        }
        if (defDieArray[a] < attackDieArray[a]){//Def loses
          enemyProvince.numberOfTroops -= 1;
          var newarrow = document.createElement("img");
          newarrow.setAttribute("class", "redarrow");
          arrowParent.appendChild(newarrow);
        }
      }
    }
    if (attackDieArray.length < defDieArray.length){//if attacker has less than def (why tho)
      for (var a = 0; a < attackDieArray.length; a++){
        if (defDieArray[a] >= attackDieArray[a]){//Def Wins
          allyProvince.numberOfTroops -= 1;
          var newarrow = document.createElement("img");
          newarrow.setAttribute("class", "whitearrow");
          arrowParent.appendChild(newarrow);
        }
        if (defDieArray[a] < attackDieArray[a]){//Def loses
          enemyProvince.numberOfTroops -= 1;
          var newarrow = document.createElement("img");
          newarrow.setAttribute("class", "redarrow");
          arrowParent.appendChild(newarrow);
        }
      }
    }
}
function cleanUpBattle(){
  var dieholder = document.getElementById("die_holder");
  dieholder.style.display = "none";
  enemyProvince = "";
  allyProvince = "";
  var atkcntr = document.getElementById("attacker");
  atkcntr.innerHTML = "";
  var defcntr = document.getElementById("defender");
  defcntr.innerHTML = "";
  var reddiceParent = document.getElementById("red_dice_holder");
  while (reddiceParent.hasChildNodes()) {
    reddiceParent.removeChild(reddiceParent.lastChild);
  }
  var whitediceParent = document.getElementById("white_dice_holder");
  while (whitediceParent.hasChildNodes()) {
    whitediceParent.removeChild(whitediceParent.lastChild);
  }
  var arrowParent = document.getElementById("arrow_holder");
  while (arrowParent.hasChildNodes()) {
    arrowParent.removeChild(arrowParent.lastChild);
  }
  playerTurnBoolean = true;
}
//END AND DIE FUNCTION BATTLE FUNCTION


//BEGIN ATTACKER WON BATTLE FUNCTION
function attackerWon(mapareaobj, losingplayerobj, winningplayerobj, numboftroopstomove){
  //MAPOBJECT: Need to change owner, Background Color, Number of Troops
  //losingplayerobj: Subtract 1 from numberOfProvincesOwned, Take province from provincesOwned, take province from provincesOwnedIndex
  //winningplayerobj: Add 1 to numberOfProvincesOwned, add province to provincesOwned, add province to provincesOwnedIndex
  //Changes Province Owner
  mapareaobj.owner = winningplayerobj.playername;
  //Change Province Background Color
  var changing = mapareaobj.provincename;
  var counterDiv = document.getElementById(changing+"Counter");
  counterDiv.setAttribute("style", "background-color: "+winningplayerobj.color+";");
  //changes number of provinces owned
  losingplayerobj.numberOfProvincesOwned -= 1;
  winningplayerobj.numberOfProvincesOwned += 1;
  console.log(mapareaobj.provinceindexnumber);
  //MOVES PROVINCE NAME FROM ONE PLAYER TO ANOTHER
  var provchangenameindex = losingplayerobj.provincesOwned.indexOf(mapareaobj.provincename);
  var provnamechange = losingplayerobj.provincesOwned.shift(provchangenameindex);
  winningplayerobj.provincesOwned.push(provnamechange);
  //MOVES PROVINCE INDEX FROM ONE PLAYER TO ANOTHER
  var provchangeindexindex = losingplayerobj.provincesOwnedIndex.indexOf(mapareaobj.provinceindexnumber);
  var provindexchange = losingplayerobj.provincesOwnedIndex.shift(provchangeindexindex);
  winningplayerobj.provincesOwned.push(provnamechange);
  mapareaobj.numberOfTroops = numboftroopstomove;
}
//END ATTACKER WON BATTLE FUNCTION


//BEGIN PLAYER CLICK FUNCTION
function mapClick(province, index){
  // console.log(gameBoardObject[index]);
  // console.log(gameBoardObject[index].owner);
  var idOfClicked = $(province).attr('id');
  if (playerTurnBoolean === false){
    // console.log("its not your turn yet");
  }
  if (playerTurnBoolean === true){
    if (gameStage.stage === "placing"){
      setTimeout(function() { placingTurn(index, "0", idOfClicked);}, 1);
    }
    if (gameStage.stage === "reinforceStart"){
      setTimeout(function() { reinforceTurn(index, "0", idOfClicked);}, 2);
    }
    if (gameStage.stage === "maingameplay"){
      if (playerrenif > 0){
        reinforceTurn(index, "0", idOfClicked, playerrenif);
      } else if (playerrenif === 0){
        var turnskipper = document.getElementById("skipTurn");
        turnskipper.style.display = "";
        announcements.innerHTML = "Attack Time!";
        attackTurn(index, "0", idOfClicked, false, indexOfTurn);
      }
      // playerTurnBoolean = false;
    }
  }
}
function finishTurn(){
  var setHighlight = document.getElementById("player1span");
  playerTurnBoolean = false;
  var turnskipper = document.getElementById("skipTurn");
  turnskipper.style.display = "none";
  setTimeout(function() { setHighlight.setAttribute("class", ""); whosTurnIsIt((turnArray.indexOf(1)) + 1);}, 100);
}
//END PLAYER CLICK FUNCTION


//BEGIN CLICK AND DRAG FUNCTION
function eleMouseDown (ele) {
    document.addEventListener ("mousemove" , eleMouseMove , false);
    function eleMouseMove (ev) {
        var pX = ev.pageX;
        var pY = ev.pageY;
        ele.style.left = pX + "px";
        ele.style.top = pY + "px";
        document.addEventListener ("mouseup" , eleMouseUp , false);
    }

    function eleMouseUp () {
        ele.style.top = ""
    		ele.style.left = ""
        document.removeEventListener ("mousemove" , eleMouseMove , false);
        document.removeEventListener ("mouseup" , eleMouseUp , false);
    }
}
//END CLICK AND DRAG FUNCTION





//BEGIN COMPUTER PLACING LOGIC
function computerSelecting(indexOfTurn){
  var setHighlight = document.getElementById("player"+turnArray[indexOfTurn]+"span");
  var index = Math.floor(Math.random()*(42-0+0)+0);
  var idOfClicked = gameBoardObject[index].provincename;
  placingTurn(index, (turnArray[indexOfTurn]-1), idOfClicked, indexOfTurn);
}
//END COMPUTER PLACING LOGIC


//BEGIN PLACING FUNCTION
function placingTurn(index, playerindex, idOfClicked, indexOfTurn){
  if (gameBoardObject[index].owner !== "" && playerindex === "0"){
    return // Makes sure player does not click an already filled spot
  } else if (gameBoardObject[index].owner !== ""){
    computerSelecting(indexOfTurn);
    return // Makes sure computer does not click an already filled spot
  } else {
    var playernamePlacing = playerObjectArray[playerindex].playername //gets playername
    gameBoardObject[index].owner = playernamePlacing ; //makes playername owner of province
    var counterDiv = document.getElementById(idOfClicked+"Counter"); //selects div counter
    counterDiv.setAttribute("style", "background-color: "+playerObjectArray[playerindex].color+";");//adds styling to div counter
    gameBoardObject[index].numberOfTroops += 1; //adds troops to province
    counterDiv.innerHTML = gameBoardObject[index].numberOfTroops; //appends troop amount to div counter
    playerObjectArray[playerindex].numberOfProvincesOwned += 1; // adds players owned
    (playerObjectArray[playerindex].provincesOwned).push(idOfClicked); // adds the province id to player object
    (playerObjectArray[playerindex].provincesOwnedIndex).push(index); // adds the province index to player object
  }
  if (playerindex === "0"){
    gameStage.mapFilled -= 1; // brings one step closer to next section
    var setHighlight = document.getElementById("player1span");
    setHighlight.setAttribute("class", "");
    whosTurnIsIt((turnArray.indexOf(1)) + 1);
  } else if (playerindex !== "0"){
    gameStage.mapFilled -= 1; // brings one step closer to next section
    var setHighlight = document.getElementById("player"+turnArray[indexOfTurn]+"span");
    setTimeout(function() { setHighlight.setAttribute("class", ""); whosTurnIsIt(indexOfTurn + 1);}, 100);
  }
}
//END PLACING FUNCTION



/*TODO
ATTACK FUNCTION MADE, NEED TO ADD MOVEMENT FUCNTION
MAKE BATTLE FUNCTION (IF IT IS A TIE, THE DEFENDER WINS)
MAKE A WIN/LOSS FUNCTION
MAKE FREE MOVE FUNCTION
MAKE FUNCTION FOR CARDS
*/
