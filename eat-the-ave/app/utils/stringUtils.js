export function getStatusString(statusNum) {
  if (statusNum === 1) {
    return "Off My Radar";
  } else if (statusNum === 2) {
    return "Maybe";
  } else if (statusNum === 3) {
    return "Need to Go";
  } else if (statusNum === 4) {
    return "Tried Out";
  } else if (statusNum === 5) {
    return "Secret Hangout";
  } else {
    return "I Live Here";
  }
}

export function getRatingString(ratingNum, tried) {
  if (ratingNum === 0) {
    return "Eh."
  } else if (ratingNum === 1) {
    return tried ? "Satisfactory" : "Looks Good";
  } else if (ratingNum === 2) {
    return tried ? "GOOD YUM" : "Try Before Die";
  } else {
    return tried ? "MAJOR EAT AWARD" : "Devlish Temptation";
  }
}