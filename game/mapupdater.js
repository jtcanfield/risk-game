// TAKES OBJECTS AND UPDATES HTML VIA THE DOM

// UPDATES COLORS AND COUNTERS
var updateMap = function(callback){
  console.log("1. update started")
  var countersDiv = document.getElementById("countersDiv");
  var divs = `
    <div class="counter" id="NA1Counter" style="background-color: ${gameBoardObject[0].color};" onmousedown="eleMouseDown(this)">${gameBoardObject[0].numberOfTroops}</div>
    <div class="counter" id="NA2Counter" style="background-color: ${gameBoardObject[1].color};" onmousedown="eleMouseDown(this)">${gameBoardObject[1].numberOfTroops}</div>
    <div class="counter" id="NA3Counter" style="background-color: ${gameBoardObject[2].color};" onmousedown="eleMouseDown(this)">${gameBoardObject[2].numberOfTroops}</div>
    <div class="counter" id="NA4Counter" style="background-color: ${gameBoardObject[3].color};" onmousedown="eleMouseDown(this)">${gameBoardObject[3].numberOfTroops}</div>
    <div class="counter" id="NA5Counter" style="background-color: ${gameBoardObject[4].color};" onmousedown="eleMouseDown(this)">${gameBoardObject[4].numberOfTroops}</div>
    <div class="counter" id="NA6Counter" style="background-color: ${gameBoardObject[5].color};" onmousedown="eleMouseDown(this)">${gameBoardObject[5].numberOfTroops}</div>
    <div class="counter" id="NA7Counter" style="background-color: ${gameBoardObject[6].color};" onmousedown="eleMouseDown(this)">${gameBoardObject[6].numberOfTroops}</div>
    <div class="counter" id="NA8Counter" style="background-color: ${gameBoardObject[7].color};" onmousedown="eleMouseDown(this)">${gameBoardObject[7].numberOfTroops}</div>
    <div class="counter" id="NA9Counter" style="background-color: ${gameBoardObject[8].color};" onmousedown="eleMouseDown(this)">${gameBoardObject[8].numberOfTroops}</div>

    <div class="counter" id="SA1Counter" style="background-color: ${gameBoardObject[9].color};" onmousedown="eleMouseDown(this)">${gameBoardObject[9].numberOfTroops}</div>
    <div class="counter" id="SA2Counter" style="background-color: ${gameBoardObject[10].color};" onmousedown="eleMouseDown(this)">${gameBoardObject[10].numberOfTroops}</div>
    <div class="counter" id="SA3Counter" style="background-color: ${gameBoardObject[11].color};" onmousedown="eleMouseDown(this)">${gameBoardObject[11].numberOfTroops}</div>
    <div class="counter" id="SA4Counter" style="background-color: ${gameBoardObject[12].color};" onmousedown="eleMouseDown(this)">${gameBoardObject[12].numberOfTroops}</div>

    <div class="counter" id="EU1Counter" style="background-color: ${gameBoardObject[13].color};" onmousedown="eleMouseDown(this)">${gameBoardObject[13].numberOfTroops}</div>
    <div class="counter" id="EU2Counter" style="background-color: ${gameBoardObject[14].color};" onmousedown="eleMouseDown(this)">${gameBoardObject[14].numberOfTroops}</div>
    <div class="counter" id="EU3Counter" style="background-color: ${gameBoardObject[15].color};" onmousedown="eleMouseDown(this)">${gameBoardObject[15].numberOfTroops}</div>
    <div class="counter" id="EU4Counter" style="background-color: ${gameBoardObject[16].color};" onmousedown="eleMouseDown(this)">${gameBoardObject[16].numberOfTroops}</div>
    <div class="counter" id="EU5Counter" style="background-color: ${gameBoardObject[17].color};" onmousedown="eleMouseDown(this)">${gameBoardObject[17].numberOfTroops}</div>
    <div class="counter" id="EU6Counter" style="background-color: ${gameBoardObject[18].color};" onmousedown="eleMouseDown(this)">${gameBoardObject[18].numberOfTroops}</div>
    <div class="counter" id="EU7Counter" style="background-color: ${gameBoardObject[19].color};" onmousedown="eleMouseDown(this)">${gameBoardObject[19].numberOfTroops}</div>

    <div class="counter" id="AF1Counter" style="background-color: ${gameBoardObject[20].color};" onmousedown="eleMouseDown(this)">${gameBoardObject[20].numberOfTroops}</div>
    <div class="counter" id="AF2Counter" style="background-color: ${gameBoardObject[21].color};" onmousedown="eleMouseDown(this)">${gameBoardObject[21].numberOfTroops}</div>
    <div class="counter" id="AF3Counter" style="background-color: ${gameBoardObject[22].color};" onmousedown="eleMouseDown(this)">${gameBoardObject[22].numberOfTroops}</div>
    <div class="counter" id="AF4Counter" style="background-color: ${gameBoardObject[23].color};" onmousedown="eleMouseDown(this)">${gameBoardObject[23].numberOfTroops}</div>
    <div class="counter" id="AF5Counter" style="background-color: ${gameBoardObject[24].color};" onmousedown="eleMouseDown(this)">${gameBoardObject[24].numberOfTroops}</div>
    <div class="counter" id="AF6Counter" style="background-color: ${gameBoardObject[25].color};" onmousedown="eleMouseDown(this)">${gameBoardObject[25].numberOfTroops}</div>

    <div class="counter" id="OC1Counter" style="background-color: ${gameBoardObject[26].color};" onmousedown="eleMouseDown(this)">${gameBoardObject[26].numberOfTroops}</div>
    <div class="counter" id="OC2Counter" style="background-color: ${gameBoardObject[27].color};" onmousedown="eleMouseDown(this)">${gameBoardObject[27].numberOfTroops}</div>
    <div class="counter" id="OC3Counter" style="background-color: ${gameBoardObject[28].color};" onmousedown="eleMouseDown(this)">${gameBoardObject[28].numberOfTroops}</div>
    <div class="counter" id="OC4Counter" style="background-color: ${gameBoardObject[29].color};" onmousedown="eleMouseDown(this)">${gameBoardObject[29].numberOfTroops}</div>

    <div class="counter" id="AS1Counter" style="background-color: ${gameBoardObject[30].color};" onmousedown="eleMouseDown(this)">${gameBoardObject[30].numberOfTroops}</div>
    <div class="counter" id="AS2Counter" style="background-color: ${gameBoardObject[31].color};" onmousedown="eleMouseDown(this)">${gameBoardObject[31].numberOfTroops}</div>
    <div class="counter" id="AS3Counter" style="background-color: ${gameBoardObject[32].color};" onmousedown="eleMouseDown(this)">${gameBoardObject[32].numberOfTroops}</div>
    <div class="counter" id="AS4Counter" style="background-color: ${gameBoardObject[33].color};" onmousedown="eleMouseDown(this)">${gameBoardObject[33].numberOfTroops}</div>
    <div class="counter" id="AS5Counter" style="background-color: ${gameBoardObject[34].color};" onmousedown="eleMouseDown(this)">${gameBoardObject[34].numberOfTroops}</div>
    <div class="counter" id="AS6Counter" style="background-color: ${gameBoardObject[35].color};" onmousedown="eleMouseDown(this)">${gameBoardObject[35].numberOfTroops}</div>
    <div class="counter" id="AS7Counter" style="background-color: ${gameBoardObject[36].color};" onmousedown="eleMouseDown(this)">${gameBoardObject[36].numberOfTroops}</div>
    <div class="counter" id="AS8Counter" style="background-color: ${gameBoardObject[37].color};" onmousedown="eleMouseDown(this)">${gameBoardObject[37].numberOfTroops}</div>
    <div class="counter" id="AS9Counter" style="background-color: ${gameBoardObject[38].color};" onmousedown="eleMouseDown(this)">${gameBoardObject[38].numberOfTroops}</div>
    <div class="counter" id="AS10Counter" style="background-color: ${gameBoardObject[39].color};" onmousedown="eleMouseDown(this)">${gameBoardObject[39].numberOfTroops}</div>
    <div class="counter" id="AS11Counter" style="background-color: ${gameBoardObject[40].color};" onmousedown="eleMouseDown(this)">${gameBoardObject[40].numberOfTroops}</div>
    <div class="counter" id="AS12Counter" style="background-color: ${gameBoardObject[41].color};" onmousedown="eleMouseDown(this)">${gameBoardObject[41].numberOfTroops}</div>
  `;
  countersDiv.innerHTML = divs;
  console.log("2. update done");
  return (callback())
}
