// Set starting score to 0
var score = 0;
var multiplier = 1;
var mushrooms = 0;
var greenMushrooms = 0;


// Function to add one per click
function generateStar() {
  score+=1;
  // console.log(score);
  // Select set scoreboard variable to starCount element
  var scoreboard = document.getElementById("starCount");
  // Change score on html with each click
  scoreboard.innerHTML = score;
}

// Function to for upgrading to Mario
function addMushroom() {
  if ( score >= 30 ) {
    score -= 30;
    mushrooms +=1;
    // Select set scoreboard variable to starCount element
    var scoreboard = document.getElementById("starCount");
    // Change score on html with each click
    scoreboard.innerHTML = score;
    // Select set scoreboard variable to starCount element
    var mushCount = document.getElementById("mushCt");
    // Change score on html with each click
    mushCount.innerHTML = mushrooms;
    console.log('Star Count: ' + score + ' | ' + 'Mushroom Count: ' + mushrooms )
  } else {
    alert('Not enough stars yet to upgrade!')
  }

  function timer() {
  score = score + mushrooms;
  score = score + greenMushrooms;
    // Select set scoreboard variable to starCount element
    var scoreboard = document.getElementById("starCount");
    // Change score on html with each click
    scoreboard.innerHTML = score;
  }
  setInterval(timer, 1000);

}