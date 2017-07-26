// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called


document.getElementById('loadQuote').addEventListener("click", printQuote, false);



/**************
Variables
***************/

var randomQuote = '';
var randomSource = '';
var randomCitation = '';
var randomYear = '';

/**************
Functions
***************/

//Random Number Function

function randomNum () {
	return Math.floor( Math.random() * quoteList.length - 1) + 1;
}

//Random Quote Function

function getRandomQuote(newQuote) {
	var newQuote = quoteList[randomNum()];
	return newQuote;
}

//Print Quote Function

/*function printQuote( writeQuote ) {
	var quote = document.getElementById('quote');
	var quoteBoxDiv.innerHTML = writeQuote;
}
*/