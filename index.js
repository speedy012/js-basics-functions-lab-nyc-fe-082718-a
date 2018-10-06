// Code your solution in this file!//

function distanceFromHqInBlocks(location) {
  //return the distance in blocks from location to 42nd street
  
  return Math.abs(42 - location);
}

function distanceFromHqInFeet(location) {
  // 1 block ===264 feet 
  return distanceFromHqInBlocks(location)*264
}

function distanceTravelledinFeet(location1, location2) {
  return distanceFromHqInBlocks(location1 - location2) * 264
}

function distanceFromHqInBlocks(location1, location2) {
const feetTravelled = distanceTravelledinFeet(location1, location2)
}

function calculatesFarePrice(location1, location2)
// if the distance is less than 400 feet, return 0
  if (feetTravelled < 400) {
    return 0;
  }else if (feetTravelled< 2000) {
    return ( (feetTravelled-400) * .02)
  }else if (feetTravelled , 2500 {
    return 25;
  } else{
    return 'cannot travell that for'
  }
  
}

