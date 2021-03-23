function rpsGame(yourChoice) {
  var humanChoice, botChoice;
  humanChoice = yourChoice.id;
  botChoice = numToChoice(randToRpsInt());
  result = decideWinner(humanChoice, botChoice);
  message = finalMessage(result);
  rpsfrontEnd(humanChoice, botChoice, message);
}

function randToRpsInt() {

  return Math.floor(Math.random() * 3);
}

function numToChoice(number) {
  return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(humanChoice, botChoice) {

  var rpsdatabase = {
    'rock': { 'scissors': 1, 'rock': 0.5, 'paper': 0 },
    'paper': { 'rock': 1, 'paper': 0.5, 'scissors': 0 },
    'scissors': { 'paper': 1, 'scissors': 0.5, 'rock': 0 }
  };

  var yourScore = rpsdatabase[humanChoice][botChoice];
  return yourScore;

}

function finalMessage(yourScore) {
  if (yourScore === 1) {
    return { 'message': 'YOU WON', 'color': ' green' };
  } else if (yourScore === 0.5) {
    return { 'message': 'YOU TIED', 'color': 'yellow' };
  }
  else {
    return { 'message': 'YOU LOST', 'color': 'red' };
  }
}
function rpsfrontEnd(humanImageChoice, botImageChoice, message) {
  var ImagesDatabase = {
    'rock': document.getElementById('rock').src,
    'paper': document.getElementById('paper').src,
    'scissors': document.getElementById('scissors').src
  }
  document.getElementById('rock').remove();
  document.getElementById('paper').remove();
  document.getElementById('scissors').remove();
  var humanDiv = document.createElement('id');
  var messageDiv = document.createElement('id');
  var botDiv = document.createElement('id');

  humanDiv.innerHTML = "<img src='" + ImagesDatabase[humanImageChoice] + "' style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1)'>";
  document.getElementById('flex-box-rps-div').appendChild(humanDiv);

  messageDiv.innerHTML = "<h1 style = 'color: " + finalMessage['color'] + ";font-size: 60px ; padding: 30px;'>" + finalMessage['message'] +  "</h1>";
  document.getElementById('flex-box-rps-div').appendChild(messageDiv);

  botDiv.innerHTML = "<img src='" + ImagesDatabase[botImageChoice] + "' style='box-shadow: 0px 10px 50px rgba(168, 26, 26, 0.7)'>";
  document.getElementById('flex-box-rps-div').appendChild(botDiv);
}