var deck;
var numberQ = 10;
var tries = 0;
var points = 0;
var selectCat;
var selectDiff;


function setGoListener(){

	$('.goGame').click(function(){

		var api = "https://opentdb.com/api.php?amount=" + numberQ + "&category=" + selectCat + "&difficulty=" + selectDiff + "&type=multiple";
		console.log(api);
		runQuiz(api);	

	});
};


function runQuiz(api){
	$.get( api, function( data ) {
	 	deck = data.results; 
		var n = deck.length - 1 ;
		loadGame(n);
		clickListener(deck, n);		
	});
};

function clickListener(deck_a, n_a) {

	$('.init').click(function()	{
		var checkedValue = $('.checkbox:checked').parent().text().replace(/ /g, '');
		console.log(checkedValue);
		var currentQuestion = deck_a[n_a].question;
		console.log(deck_a[n_a].correct_answer);
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


function loadGame(num){
	arr = deck[num].incorrect_answers;
	arrLength = arr.length + 1; 
	var randomIndex = randomIntFromInterval(0, arrLength);
	arr.splice(randomIndex, 0, deck[num].correct_answer);

	$('.question').append( (deck[num].question) );

	for ( var i = 0; i < arrLength; i++)
	{		
		var html = '<label> <h5 class="center-align answer"> <input class="checkbox" type="radio" name="answer" id="id"/>' 
					+ '<label style="vertical-align: middle" for="id'
					+ i
					+ '"/>'
					+ '</label>'
					+ arr[i]
					+ '</h5></label>';

		$('.answerBox').append(html);
	};

};



function flipCard() { 

	$("#card").flip({
	  trigger: 'manual'
	});

	$('.goGame').click(function(){
		$("#card").flip(true);
});

	// $('.backGame').click(function(){
	// 	$("#card").flip(false);
	// });
};
 
function clearGame(){
	$('.question').empty();
	$('.answerBox').empty();
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


function dropDownPersist(){

    $("#dropdown1 li a").click(function(){

      $(".one:first-child").text($(this).text());
      $(".one:first-child").val($(this).text());
      selectCat = this.getAttribute("value");

   });

    $("#dropdown2 li a").click(function(){

      $(".two:first-child").text($(this).text());
      $(".two:first-child").val($(this).text());
      selectDiff = this.getAttribute("class");

   });
};



$(document).ready(function(){
	flipCard();
	dropDownPersist();
	setGoListener();

});

	
