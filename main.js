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

var gameBoardObject = //opens parenting object
  [//opens array
    {//opens first object (unnamed) in array
      "NA1":{//opens object within object within array
      "owner":"red",
      "numberOfTroops":0,
      }//closes object within object within array
    },//closes first object (unnamed) in array
  ];//closes array

function logtest(x){
  console.log("Clicked!");
  console.log(x);
  console.log(gameBoardObject);
}
/*TODO
STEP ONE: Roll Dice to see who goes first
STEP TWO: Every Player Puts down a piece
*/
