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
    {
      "NA1":{
      "owner":"red",
      "numberOfTroops":0,
      }
    },
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
