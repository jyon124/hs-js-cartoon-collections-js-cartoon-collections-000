
function dwarfRollCall(dwarves){
    var nameorder = [];
  for (let i = 0; i < dwarves.length; i++){
   nameorder += `${i+1}. ${dwarves[i]} `
  }
  return nameorder;
}


function summonCaptainPlanet(planeteerCalls){
  var upperCaseCalls = [];
  var exclamation = "!";
  for (let i = 0; i < planeteerCalls.length; i++){
    upperCaseCalls.push(`${planeteerCalls[i]}${exclamation}`.toUpperCase());
  }
return upperCaseCalls;
}

function longPlaneteerCalls(words){
  for (let i = 0; i < words.length; i++){
    if (words[i].length > 4){
     return true
    }
  }return false
}


function findTheCheese(grocery){
  var grocery = ["apple", "banana", "cheddar", "gouda"];
  for (let i = 0; i < grocery.length; i++){
    if (grocery[i] === `cheddar`||grocery[i]===`gouda`||grocery[i]===`camembert`){
    return grocery[i];
    }
  }return "no cheese!";
}
