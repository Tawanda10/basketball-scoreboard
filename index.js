var homeScore = 0;
var guestScore = 0;

function plusOne(team) {
  if (team === "home") {
    homeScore += 1;
    document.getElementById("score1").textContent = homeScore;
  } else {
    guestScore += 1;
    document.getElementById("score2").textContent = guestScore;
  }
}

function plusTwo(team) {
  if (team === "home") {
    homeScore += 2;
    document.getElementById("score1").textContent = homeScore;
  } else {
    guestScore += 2;
    document.getElementById("score2").textContent = guestScore;
  }
}

function plusThree(team) {
  if (team === "home") {
    homeScore += 3;
    document.getElementById("score1").textContent = homeScore;
  } else {
    guestScore += 3;
    document.getElementById("score2").textContent = guestScore;
  }
}
