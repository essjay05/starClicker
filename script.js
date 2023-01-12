// function update() {
//   document.getElementById('text').value = cookiecount;
//   document.title = cookiecount + " Cookies";
  
//   document.getElementById('ammountMultiplier').innerHTML = "Multiplier Upgrade x" + (multiplier+1);
//   document.getElementById('ammountMultiplier2').innerHTML = "x" + (multiplier+1);
//   document.getElementById('costMultiplier').innerHTML = ((multiplier+1) * 100) + " Cookies";
//   document.getElementById('currentMultiplier').innerHTML = "Your current Multiplier is x" + (multiplier);
  
//   document.getElementById('ammountAutoClick').innerHTML = "You Own " + autoClick + " Auto Clickers";
//   document.getElementById('costAutoClick').innerHTML = ((autoClick+1) * 12) + " Cookies";
  
//   document.getElementById('ammountFarms').innerHTML = "You Own " + farms + " Farms";
//   document.getElementById('costFarms').innerHTML = ((farms+1) * 15) + " Cookies";
  
//   document.getElementById('cookiespersecond').innerHTML = "You are gaining " + (((autoClick)+(farms*2))*multiplier) + " Cookies per/s";
// }

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

// Function to for upgrading with mushrooms
function addMushroom() {
  // Select set scoreboard variable to starCount element
  var scoreboard = document.getElementById("starCount");

  if ( score >= 30 ) {
    score -= 30;
    mushrooms +=1;
    
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
    // // Select set scoreboard variable to starCount element
    // var scoreboard = document.getElementById("starCount");
    // Change score on html with each click
    scoreboard.innerHTML = score;
  }
  setInterval(timer, 1000);
  
}