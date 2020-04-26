// Defining variables
var currentScore = 0;
var winCounter = 0;
var lossCounter = 0;
var targetScore = 0;
var crystalBtn = $('.crystalButton');

//Game conditions.
function startGame(){
currentScore = 0;
$('#scoreBox').text(currentScore);
$('.alert').addClass('modal');
$('#wins').text(winCounter);
 $('#losses').text(lossCounter);

 // Random number generates at start of game
 targetScore = Math.floor(Math.random() * (120 - 19 +1)  + 19);
 console.log("target score is", targetScore);
 $('#scoreTarget').text(targetScore);

// Fill Arr: have crystals generate random number b/t 1 and 12
 var buttonValues = [];
 for (var i = 0; i < 4; i++) {
    buttonValues.push(Math.floor(Math.random() * (12 - 1) +1));
    console.log(buttonValues);
}
$('#button1').attr('value', buttonValues[0]);
$('#button2').attr('value', buttonValues[1]);
$('#button3').attr('value', buttonValues[2]);
$('#button4').attr('value', buttonValues[3]); 
}
startGame();

//Play game conditions.
var playGame = function(){
currentScore = currentScore + (Number($(this).attr('value')));
$('#scoreBox').text(currentScore);
    
//if current core = target score
if  (currentScore === targetScore){
$('#scoreBox').text(currentScore)
winCounter++;
$('#wins').text(winCounter);

//"you win"
$('.modal').removeClass('modal');
('#winloss').text('You Win!'); 
}
else if (currentScore > targetScore){
$('#scoreBox').text(currentScore);
lossCounter++;
$('#losses').text(lossCounter);

//"you lose".
$('.modal').removeClass('modal');
$('#winloss').text('Oh No! Your Score Exceeded the Target Score.');
}
else {
    //repeat and play 
}
}
//on-click for crystal buttons.
$('.crystalButton').on('click', playGame);
//on-click restarts game.
$('.btn-success').on('click', startGame);
