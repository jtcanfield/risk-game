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


//BEGIN GAMEBOARDOBJECT HOLDER
var gameBoardObject = [
  //ORDER OF CONTINENTS: NA, SA, EU, AF, OC, AS
    { "name":"NA1",
      "owner":"",
      "numberOfTroops":0,
    },
    { "name":"NA2",
      "owner":"",
      "numberOfTroops":0,
    },
    { "name":"NA3",
      "owner":"",
      "numberOfTroops":0,
    },
    { "name":"NA4",
      "owner":"",
      "numberOfTroops":0,
    },
    { "name":"NA5",
      "owner":"",
      "numberOfTroops":0,
    },
    { "name":"NA6",
      "owner":"",
      "numberOfTroops":0,
    },
    { "name":"NA7",
      "owner":"",
      "numberOfTroops":0,
    },
    { "name":"NA8",
      "owner":"",
      "numberOfTroops":0,
    },
    { "name":"NA9",
      "owner":"",
      "numberOfTroops":0,
    },
    { "name":"SA1",
      "owner":"",
      "numberOfTroops":0,
    },
    { "name":"SA2",
      "owner":"",
      "numberOfTroops":0,
    },
    { "name":"SA3",
      "owner":"",
      "numberOfTroops":0,
    },
    { "name":"SA4",
      "owner":"",
      "numberOfTroops":0,
    },
    { "name":"EU1",
      "owner":"",
      "numberOfTroops":0,
    },
    { "name":"EU2",
      "owner":"",
      "numberOfTroops":0,
    },
    { "name":"EU3",
      "owner":"",
      "numberOfTroops":0,
    },
    { "name":"EU4",
      "owner":"",
      "numberOfTroops":0,
    },
    { "name":"EU5",
      "owner":"",
      "numberOfTroops":0,
    },
    { "name":"EU6",
      "owner":"",
      "numberOfTroops":0,
    },
    { "name":"EU7",
      "owner":"",
      "numberOfTroops":0,
    },
    { "name":"AF1",
      "owner":"",
      "numberOfTroops":0,
    },
    { "name":"AF2",
      "owner":"",
      "numberOfTroops":0,
    },
    { "name":"AF3",
      "owner":"",
      "numberOfTroops":0,
    },
    { "name":"AF4",
      "owner":"",
      "numberOfTroops":0,
    },
    { "name":"AF5",
      "owner":"",
      "numberOfTroops":0,
    },
    { "name":"AF6",
      "owner":"",
      "numberOfTroops":0,
    },
    { "name":"OC1",
      "owner":"",
      "numberOfTroops":0,
    },
    { "name":"OC2",
      "owner":"",
      "numberOfTroops":0,
    },
    { "name":"OC3",
      "owner":"",
      "numberOfTroops":0,
    },
    { "name":"OC4",
      "owner":"",
      "numberOfTroops":0,
    },
    { "name":"AS1",
      "owner":"",
      "numberOfTroops":0,
    },
    { "name":"AS2",
      "owner":"",
      "numberOfTroops":0,
    },
    { "name":"AS3",
      "owner":"",
      "numberOfTroops":0,
    },
    { "name":"AS4",
      "owner":"",
      "numberOfTroops":0,
    },
    { "name":"AS5",
      "owner":"",
      "numberOfTroops":0,
    },
    { "name":"AS6",
      "owner":"",
      "numberOfTroops":0,
    },
    { "name":"AS7",
      "owner":"",
      "numberOfTroops":0,
    },
    { "name":"AS8",
      "owner":"",
      "numberOfTroops":0,
    },
    { "name":"AS9",
      "owner":"",
      "numberOfTroops":0,
    },
    { "name":"AS10",
      "owner":"",
      "numberOfTroops":0,
    },
    { "name":"AS11",
      "owner":"",
      "numberOfTroops":0,
    },
    { "name": "AS12",
      "owner":"",
      "numberOfTroops":0,
    },
];
//END GAMEBOARDOBJECT HOLDER

//BEGIN DIE FUNCTION
function rollTheWhiteDice(){
  var diceParent = document.getElementById("dice_holder");
  var whitedienumber = Math.floor(Math.random()*(6-1+1)+1);
  var newWhiteDice = document.createElement("img");
  newWhiteDice.setAttribute("style", "background-image: url(white"+whitedienumber+".png);");
  diceParent.appendChild(newWhiteDice);
  return whitedienumber;
}
//END DIE FUNCTION

//BEGIN GAME START
function startGame(){
  // document.getElementById("startgamebutton").style.display = "none";
  console.log(rollTheWhiteDice());
}

//END GAME START
//BEGIN PLAYER PLACING

//END PLAYER PLACING



/*TODO
STEP ONE: Roll Dice to see who goes first
STEP TWO: Every Player Puts down a piece
*/

function logtest(x, index){
  console.log(x);
  var idOfClicked = $(x).attr('id');
  console.log(idOfClicked);
  var objectArrayIndex = gameBoardObject[index];
  console.log(objectArrayIndex);
}
