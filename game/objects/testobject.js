var testobject = [
  { "provincename":"NA1",
    "provinceindexnumber": 0,
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
    getValues : function(x, callback){
      var different = x + 5;
      console.log("2. obj funct fired")
      return (callback(different))
    },

  },
];
