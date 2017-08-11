//BEGIN VALUE CALCULATIONS
function valueCalculationFunction(){
  console.log("recalculating");
  // outer for loop should loop thru each player
  for (let i = 0; i < 6; i++){
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
                gameBoardObject[o][ valueAdd ] -= 5;
                gameBoardObject[e][ valueAdd ] += 20;
                break;
            case gameBoardObject[o].numberOfTroops === gameBoardObject[e].numberOfTroops:
                gameBoardObject[o][ valueAdd ] -= 5;
                gameBoardObject[e][ valueAdd ] += 5;
                break;
            case gameBoardObject[o].numberOfTroops < gameBoardObject[e].numberOfTroops:
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
}
//END VALUE CALCULATIONS
