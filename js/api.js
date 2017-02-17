var deck;
var numberQ = 10;
var tries = 0;
var points = 0;
var api = "https://opentdb.com/api.php?amount=" + numberQ + "&category=21&type=multiple";

// function initiateQuiz(){
$.get( api, function( data ) {
 	deck = data.results; 
	var n = deck.length - 1 ;
	loadGame(n);
	clickListener(deck, n);
});
// };

function clickListener(deck_a, n_a) {

	$('.init').click(function()	{
		var checkedValue = $('.checkbox:checked').parent().text().replace(/ /g, '');
		var currentQuestion = deck_a[n_a].question;
		var indexB = findN(currentQuestion);
		var theIs = document.getElementsByClassName('fa-circle');
		checkValues(checkedValue, deck_a, indexB, theIs);
		arrangeQ(n_a, deck_a);
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
		alert('correct answer bitch sauce!');
		theIs_a[tries].className += " green";
		points ++;
	} else {
		theIs_a[tries].className += " red";
	}
};

function endLoop(turns, points, n_a, tries){
	if (turns == 0) {
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

function arrangeQ(n, deck){
console.log(n);
var randomIndex = randomIntFromInterval(0, deck.length);
arr = deck[n].incorrect_answers;
arr.splice(randomIndex, 0, deck[n].correct_answer);
console.log(arr);
};


function loadGame(num) {
	$('.question').append(deck[num].question);
	$('.answerOne').append(deck[num].correct_answer);
	$('.answerTwo').append(deck[num].incorrect_answers[0]);
	$('.answerThree').append(deck[num].incorrect_answers[1]);
	$('.answerFour').append(deck[num].incorrect_answers[2]);
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
		$('.reveal').hide();
		// initiateQuiz();
		//  HERE YOU HAVE TO RELOAD THE PAGE OR RELOAD THE GAME FUNCTION
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




// $(document).ready(function(){

// 	initiateQuiz();

// });

	
