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
    { "NA1":{
      "owner":"",
      "numberOfTroops":0,
    } },
    { "NA2":{
      "owner":"",
      "numberOfTroops":0,
    } },
    { "NA3":{
      "owner":"",
      "numberOfTroops":0,
    } },
    { "NA4":{
      "owner":"",
      "numberOfTroops":0,
    } },
    { "NA5":{
      "owner":"",
      "numberOfTroops":0,
    } },
    { "NA6":{
      "owner":"",
      "numberOfTroops":0,
    } },
    { "NA7":{
      "owner":"",
      "numberOfTroops":0,
    } },
    { "NA8":{
      "owner":"",
      "numberOfTroops":0,
    } },
    { "NA9":{
      "owner":"",
      "numberOfTroops":0,
    } },
    { "SA1":{
      "owner":"",
      "numberOfTroops":0,
    } },
    { "SA2":{
      "owner":"",
      "numberOfTroops":0,
    } },
    { "SA3":{
      "owner":"",
      "numberOfTroops":0,
    } },
    { "SA4":{
      "owner":"",
      "numberOfTroops":0,
    } },
    { "EU1":{
      "owner":"",
      "numberOfTroops":0,
    } },
    { "EU2":{
      "owner":"",
      "numberOfTroops":0,
    } },
    { "EU3":{
      "owner":"",
      "numberOfTroops":0,
    } },
    { "EU4":{
      "owner":"",
      "numberOfTroops":0,
    } },
    { "EU5":{
      "owner":"",
      "numberOfTroops":0,
    } },
    { "EU6":{
      "owner":"",
      "numberOfTroops":0,
    } },
    { "EU7":{
      "owner":"",
      "numberOfTroops":0,
    } },
    { "AF1":{
      "owner":"",
      "numberOfTroops":0,
    } },
    { "AF2":{
      "owner":"",
      "numberOfTroops":0,
    } },
    { "AF3":{
      "owner":"",
      "numberOfTroops":0,
    } },
    { "AF4":{
      "owner":"",
      "numberOfTroops":0,
    } },
    { "AF5":{
      "owner":"",
      "numberOfTroops":0,
    } },
    { "AF6":{
      "owner":"",
      "numberOfTroops":0,
    } },
    { "OC1":{
      "owner":"",
      "numberOfTroops":0,
    } },
    { "OC2":{
      "owner":"",
      "numberOfTroops":0,
    } },
    { "OC3":{
      "owner":"",
      "numberOfTroops":0,
    } },
    { "OC4":{
      "owner":"",
      "numberOfTroops":0,
    } },
    { "AS1":{
      "owner":"",
      "numberOfTroops":0,
    } },
    { "AS2":{
      "owner":"",
      "numberOfTroops":0,
    } },
    { "AS3":{
      "owner":"",
      "numberOfTroops":0,
    } },
    { "AS4":{
      "owner":"",
      "numberOfTroops":0,
    } },
    { "AS5":{
      "owner":"",
      "numberOfTroops":0,
    } },
    { "AS6":{
      "owner":"",
      "numberOfTroops":0,
    } },
    { "AS7":{
      "owner":"",
      "numberOfTroops":0,
    } },
    { "AS8":{
      "owner":"",
      "numberOfTroops":0,
    } },
    { "AS9":{
      "owner":"",
      "numberOfTroops":0,
    } },
    { "AS10":{
      "owner":"",
      "numberOfTroops":0,
    } },
    { "AS11":{
      "owner":"",
      "numberOfTroops":0,
    } },
    { "AS12":{
      "owner":"",
      "numberOfTroops":0,
    } },
];

/*TODO
STEP ONE: Roll Dice to see who goes first
STEP TWO: Every Player Puts down a piece
*/

function logtest(x){
  console.log("Clicked!");
  console.log(x);
  console.log(gameBoardObject);
}
