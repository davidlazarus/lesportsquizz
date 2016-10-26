/* List and create your functions and shit here */


// muting the video inputs from youtube

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function onYouTubeIframeAPIReady() {
	player = new YT.Player('ytplayer', {
		events: {
    	'onReady': onPlayerReady
    	}
     });
}

function onPlayerReady() {
	player.playVideo();
    // Mute!
    player.mute();
}

// making the checkboxes mututally exclusive 

$('section div div .checkbox').click(function () { 
	checkedState = $(this).attr('checked');
    $(this).parent('div').children('.checkbox:checked').each(function () {
    	$(this).attr('checked', false);
    });

    $(this).attr('checked', checkedState);
});

// the question part 

var questionTwo = {

	question: 'bablabla',
	answer1: 'blablabla1',
	answer2: 'blabla2',
	answer3: 'blabl3',
	answer4: 'blabla4',
	videoInput: youtube,

};


$(document).ready(function(){
	
/* List the functions ready to go here*/
	onPlayerReady();

});

