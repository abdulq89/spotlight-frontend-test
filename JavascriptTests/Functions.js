// Complete each of the questions below. You can see the expected result for each of the questions by 

function Question1(inputArray) {
	// DUPLICATE AN ARRAY
	// You should write a function that repeats an array twice and returns it.
	// The original array should not be modified.
	var duplicateArray = inputArray.concat(inputArray);
	return duplicateArray;
}

function Question2(inputArray) {
	// REVERSE AN ARRAY
	// You should write a function that reverses an array and returns it.
	// The original array should not be modified.
	var reverseArray = inputArray.slice().reverse();
	return reverseArray;
}

function Question3(inputArray, itemToFind) {
	// COUNT THE NUMBER OF ELEMENTS IN AN ARRAY
	// You should write a function that returns a count of the number of 'itemToFind' that exist in 'inputArray'
	var count = 0;
    for (var i = 0; i < inputArray.length; i++) {
        if (inputArray[i] === itemToFind) {
            count++;
        }
    }
	return count;
}

function Question4(deckOfCardsArray) {
	// SHUFFLE A DECK OF CARDS
	// You should write a function that shuffles the items in 'deckOfCardsArray'
	// The original array should be modified
	var currentIndex = deckOfCardsArray.length, temporaryValue, randomIndex;

	  // While there remain elements to shuffle...
	  while (currentIndex) {

	    // Pick a remaining element...
	    randomIndex = Math.floor(Math.random() * currentIndex);
	    currentIndex -= 1;

	    // And swap it with the current element.

	    temporaryValue = deckOfCardsArray[currentIndex];
	    deckOfCardsArray[currentIndex] = deckOfCardsArray[randomIndex];
	    deckOfCardsArray[randomIndex] = temporaryValue;
	  }
	// No return value needed
}

function Question5(inputString) {
	// REVERSE THE WORDS IN A STRING
	// You should write a function that reverses the order of the words in a string. The letters in
	// the words should be unchanged.
	// e.g. "the cat sat on the mat" should become "mat the on sat cat the"
	var reversed = inputString.split(' ').reverse().join(' ');
	return reversed;
}