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