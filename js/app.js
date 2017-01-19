/* List and create your functions and shit here */


var deck = [
	{
		question: "in what year did michael jordan definitively retire from the NBA?",
		answers: ["1993", "1995", "2001", "2003"],
		correctanswer: "2001"
	},

	{
		question: "how many grand slams has Roger federed won?",
		answers: ["8", "10", "12", "17"],
		correctanswer: "12"
	},

	{
		question: "what is usein bolt's record on the 100m",
		answers: ["9.81", "9.73", "9.69", "9.55"],
		correctanswer: "9.69"
	},

	{
		question: "in what years were the first modern olympics games held?",
		answers: ["1901", "1951", "1954", "1968"],
		correctanswer: "1901"
	},

];


function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}



function loadGame(num) {
	$('.question').append(deck[num].question);
	$('.answerOne').append(deck[num].answers[0]);
	$('.answerTwo').append(deck[num].answers[1]);
	$('.answerThree').append(deck[num].answers[2]);
	$('.answerFour').append(deck[num].answers[3]);
};

function clearGame() {
	$('.question').html('');
	$('.answerOne').html('<input name="answer" type="radio" class="checkbox">');
	$('.answerTwo').html('<input name="answer" type="radio" class="checkbox">');
	$('.answerThree').html('<input name="answer" type="radio" class="checkbox">');
	$('.answerFour').html('<input name="answer" type="radio" class="checkbox">');
};


var score = 0;
var cardCount = 4;

// The issue is that innerText and html are different by the " " marks. RESEARCH. 

$('.init').click(function()
{
	cardCount--;
	
	var currentQuestion = document.getElementsByClassName("question")[0].innerText;
	console.log(currentQuestion);
	var n = findN(currentQuestion);
	console.log(n);

	var checkedValue = $('.checkbox:checked').parent().text();
	console.log(checkedValue);
	console.log(deck[n-1].correctanswer);
	var theIs = document.getElementsByClassName('fa-circle');
	
	console.log(n);
	/*this isn't working -- i don't know why*/
	if (checkedValue === deck[n].correctanswer){
		console.log('checked value is' + checkedValue + 'correctanswer is' + correctanswer);
		alert('correct motherfucking answer bitch sauce!');
		theIs[score].className += " green";

	} else {
		console.log(theIs);
		theIs[score].className += " red";
	}
	
	score ++;

	clearGame()

	var genNum = randomIntFromInterval(0, cardCount); /* add where genNum cannot be equal to current n*/
	console.log(genNum);
	
	loadGame(genNum);

});


function createQuestionDecK()
{
	questions = [];
	for (var i = deck.length - 1; i >= 0; i--) {
		questions.push( deck[i].question );
	}
	return questions;
};

var questionDeck = createQuestionDecK();
console.log(questionDeck);

function findN(question)
{
	return questionDeck.indexOf(question);
};



$(document).ready(function(){
	
/* List the functions ready to go here*/
	
	var n = randomIntFromInterval(0,4);
	loadGame( n );

});

/*The randomization isn't working correctly. Because if set ONE is loaded, 
it will still pool from questions 0, 1 and 2. (3-1 =2)*/

