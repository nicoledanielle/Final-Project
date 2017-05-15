var humanScore = 0;
var computerScore = 0;

$('button').click(function(){
  var humanPlay = $(this).attr("id");
  play(humanPlay);
});
function play(humanPlay) {
  
  computerPlay = getComputerPlay();
  
  $("#status").html("<p>You played <strong>" + humanPlay + "</strong>. The bot played <strong>" + computerPlay + "</strong>.</p>");
  
  if(humanPlay == 'rock') {
    if(computerPlay == 'rock') {
        $("#status").append("<p>You tied. :|</p>");
    } else if (computerPlay == 'paper') {
      $("#status").append("<p>You lose. :(</p>");
      computerScore++;
    } else if (computerPlay == 'scissors') {
      $("#status").append("<p>You win! :)</p>");
      humanScore++;
    }
  } else if (humanPlay == 'paper') {
    if(computerPlay == 'rock') {
      $("#status").append("<p>You win! :)</p>");
      humanScore++;
    } else if (computerPlay == 'paper') {
      $("#status").append("<p>You tied. :|</p>");
    } else if (computerPlay == 'scissors') {
      $("#status").append("<p>You lose. :(</p>");
      computerScore++;
    }  
  } else if (humanPlay == 'scissors') {
    if(computerPlay == 'rock') {
      $("#status").append("<p>You lose. :(</p>");
      computerScore++;
    } else if (computerPlay == 'paper') {
      $("#status").append("<p>You win! :)</p>");
      humanScore++;
    } else if (computerPlay == 'scissors') {
      $("#status").append("<p>You tied. :|</p>");
    }  
  }
  
   $("#human-score").html(humanScore);
   $("#computer-score").html(computerScore);
  
}

function getComputerPlay() {
  var plays = ['rock', 'paper', 'scissors'];
  var play = plays[Math.floor(Math.random() * plays.length)];
  return play;
}