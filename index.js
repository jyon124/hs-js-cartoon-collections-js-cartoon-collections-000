function dwarfRollCall(dwarves) {
  var nameorder = [];
  for(let i = 0; i < dwarves.length; i++){
    nameorder += `${i+1}. ${dwarves[i]} `
  }
  return nameorder;
}

function summonCaptainPlanet(planeteerCalls){
  var uppercaseCalls = [];
  for(let i = 0; i < planeteerCalls.length; i++){
    var exclamation = "!";
    uppercaseCalls.push(`${planeteerCalls[i]}${exclamation}`.toUpperCase());
  }
return uppercaseCalls;
}

function longPlaneteerCalls(words) {
    if (words.length > 4){
    return true
  }return false
}

function findTheCheese (foods) {
  for (let i = 0; i < foods.length; i++){
    if (foods[i] === `cheddar`){
    return foods[i];
  }
}return "no cheese!"
}
