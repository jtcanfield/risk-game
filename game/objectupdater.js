// FUNCT TO UPDATE PLAYEROBJECT, MAPOBJECT, AND CONTINENTOBJECT
var updateObjects = function(type, fromProvince, toProvince, fromPlayer, toPlayer, callback){
  console.log("1. updating Objects");
  if (type === "placing"){
    fromProvince.owner = fromPlayer.playername ; //makes playername owner of province
    fromProvince.color = fromPlayer.color ; //changes color of province
    fromProvince.numberOfTroops += 1; //adds troops to province
    fromPlayer.numberOfProvincesOwned += 1; // adds players owned
    (fromPlayer.provincesOwned).push(fromProvince.provincename); // adds the province id to player object
    (fromPlayer.provincesOwnedIndex).push(fromProvince.provinceindexnumber); // adds the province index to player object
    //Beginning of game, when players are selecting provinces
    //Needs: 1 Board Object, 1 Player Object
  } else if (type === "reinforcing"){
    //Reinforce phase of turn
    fromProvince.numberOfTroops += 1;
    //Needs: 1 Board Object
  } else if (type === "moving"){
    //Move phase of turn, player owns both provinces (from and to provinces)
    //Needs: 2 Board Objects
  } else if (type === "attacking"){
    //Battle, Changes numbers
    //Needs: 2 Board Objects
  } else if (type === "attackvictory"){
    //called when someone wins a battle
    //Needs: 2 Board Objects, 2 Player Objects
  } else {
    console.log("BROKE")
  }
  updateMap(function(){
    console.log("4. starting callback")
    return (callback());
  });
}
