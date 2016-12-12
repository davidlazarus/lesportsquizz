/* List and create your functions and shit here */


/* load the deck*/

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



/* start game */

function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

var n = randomIntFromInterval(0,4);

console.log("this is N = " + n);

function loadGame() {
	$('.question > p').append(deck[n].question);
	$('.answerOne').append(deck[n].answers[0]);
	$('.answerTwo').append(deck[n].answers[1]);
	$('.answerThree').append(deck[n].answers[2]);
	$('.answerFour').append(deck[n].answers[3]);
};

/*$('input.checkbox').on('change', function() {
    $('input.checkbox').not(this).prop('checked', false);  
});*/

var guess; 

/*YOU NEED TO DEFINE THAT THE CHECKBOX YOU WANT IS THE ONE THAT IS CHECKED TRUE!!*/



$('init').click(function(){

	$('input.checkbox').value = guess;
});


var checkedValue = $(".checkbox:checked").val();

/* var checkedValue = document.querySelector('.checkbox').value; */

console.log(checkedValue);


console.log(guess);




/* check the answer


MAKE AN IF ELSE STATEMENT WHETHER checkbox is checked or not ********
when button clicked, value of checked box = guess

$('init').click(checkbox.checked = guess);


function isRightAnswer(){

	if { clicked == correctAnswer.n;
	then display correct
	else display wrong;
};*/	

/* load next card 

var n = random value that isnt equal to before; 

function(loadGame);

deck[0].question
deck[0].answers */



$(document).ready(function(){
	
/* List the functions ready to go here*/
	loadGame();

});

