var deck;
var numberQ = 10;
var tries = 0;
var points = 0;
var api = "https://opentdb.com/api.php?amount=" + numberQ + "&category=21&type=multiple";

function initiateQuiz(){
	$.get( api, function( data ) {
	 	deck = data.results; 
	 	console.log(deck);
		var n = deck.length - 1 ;
		loadGame(n);
		clickListener(deck, n);
	});
};

function clickListener(deck_a, n_a) {

	$('.init').click(function()	{
		var checkedValue = $('.checkbox:checked').parent().text().replace(/ /g, '');
		var currentQuestion = deck_a[n_a].question;
		var indexB = findN(currentQuestion);
		var theIs = document.getElementsByClassName('fa-circle');
		console.log(theIs);
		checkValues(checkedValue, deck_a, indexB, theIs);
		deck.splice(indexB, 1);
		clearGame();
		n_a --;
		tries ++;
		endLoop(numberQ, points, n_a, tries);	

	});
};

function checkValues(checkedValue_a, deck_a, indexB_a, theIs_a){
	numberQ--;

	if (checkedValue_a == deck_a[indexB_a].correct_answer){
		Materialize.toast ('correct! nice one!', 4000, 'toast');
		theIs_a[0].className = "fa fa-check";
		points ++;
	} else {
		Materialize.toast('wrong answer...', 4000, 'toast');
		theIs_a[0].className = "fa fa-times";
	}
};

function endLoop(turns, points, n_a, tries){
	if (turns == 0) {
		$('.focus').hide();
		$('.questionProgress').hide();
		$('.score').append(points);
		$('.reveal').show();

	} else { 
		loadGame(n_a); 
	};		 

	reset();
};

function randomIntFromInterval(min,max){
	return Math.floor(Math.random()*(max-min+1) + min);
};


function loadGame(num) {

	var randomIndex = randomIntFromInterval(0, 3);
	arr = deck[num].incorrect_answers;
	arr.splice(randomIndex, 0, deck[num].correct_answer);
	
	$('.question').append(deck[num].question);
	$('.answerOne').append(arr[0]);
	$('.answerTwo').append(arr[1]);
	$('.answerThree').append(arr[2]);
	$('.answerFour').append(arr[3]);
};

function clearGame() {
	$('.question').html('');
	$('.answerOne').html('<input class="checkbox" name="answer" type="radio" id="id1" > <label style="vertical-align: middle" for="id1"></label>');
	$('.answerTwo').html('<input class="checkbox" name="answer" type="radio" id="id2" > <label style="vertical-align: middle" for="id2"></label>');
	$('.answerThree').html('<input class="checkbox" name="answer" type="radio" id="id3" > <label style="vertical-align: middle" for="id3"></label>');
	$('.answerFour').html('<input class="checkbox" name="answer" type="radio" id="id4" > <label style="vertical-align: middle" for="id4"></label>');
};

function reset() {
	$('.restart').click(function(){
		$('.reveal')
		// initiateQuiz(); this is bugging, and I don't understand why!
		window.location.reload();
	});
};

function createQuestionDecK(){
	questions = [];
	for ( var i = 0; i < deck.length; i++ )
	{ questions.push( deck[i].question ); }
	return questions;
};

function findN(question){
	var questionDeck = createQuestionDecK();
	return questionDeck.indexOf(question);
};




$(document).ready(function(){

	initiateQuiz();

});

	
