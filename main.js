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

var attackturnskipper = document.getElementById("skipAttackTurn");
attackturnskipper.style.display = "none";
var moveturnskipper = document.getElementById("skipMoveTurn");
moveturnskipper.style.display = "none";
var dieholder = document.getElementById("die_holder");
dieholder.style.display = "none";
var turnArray = []; //TODO TURN THIS INTO A SAVEABLE OBJECT
var indexOfTurn = 0;
var playerindex = 0;
var setHighlight = "";
var playerrenif = 0;
var globalTimeout = 1000;
var playerTurnBoolean = false;
var announcements = document.getElementById("announcements");
//Below are battle objects
var playerselected = "";
var enemyProvince = "";
var allyProvince = "";
//STAGING OBJECT HERE
var gameStage = {stage:"placing", substage:"NA", turn:-20, mapFilled:42};
//Stages: placing, beginning reinforcement, maingameplay(activates substages)
//SubStages: Reinforcement, Cards, Attack, FreeMove

//BEGIN TESTING OBJECTS
// function dotest(){
//   console.log("1. first funct fired");
//   testobject[0].getValues(3, function(x){
//     console.log(`3. callback funct fired ${x}`);
//   })
//   console.log("4. funct finished. async test successful");
// }
// dotest();
// updatetemplate
// updateObjects(type, fromObject, toObject, fromPlayer, toPlayer, function(x){console.log("5. update finished")});
//END TESTING OBJECTS

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
  whosTurnIsIt();
}
//END GAME START

//BEGIN DEBUG MODE TOGGLING
function toggledebug() {
    // var checked = document.getElementById("debugmode").checked;
    if (document.getElementById("debugmode").checked){
      globalTimeout = 10;
    } else {
      globalTimeout = 1000;
    }
}
//END DEBUG MODE TOGGLING

//BEGIN AI REINFORCE LOGIC AND VALUE CALCULATIONS
function reinforceValueCalculationFunction(i){
  var valueAdd = "valueTo"+playerObjectArray[i].playername;
  //clear current values
  for (let c = 0; c < 42; c++){
    gameBoardObject[c][ valueAdd ] = 0;
  }
  //1. ADJACENCY DETECTION
  //map thru every object owned by current player selected
  playerObjectArray[i].provincesOwnedIndex.map((o) =>{
    // Map thru every object that is adjacent to the province Selected by the current player selected
    var nextToAlly = 0; //begin counter to see if surrounded by allies
    gameBoardObject[o].adjacentProvinceIndex.map((e) =>{
      //The Higher the Value for "o", the more it needs reinforcements
      //The Higher the value for "e", the more likely the computer should attack
      if (playerObjectArray[i].playername !== gameBoardObject[e].owner){
        //Switch for adjacency
        switch (true) {
          case gameBoardObject[o].numberOfTroops > gameBoardObject[e].numberOfTroops && gameBoardObject[o].numberOfTroops > 15 && (Math.floor(gameBoardObject[o].numberOfTroops/gameBoardObject[e].numberOfTroops)) >= 2:
              //Selected has Twice as many as adjacent, and sees no reason to reinforce
              gameBoardObject[o][ valueAdd ] -= Math.floor(Math.random() * (20 - 15)) + 15;//15;
              break;
          case gameBoardObject[o].numberOfTroops < gameBoardObject[e].numberOfTroops && gameBoardObject[e].numberOfTroops > 20 && (Math.floor(gameBoardObject[e].numberOfTroops/gameBoardObject[o].numberOfTroops)) >= 3:
              //Selected has Three times or more less than adjacent and figures its pointless
              gameBoardObject[o][ valueAdd ] -= Math.floor(Math.random() * (45 - 30)) + 30;//30;
              break;
          case gameBoardObject[o].numberOfTroops > gameBoardObject[e].numberOfTroops:
              //Selected has more than adjacent
              gameBoardObject[o][ valueAdd ] -= Math.floor(Math.random() * (10 - 5)) + 5;//5;
              break;
          case gameBoardObject[o].numberOfTroops === gameBoardObject[e].numberOfTroops:
              //Selected is equal to adjacent
              gameBoardObject[o][ valueAdd ] += Math.floor(Math.random() * (10 - 5)) + 5;//5;
              break;
          case gameBoardObject[o].numberOfTroops < gameBoardObject[e].numberOfTroops:
              //Selected has less than adjacent
              gameBoardObject[o][ valueAdd ] += Math.floor(Math.random() * (25 - 15)) + 15;//20;
              break;
        }
      }
      //Check every adjacent province for ally or enemy
      if (playerObjectArray[i].playername === gameBoardObject[e].owner){
        nextToAlly += 1;
      }
      if (nextToAlly >= gameBoardObject[o].adjacentProvinceIndex.length){
        gameBoardObject[o][ valueAdd ] -= 2000;
      }
    });
  });
  //2. CONTINENT DETECTION
  var naDetect = 0; var saDetect = 0; var euDetect = 0; var afDetect = 0; var ocDetect = 0; var asDetect = 0;
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
        gameBoardObject[b][ valueAdd ] += 25;//25
      }
    });
  };
  if (saDetect === 4){/*ADD WHAT TO DO WHEN OWNED*/} else if (saDetect !== 4 && saDetect >= 2){
    playerObjectArray[i].provincesOwnedIndex.map((b) =>{
      if (gameBoardObject[b].continenton === "SA"){
        gameBoardObject[b][ valueAdd ] += 30;//30
      }
    });
  };
  if (euDetect === 7){/*ADD WHAT TO DO WHEN OWNED*/} else if (euDetect !== 7 && euDetect >= 4){
    playerObjectArray[i].provincesOwnedIndex.map((b) =>{
      if (gameBoardObject[b].continenton === "EU"){
        gameBoardObject[b][ valueAdd ] += 15;//15
      }
    });
  };
  if (afDetect === 6){/*ADD WHAT TO DO WHEN OWNED*/} else if (afDetect !== 6 && afDetect >= 3){
    playerObjectArray[i].provincesOwnedIndex.map((b) =>{
      if (gameBoardObject[b].continenton === "AF"){
        gameBoardObject[b][ valueAdd ] += 20;//20
      }
    });
  };
  if (ocDetect === 4){/*ADD WHAT TO DO WHEN OWNED*/} else if (ocDetect !== 4 && ocDetect >= 2){
    playerObjectArray[i].provincesOwnedIndex.map((b) =>{
      if (gameBoardObject[b].continenton === "OC"){
        gameBoardObject[b][ valueAdd ] += 30;//35
      }
    });
  };
  if (asDetect === 12){/*ADD WHAT TO DO WHEN OWNED*/} else if (asDetect !== 12 && asDetect >= 7){
    playerObjectArray[i].provincesOwnedIndex.map((b) =>{
      if (gameBoardObject[b].continenton === "AS"){
        gameBoardObject[b][ valueAdd ] += 10;//10`
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
  return arrayToChooseFrom[indexmax];
}
//END AI REINFORCE LOGIC AND VALUE CALCULATIONS


//BEGIN AI ATTACK LOGIC AND VALUE CALCULATIONS
function attackValueCalculationFunction(i){
  var valueAdd = "valueTo"+playerObjectArray[i].playername;
  //clear current values
  for (let c = 0; c < 42; c++){
    gameBoardObject[c][ valueAdd ] = 0;
  }
  //1. ADJACENCY DETECTION
  var singleTroopProvinces = 0;
  //map thru every object owned by current player selected
  playerObjectArray[i].provincesOwnedIndex.map((o) =>{
    // Map thru every object that is adjacent to the province Selected by the current player selected
    var nextToAlly = 0; //begin counter to see if surrounded by allies
    //Force value to -2000 and stop code if the troops equals 1;
    if (gameBoardObject[o].numberOfTroops === 1){
      gameBoardObject[o][ valueAdd ] -= 2000;
      singleTroopProvinces += 1;
      return
    } else {
      // gameBoardObject[o][ valueAdd ] += gameBoardObject[o].numberOfTroops;
      gameBoardObject[o].adjacentProvinceIndex.map((e) =>{
        //The Higher the Value for "o", the more likely it will choose this province to use to attack
        //The Higher the value for "e", the more likely the computer should attack that province
        if (playerObjectArray[i].playername !== gameBoardObject[e].owner){
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
        //Check every adjacent province for ally or enemy
        if (playerObjectArray[i].playername === gameBoardObject[e].owner){
          nextToAlly += 1;
        }
        if (nextToAlly === gameBoardObject[o].adjacentProvinceIndex.length){
            gameBoardObject[o][ valueAdd ] -= 2000;
        }
      });
    };
  });
  //2. CONTINENT DETECTION
  var naDetect = 0; var saDetect = 0; var euDetect = 0; var afDetect = 0; var ocDetect = 0; var asDetect = 0;
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
  //3. SET FRIENDLY PROV SECTION
  var arrayToChooseFromFriendly = [];
  var arrayofValuesFriendly = [];
  playerObjectArray[i].provincesOwnedIndex.map((x) =>{
      arrayToChooseFromFriendly.push(gameBoardObject[x]);
      arrayofValuesFriendly.push(gameBoardObject[x][ valueAdd ]);
  });
  var maxFriendly = Math.max(...arrayofValuesFriendly);
  var indexmaxFriendly = arrayofValuesFriendly.indexOf(maxFriendly);
  var ally = arrayToChooseFromFriendly[indexmaxFriendly];
  //4. SET ENEMY PROV SECTION
  var arrayToChooseFromEnemy = [];
  var arrayofValuesEnemy = [];
  arrayToChooseFromFriendly[indexmaxFriendly].adjacentProvinceIndex.map((z) =>{
    if(gameBoardObject[z].owner !== playerObjectArray[i].playername){
      arrayToChooseFromEnemy.push(gameBoardObject[z]);
      arrayofValuesEnemy.push(gameBoardObject[z][ valueAdd ]);
    }
  });
  var maxEnemy = Math.max(...arrayofValuesEnemy);
  var indexmaxEnemy = arrayofValuesEnemy.indexOf(maxEnemy);
  var enmy = arrayToChooseFromEnemy[indexmaxEnemy];
  // console.log("Array of Values");
  // console.log(arrayofValuesEnemy);
  // console.log("Array of objects");
  // console.log(arrayToChooseFromEnemy);
  // console.log("Highest Value");
  // console.log(maxEnemy);
  // console.log("Index of:");
  // console.log(arrayofValuesEnemy.indexOf(maxEnemy));
  // console.log(arrayToChooseFromFriendly[indexmaxFriendly]);
  // console.log(arrayToChooseFromEnemy[indexmaxEnemy]);
  if (playerObjectArray[i].provincesOwnedIndex.length === singleTroopProvinces){
    console.log("All provinces are 1 Troop");
    ally = "1";
    enmy = "1";
  }
  return {
        allyprov: ally,
        enemyprov: enmy
    };
}
//END AI ATTACK LOGIC AND VALUE CALCULATIONS


//BEGIN AI MOVE LOGIC AND VALUE CALCULATIONS
var moveValueCalculationFunction = function (i, callback){
  reinforceValueCalculationFunction(playerindex);
  var valueAdd = "valueTo"+playerObjectArray[i].playername;
  var surroundedByAllyarray = [];
  var surroundedByAllyarrayValues = [];
  //1. Surrounded DETECTION
  //map thru every object owned by current player selected
  playerObjectArray[i].provincesOwnedIndex.map((o) =>{
    var nextToAlly = 0;
    // Map thru every object that is adjacent to the province Selected by the current player selected
    gameBoardObject[o].adjacentProvinceIndex.map((e) =>{
      //Check every adjacent province for ally
      if (playerObjectArray[i].playername === gameBoardObject[e].owner){
        nextToAlly += 1;
      }
      //2. ADD ONES THAT ARE SURROUNDED AND HAVE MORE THAN ONE TROOP
      if (nextToAlly === gameBoardObject[o].adjacentProvinceIndex.length){
        if (gameBoardObject[o].numberOfTroops > 1){
          surroundedByAllyarray.push(gameBoardObject[o]);
          surroundedByAllyarrayValues.push(gameBoardObject[o].numberOfTroops);
        }
      }
    });
  });
  if (surroundedByAllyarray.length === 0){callback();return};
  //3. GET THE PROV THAT HAS THE MOST TROOPS AND DECLARE IT
  var maxFROM = Math.max(...surroundedByAllyarrayValues);
  var indexFROM = surroundedByAllyarrayValues.indexOf(maxFROM);
  var objectFROM = surroundedByAllyarray[indexFROM];
  //4. GET PROVINCE TO MOVE TO BASED ON RENIF VALUES
  var arrayToChooseAdjacent = [];
  var arrayofValuesAdjacent = [];
  objectFROM.adjacentProvinceIndex.map((z) =>{
    arrayToChooseAdjacent.push(gameBoardObject[z]);
    arrayofValuesAdjacent.push(gameBoardObject[z][ valueAdd ]);
  });
  var maxAdjacent = Math.max(...arrayofValuesAdjacent);
  var indexmaxAdjacent = arrayofValuesAdjacent.indexOf(maxAdjacent);
  var objectTO = arrayToChooseAdjacent[indexmaxAdjacent];
  callback(objectFROM, objectTO);
  return
}
//END AI MOVE LOGIC AND VALUE CALCULATIONS


//BEGIN BEGINNING TURN TRACKER
function whosTurnIsIt(){
  var restartTurnChecker = false;
  if (turnArray.length === 1){
    announcements.innerHTML = "PLAYER"+turnArray[0]+" HAS WON THE GAME!";
    animateannouncementspop();
    restartTurnChecker = true;
    return
  }
  if (restartTurnChecker === true){return};
  var turns = document.getElementById("turns_lapsed");
  turns_lapsed.innerHTML = "Turn " + gameStage.turn;
  if (gameStage.stage === "maingameplay"){
    for (var i = 0; i < turnArray.length; i++){
      var playerToCheck = turnArray[i];//gets the number of the player to check, ie player1
      if (playerObjectArray[playerToCheck-1].numberOfProvincesOwned === 0){//turns playerToCheck into the playerObjectArray index and checks the size
        var indextoeleminiate = turnArray.indexOf(playerToCheck);
        announcements.innerHTML += "Player" + playerToCheck + " Has been eliminated!";
        console.log("PLAYER" + playerToCheck + " HAS BEEN ELIMINATED");
        var eliminated = document.getElementById("player"+playerToCheck+"span");
        eliminated.innerHTML += "(eliminated)";
        eliminated.classList.add("greyedout");
        turnArray.splice(indextoeleminiate, 1);
        console.log(turnArray);
        restartTurnChecker = true;
        setTimeout(function() { whosTurnIsIt(); }, globalTimeout);
        // whosTurnIsIt();
        return
      }
    }
  }
  if (restartTurnChecker === true){return};
  if (indexOfTurn >= turnArray.length){
    gameStage.turn += 1;
    // setTimeout(function() { indexOfTurn = 0; whosTurnIsIt();}, globalTimeout);
    setTimeout(function() { indexOfTurn = 0; whosTurnIsIt();}, 10);
    return
  }
  setHighlight = document.getElementById("player"+turnArray[indexOfTurn]+"span");
  playerindex = turnArray[indexOfTurn]-1;
  if (gameStage.mapFilled === 0){
    gameStage.stage = "reinforceStart";
    gameStage.mapFilled -= 99;
  }
  var changeAvail = document.getElementsByClassName('troop_count')[0];
  if (gameStage.turn === 0){
    gameStage.stage = "maingameplay";
  }
  setHighlight.setAttribute("class", "highlight");
  if (gameStage.stage === "placing"){
    announcements.innerHTML = playerObjectArray[playerindex].playername + " is Placing";
    if (playerObjectArray[playerindex].playername !== "player1"){
      playerTurnBoolean = false;
      setTimeout(function() { computerSelecting(); }, globalTimeout);
      // computerSelecting();
    } else {
      playerTurnBoolean = true;
      announcements.innerHTML = "Pick a Province!";
      animateannouncementspop();
    }
  }
  if (gameStage.stage === "reinforceStart"){
    if (playerObjectArray[playerindex].playername !== "player1"){
      playerTurnBoolean = false;
      setTimeout(function() { computerReinforce(); }, globalTimeout);
      // computerReinforce();
    } else {
      playerTurnBoolean = true;
      announcements.innerHTML = "Place Your Reinforcements!";
      animateannouncementspop();
    }
  }
  if (gameStage.stage === "maingameplay"){
    if (playerObjectArray[playerindex].playername !== "player1"){
      playerTurnBoolean = false;
      setTimeout(function() { computerReinforce(); }, globalTimeout);
      // computerReinforce();
    } else {
      playerTurnBoolean = true;
      playerrenif = calculateTroopPerTurn(playerObjectArray[0]);
      announcements.innerHTML = "Place Your Reinforcements! " + playerrenif + " Troops left!";
      animateannouncementspop();
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
function calculateTroopPerTurn(player){
  var conttroops = 0;
  var naDetect = 0; var saDetect = 0; var euDetect = 0; var afDetect = 0; var ocDetect = 0; var asDetect = 0;
  player.provincesOwnedIndex.map((a) =>{
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
  if (naDetect === 9){conttroops += 5}
  if (saDetect === 4){conttroops += 2}
  if (euDetect === 7){conttroops += 5}
  if (afDetect === 6){conttroops += 3}
  if (ocDetect === 4){conttroops += 2}
  if (asDetect === 12){conttroops += 7}
  if (player.numberOfProvincesOwned <= 9){
    return 3 + conttroops;
  }
  if (player.numberOfProvincesOwned > 9)
  return (Math.floor(player.numberOfProvincesOwned/3)) + conttroops;
}
//END REINFORCE TROOP CALCULATIONS


//BEGIN COMPUTER REINFORCING LOGIC
function computerReinforce(reinforceAllowed){
  if (reinforceAllowed === undefined){
    reinforceAllowed = calculateTroopPerTurn(playerObjectArray[playerindex]);
  }
  announcements.innerHTML = playerObjectArray[playerindex].playername + " is Reinforcing";
  var objectChosen = reinforceValueCalculationFunction(playerindex);
  var index = calculateIndex(objectChosen);
  var idOfClicked = objectChosen.provincename;
  setTimeout(function() { reinforceTurn(index, idOfClicked, reinforceAllowed); }, 10/*00*/);
}
//END COMPUTER REINFORCING LOGIC


//BEGIN REINFORCE FUNCTION
function reinforceTurn(index, idOfClicked, reinforceAllowed){
  if (gameBoardObject[index].owner !== "player1" && playerindex === 0){
    announcements.innerHTML = "You Can Only Reinforce Your Own Provinces!";
    animateannouncementspop();
    return
  } else {
    updateObjects("reinforcing", gameBoardObject[index], null, null, null, function(){
      var counterDiv = document.getElementById(idOfClicked+"Counter");
      counterDiv.classList.add('scalepop');
      setTimeout(function() { counterDiv.classList.remove('scalepop'); }, 500);
      if (playerindex === 0){
        if (gameStage.stage === "reinforceStart"){
          setHighlight.setAttribute("class", "");
          indexOfTurn += 1;
          whosTurnIsIt();
        }
        if (gameStage.stage === "maingameplay"){
          playerrenif -= 1;
          announcements.innerHTML = "Place Your Reinforcements! " + playerrenif + " Troops left!";
          animateannouncementspop();
          if (playerrenif === 0){
            gameStage.substage = "playerattack";
            announcements.innerHTML = "Select a province to attack with!";
            animateannouncementspop();
            attackturnskipper.style.display = "";
            return
          }
        }
      } else if (playerindex !== 0){
        if (gameStage.stage === "reinforceStart"){
          setTimeout(function() { setHighlight.setAttribute("class", ""); indexOfTurn += 1; whosTurnIsIt();}, globalTimeout);
        }
        if (gameStage.stage === "maingameplay"){
          if (reinforceAllowed > 0){
            computerReinforce(reinforceAllowed-1);
          } else if (reinforceAllowed === 0){
            computerAttackTurn();
          }
          return
        }
      }
    });
  }
  // console.log(playerObjectArray[playerindex].playername + " Is Now Reinforcing. They are adding a unit to " + idOfClicked);
}
//END REINFORCE FUNCTION

var timesTried = 0;
//BEGIN COMPUTER BATTLE FINDER
function computerAttackTurn(){
  announcements.innerHTML = playerObjectArray[playerindex].playername + " is Attacking"
  var provincesz = attackValueCalculationFunction(playerindex);
  if (provincesz === "1"){
    console.log("player"+turnArray[indexOfTurn]+" is skipping their turn");
    setTimeout(function() { setHighlight.setAttribute("class", ""); indexOfTurn += 1; whosTurnIsIt();}, 10/*00*/);
  }
  var allyprovince = provincesz.allyprov;
  var enemyProvince = provincesz.enemyprov;
  //BEGIN DEBUG CHECKING
  if (timesTried >= 100){
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
    console.log("player"+turnArray[indexOfTurn]+" IS SKIPPING THEIR TURN");
    timesTried = 0;
    setTimeout(function() { setHighlight.setAttribute("class", ""); indexOfTurn += 1; whosTurnIsIt();}, 10/*00*/);
    return
  }
  if (allyprovince.owner !== playerObjectArray[playerindex].playername){
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
    console.log("player"+turnArray[indexOfTurn]+" HAS SELECTED A PROVINCE THAT IS NOT ITS OWN, PLEASE CHECK");
    console.log("Owner of Province Selected: " + allyprovince.owner);
    console.log(allyprovince);
    timesTried += 1;
    computerAttackTurn();
    return
  }
  if (enemyProvince === null || enemyProvince === undefined){
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
    console.log("player"+turnArray[indexOfTurn]+" CANNOT ATTACK, IS SURROUNDED BY ALLIES");
    timesTried += 1;
    computerAttackTurn();
    return
  }
  if (allyprovince.owner === enemyProvince.owner){
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
    console.log("player"+turnArray[indexOfTurn]+" IS TRYING TO ATTACK ITSELF");
    timesTried += 1;
    computerAttackTurn();
    return
  }
  if (allyprovince.numberOfTroops === 1){
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
    console.log("player"+turnArray[indexOfTurn]+" HAS SELECTED A PROVINCE WITH ONE TROOP");
    timesTried += 1;
    computerAttackTurn();
    return
  } else {
    timesTried = 0;
    // console.log("player"+turnArray[indexOfTurn]+"  Computer Test Attack Begin");
    // console.log(enemyProvince);
    // console.log(allyprovince);
    var defendingplayerindx = 0;
    for (let i = 0; i < 6; i++){
      if (enemyProvince.owner === playerObjectArray[i].playername){
        defendingplayerindx = i;
      }
    }
    var attackingplayerindx = 0;
    for (let i = 0; i < 6; i++){
      if (allyprovince.owner === playerObjectArray[i].playername){
        attackingplayerindx = i;
      }
    }
    setTimeout(function() { setComputerBattle(enemyProvince, allyprovince, defendingplayerindx, attackingplayerindx); }, 10/*00*/);
  }
}
//END COMPUTER BATTLE FINDER


//BEGIN COMPUTER BATTLE
function setComputerBattle(enemyProvince, allyProvince, defendingplayerindx, attackingplayerindx){
  var atknbr = 0;
  var defnbr = 0;
  var endBattle = false;
  var atkcounter = document.getElementById(allyProvince.provincename+"Counter");
  var allynumoftroops = allyProvince.numberOfTroops-1;
  atkcounter.innerHTML = allynumoftroops+1;
  var defcounter = document.getElementById(enemyProvince.provincename+"Counter");
  var enemynumoftroops = enemyProvince.numberOfTroops;
  defcounter.innerHTML = enemynumoftroops;
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
      // console.log("ATTACKER HAS LOST, NO CHANGE HAS BEEN MADE");
      endBattle = true;
      break;
    default:
      break;
  }
  switch (true) {
    case enemynumoftroops >= 2:
      defnbr = 2;
      break;
    case enemynumoftroops === 1:
      defnbr = 1;
      break;
    case enemynumoftroops === 0://Attacker Won
        allyProvince.numberOfTroops -= allynumoftroops;
        atkcounter.innerHTML = allyProvince.numberOfTroops;
        // console.log("ATTACKER WON THE BATTLE");
        attackerWon(enemyProvince, playerObjectArray[defendingplayerindx], playerObjectArray[attackingplayerindx], allynumoftroops);
        endBattle = true;
      break;
    default:
      break;
  }
  if (endBattle === true){
    // computerAttackTurn();
    computerMoveTurn();
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
  //Step three: Roll and sort Def Die
  defDieArray = [];
  var defvar = 0;
  while (defvar < defnbr){
    var whitedienumber = Math.floor(Math.random()*(6-1+1)+1);
    defDieArray.push(whitedienumber);
    defvar++
  }
  defDieArray.sort((a, b) => (b - a));//sort def die array from high to low
  //Step four: compare atk and def die
  //find which array is shorter
  if (attackDieArray.length >= defDieArray.length){//if attacker has more than def
    for (var a = 0; a < defDieArray.length; a++){
      if (defDieArray[a] >= attackDieArray[a]){//Def Wins
        allyProvince.numberOfTroops -= 1;
      }
      if (defDieArray[a] < attackDieArray[a]){//Def loses
        enemyProvince.numberOfTroops -= 1;
      }
    }
  }
  if (attackDieArray.length < defDieArray.length){//if attacker has less than def (why tho)
    for (var a = 0; a < attackDieArray.length; a++){
      if (defDieArray[a] >= attackDieArray[a]){//Def Wins
        allyProvince.numberOfTroops -= 1;
      }
      if (defDieArray[a] < attackDieArray[a]){//Def loses
        enemyProvince.numberOfTroops -= 1;
      }
    }
  }
  setComputerBattle(enemyProvince, allyProvince, defendingplayerindx, attackingplayerindx);
}
//END BATTLE

//BEGIN COMPUTER MOVE TURN
function computerMoveTurn(){
  moveValueCalculationFunction(playerindex, function(fromOBJ, toOBJ){
    if (fromOBJ === undefined || toOBJ === undefined){
      return
    } else {
      var numtroops = (fromOBJ.numberOfTroops)-1;
      fromOBJ.numberOfTroops -= numtroops;
      toOBJ.numberOfTroops += numtroops;
      var fromCounter = document.getElementById(fromOBJ.provincename+"Counter");
      var toCounter = document.getElementById(toOBJ.provincename+"Counter");
      fromCounter.innerHTML = fromOBJ.numberOfTroops;
      toCounter.innerHTML = toOBJ.numberOfTroops;
    }
  return
  });
  setTimeout(function() { setHighlight.setAttribute("class", ""); indexOfTurn += 1; whosTurnIsIt();}, 10/*00*/);
}
//END COMPUTER MOVE TURN

//BEGIN ATTACK TURN SELECTION FUNCTION
function playerAttackTurn(index, idOfClicked, skip){
  if (skip === true){
    console.log("player"+turnArray[indexOfTurn]+" is skipping their turn");
    setTimeout(function() { setHighlight.setAttribute("class", ""); indexOfTurn += 1; whosTurnIsIt();}, 100);
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
      animateannouncementspop();
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
        animateannouncementspop();
        return
      } else if (isadjacenttrue === true){
        counterflash.classList.remove('flashing');
        var allyprovince = "";
        gameBoardObject.map((b) =>{
          if (b.provincename === playerselected){
            allyprovince = b;
          }
        });
        setPlayerBattle(gameBoardObject[index], allyprovince);
        playerselected = "";
      }
    }
  }
}
//END ATTACK TURN SELECTION FUNCTION


//BEGIN PLAYER BATTLE SETUP
function setPlayerBattle(enempv, allpv){
  var attackButton = document.getElementById("attackButton");
  attackButton.innerHTML = "Attack!";
  var dieholder = document.getElementById("die_holder");
  dieholder.style.display = "";
  attackturnskipper.style.display = "none";
  enemyProvince = enempv;
  allyProvince = allpv;
  playerTurnBoolean = false;
}
//END PLAYER BATTLE SETUP


//BEGIN PLAYER BATTLE AND DIE FUNCTION
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
    var atkcounter = document.getElementById(allyProvince.provincename+"Counter");
    var allynumoftroops = allyProvince.numberOfTroops-1;
    atkcounter.innerHTML = allynumoftroops+1;
    atkcntr.innerHTML = allynumoftroops;
    var defcntr = document.getElementById("defender");
    var defcounter = document.getElementById(enemyProvince.provincename+"Counter");
    var enemynumoftroops = enemyProvince.numberOfTroops;
    defcounter.innerHTML = enemynumoftroops;
    defcntr.innerHTML = enemynumoftroops;
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
    switch (true) {
      case enemynumoftroops >= 2:
        defnbr = 2;
        break;
      case enemynumoftroops === 1:
        defnbr = 1;
        break;
      case enemynumoftroops === 0://Attacker Won
        defcounter.classList.add("flashing")
        var troopsnumberinput = document.getElementById("numberOfTroopsToMove");
        var inputholder = document.getElementById("inputholder");
        if (troopsnumberinput === null){
          var holder = `<input type="number" id="numberOfTroopsToMove" value="0">`;
          inputholder.innerHTML = holder;
        }
        var attackButton = document.getElementById("attackButton");
        attackButton.innerHTML = "Move Troops";
        var numtroops = Number(document.getElementById("numberOfTroopsToMove").value);
        if (numtroops > allynumoftroops || numtroops===undefined || numtroops===0){
          announcements.innerHTML = "You can only move up to " + allynumoftroops + " Troops!";
          return
        } else {
          allyProvince.numberOfTroops -= numtroops;
          atkcounter.innerHTML = allyProvince.numberOfTroops;
          var losinplayer = 0;
          for (let i = 0; i < 6; i++){
            if (enemyProvince.owner === playerObjectArray[i].playername){
              losinplayer = i;
            }
          }
          attackerWon(enemyProvince, playerObjectArray[losinplayer], playerObjectArray[0], numtroops);
          cleanUpBattle();
          endBattle = true;
        }
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
//END PLAYER BATTLE AND DIE FUNCTION


//BEGIN PLAYER BATTLE GRAPHIC CLEANUP
function cleanUpBattle(){
  announcements.innerHTML = "Select a province to attack with!";
  animateannouncementspop();
  var inputholder = document.getElementById("inputholder");
  inputholder.innerHTML = "";
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
  attackturnskipper.style.display = "";
  playerTurnBoolean = true;
}
//END PLAYER BATTLE GRAPHIC CLEANUP


//BEGIN ATTACKER WON BATTLE FUNCTION
function attackerWon(mapareaobj, losingplayerobj, winningplayerobj, numboftroopstomove){
  //Changes Province Owner
  mapareaobj.owner = winningplayerobj.playername;
  //Change Province Background Color
  var changing = mapareaobj.provincename;
  var counterDiv = document.getElementById(changing+"Counter");
  counterDiv.setAttribute("style", "background-color: "+winningplayerobj.color+";");
  //changes number of provinces owned
  losingplayerobj.numberOfProvincesOwned -= 1;
  winningplayerobj.numberOfProvincesOwned += 1;
  //MOVES PROVINCE NAME FROM ONE PLAYER TO ANOTHER
  var provchangenameindex = losingplayerobj.provincesOwned.indexOf(mapareaobj.provincename);
  var provnamechange = losingplayerobj.provincesOwned.splice(provchangenameindex, 1);
  winningplayerobj.provincesOwned.push(provnamechange[0]);
  //MOVES PROVINCE INDEX FROM ONE PLAYER TO ANOTHER
  var provchangeindexindex = losingplayerobj.provincesOwnedIndex.indexOf(mapareaobj.provinceindexnumber);
  var provindexchange = losingplayerobj.provincesOwnedIndex.splice(provchangeindexindex, 1);
  winningplayerobj.provincesOwnedIndex.push(provindexchange[0]);
  //MOVES TROOPS SELECTED
  mapareaobj.numberOfTroops = numboftroopstomove;
  var counter = document.getElementById(mapareaobj.provincename+"Counter");
  counter.classList.remove("flashing");
  counter.innerHTML = numboftroopstomove;
}
//END ATTACKER WON BATTLE FUNCTION


//BEGIN MOVE TURN SELECTION FUCNTION
function moveTurn(index, idOfClicked, skip){
  if (skip === true){
    console.log("player"+turnArray[indexOfTurn]+" is skipping their turn");
    setTimeout(function() { setHighlight.setAttribute("class", ""); indexOfTurn += 1; whosTurnIsIt();}, 100);
  }
  if (skip !== true){
    if (playerselected === "" && gameBoardObject[index].owner !== "player1"){
      return
    }
    if (playerselected === "" && gameBoardObject[index].owner === "player1" && gameBoardObject[index].numberOfTroops === 1){
      announcements.innerHTML = "Your province must have more than 1 troop!";
      animateannouncementspop();
      return
    }
    if (playerselected === "" && gameBoardObject[index].owner === "player1"){
      announcements.innerHTML = "Select an adjacent province to move troops to!";
      animateannouncementspop();
      playerselected = idOfClicked;
      var counterflash = document.getElementById(playerselected+"Counter");
      counterflash.classList.add('flashing');
    }
    if (gameBoardObject[index].owner !== "player1"){
      announcements.innerHTML = "Cannot Move To Enemy!";
      animateannouncementspop();
    }
    if (playerselected !== "" && gameBoardObject[index].owner === "player1"){
      var counterflash = document.getElementById(playerselected+"Counter");
      var isadjacenttrue = false;
      gameBoardObject[index].adjacentProvinces.map((b) =>{//maps thru each adjacent province id
        if (b === playerselected){
          isadjacenttrue = true;
        }
      });
      if (isadjacenttrue === false){
        announcements.innerHTML = "Province must be adjacent!";
        animateannouncementspop();
        return
      } else if (isadjacenttrue === true){
        counterflash.classList.remove('flashing');
        var allyprovince = "";
        gameBoardObject.map((b) =>{
          if (b.provincename === playerselected){
            allyprovince = b;
          }
        });
        moveAction(allyprovince.provinceindexnumber, gameBoardObject[index].provinceindexnumber);
        playerselected = "";
      }
    }
  }
}
//END MOVE TURN SELECTION FUCNTION
function moveAction(fromind, toind){
  moveturnskipper.style.display = "none";
  objfrom = gameBoardObject[fromind];
  objto = gameBoardObject[toind];
  var fromcounter = document.getElementById(objfrom.provincename+"Counter");
  var tocounter = document.getElementById(objto.provincename+"Counter");
  fromcounter.classList.add("flashing");
  tocounter.classList.add("flashing");
  var movableTroops = objfrom.numberOfTroops-1;
  var troopsnumberinput = document.getElementById("numberOfTroopsToMove");
  var moveinputholder = document.getElementById("moveinputholder");
  if (troopsnumberinput === null){
    var holder = `<input type="number" id="numberOfTroopsToMove" value="0">
    <button id="moveEm" onclick="moveAction(${fromind}, ${toind})">Move Troops!</button>`;
    moveinputholder.innerHTML = holder;
    announcements.innerHTML = "Move Troops!";
  }
  var numtroops = Number(document.getElementById("numberOfTroopsToMove").value);
  if (numtroops > movableTroops || numtroops===undefined || numtroops===0){
    announcements.innerHTML = "You can only move up to " + movableTroops + " Troops!";
    return
  } else {
    objfrom.numberOfTroops -= numtroops;
    objto.numberOfTroops += numtroops;
    fromcounter.innerHTML = objfrom.numberOfTroops;
    tocounter.innerHTML = objto.numberOfTroops;
    fromcounter.classList.remove("flashing");
    tocounter.classList.remove("flashing");
    moveinputholder.innerHTML = "";
    finishMoveTurn();
  }
}

//BEGIN PLAYER CLICK FUNCTION
function mapClick(province, index){
  // console.log(gameBoardObject[index]);
  var idOfClicked = $(province).attr('id');
  if (playerTurnBoolean === false){
    // console.log("its not your turn yet");
  }
  if (playerTurnBoolean === true){
    if (gameStage.stage === "placing"){
      setTimeout(function() { placingTurn(index, idOfClicked);}, 1);
    }
    if (gameStage.stage === "reinforceStart"){
      setTimeout(function() { reinforceTurn(index, idOfClicked);}, 2);
    }
    if (gameStage.stage === "maingameplay"){
      if (playerrenif > 0){
        reinforceTurn(index, idOfClicked, playerrenif);
      } else if (gameStage.substage === "playerattack"){
        announcements.innerHTML = "Select a province to attack with!";
        playerAttackTurn(index, idOfClicked, false);
      } else if (gameStage.substage === "playermove"){
        announcements.innerHTML = "Select a province to move troops From!";
        moveTurn(index, idOfClicked, false);
      }
      // playerTurnBoolean = false;
    }
  }
}
function finishAttackTurn(){
  var counterflash = document.getElementById(playerselected+"Counter");
  if (counterflash !== null && counterflash !== undefined){
    counterflash.classList.remove('flashing');
  }
  playerselected = "";
  gameStage.substage = "playermove"
  attackturnskipper.style.display = "none";
  moveturnskipper.style.display = "";
  announcements.innerHTML = "Select Province To move troops from.";
  return
}
function finishMoveTurn(){
  var counterflash = document.getElementById(playerselected+"Counter");
  if (counterflash !== null && counterflash !== undefined){
    counterflash.classList.remove('flashing');
  }
  moveturnskipper.style.display = "none";
  playerselected = "";
  gameStage.substage = "";
  playerTurnBoolean = false;
  setTimeout(function() { setHighlight.setAttribute("class", ""); indexOfTurn += 1; whosTurnIsIt();}, 100);
}
//END PLAYER CLICK FUNCTION


//BEGIN COMPUTER PLACING LOGIC
function computerSelecting(){
  var index = Math.floor(Math.random()*(42-0+0)+0);
  var idOfClicked = gameBoardObject[index].provincename;
  placingTurn(index, idOfClicked);
}
//END COMPUTER PLACING LOGIC


//BEGIN PLACING FUNCTION
function placingTurn(index, idOfClicked){
  if (gameBoardObject[index].owner !== "" && playerindex === 0){
    return // Makes sure player does not click an already filled spot
  } else if (gameBoardObject[index].owner !== ""){
    computerSelecting();
    return // Makes sure computer does not click an already filled spot
  } else {
    updateObjects("placing", gameBoardObject[index], null, playerObjectArray[playerindex], null, function(){
      console.log("5. update finished")
    });
    var counterDiv = document.getElementById(idOfClicked+"Counter"); //selects div counter
    counterDiv.classList.add('scalepop');
    setTimeout(function() { counterDiv.classList.remove('scalepop'); }, 500); //Makes icon pop for user to see
  }
  if (playerindex === 0){
    gameStage.mapFilled -= 1; // brings one step closer to next section
    setHighlight.setAttribute("class", "");
    indexOfTurn += 1;
    whosTurnIsIt();
  } else if (playerindex !== 0){
    gameStage.mapFilled -= 1; // brings one step closer to next section
    setTimeout(function() { setHighlight.setAttribute("class", ""); indexOfTurn += 1; whosTurnIsIt();}, 100);
  }
}
//END PLACING FUNCTION

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


function animateannouncementspop () {
  document.getElementById('announcements').animate([
  // keyframes
    { transform: 'scale(1.2)' },
    { transform: 'scale(1)' }
  ], {
    // timing options
    duration: 500,
    iterations: 1
  });
}
