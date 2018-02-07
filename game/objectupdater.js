// FUNCT TO UPDATE PLAYEROBJECT, MAPOBJECT, AND CONTINENTOBJECT
var updateObjects = function(type, fromProvince, toProvince, fromPlayer, toPlayer, data, callback){
  console.log("1. updating Objects");
  if (type === "placing"){
    //Beginning of game, when players are selecting provinces
    fromProvince.owner = fromPlayer.playername ; //makes playername owner of province
    fromProvince.color = fromPlayer.color ; //changes color of province
    fromProvince.numberOfTroops += 1; //adds troops to province
    fromPlayer.numberOfProvincesOwned += 1; // adds players owned
    (fromPlayer.provincesOwned).push(fromProvince.provincename); // adds the province id to player object
    (fromPlayer.provincesOwnedIndex).push(fromProvince.provinceindexnumber); // adds the province index to player object
    //Needs: 1 Board Object, 1 Player Object
  } else if (type === "reinforcing"){
    //Reinforce phase of turn
    fromProvince.numberOfTroops += 1;
  } else if (type === "moving"){
    //Move phase of turn, player owns both provinces (from and to provinces)
    //Needs: 2 Board Objects
  } else if (type === "attacking"){
    //Battle, Changes numbers
    //Needs: 2 Board Objects
  } else if (type === "attackvictory"){
    //Changes Province Owner
    toProvince.owner = fromPlayer.playername;
    //Change Province Background Color
    toProvince.color = fromPlayer.color;
    //changes number of provinces owned
    toPlayer.numberOfProvincesOwned -= 1;
    fromPlayer.numberOfProvincesOwned += 1;
    //MOVES PROVINCE NAME FROM ONE PLAYER TO ANOTHER
    var provchangenameindex = toPlayer.provincesOwned.indexOf(toProvince.provincename);
    var provnamechange = toPlayer.provincesOwned.splice(provchangenameindex, 1);
    fromPlayer.provincesOwned.push(provnamechange[0]);
    //MOVES PROVINCE INDEX FROM ONE PLAYER TO ANOTHER
    var provchangeindexindex = toPlayer.provincesOwnedIndex.indexOf(toProvince.provinceindexnumber);
    var provindexchange = toPlayer.provincesOwnedIndex.splice(provchangeindexindex, 1);
    fromPlayer.provincesOwnedIndex.push(provindexchange[0]);
    //MOVES TROOPS SELECTED
    fromProvince.numberOfTroops -= data;
    toProvince.numberOfTroops = data;
  } else {
    console.log("BROKE")
  }
  updateMap(function(){
    console.log("4. starting callback")
    return (callback());
  });
}
