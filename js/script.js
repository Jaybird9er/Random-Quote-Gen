// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

/**************
Variables
***************/

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

function printQuote( output ) {
	var printOutput = getRandomQuote();
		var outputString = '<p class="quote">' + printOutput.quote + '</p>';
		outputString += '<p class="source">' + printOutput.source;
	  outputString += '<span class="citation">' + printOutput.citation + '</span>';
	  outputString += '<span class="year">' + printOutput.year + '</span></p>';
	var output = outputString;
	document.getElementById('quote-box').innerHTML = output;
	return output;
}