// JS that will use reduce method to count the number of occurance in Array

module.exports = function countWords(inputWords){
	return inputWords.reduce(function (allWords, word){
		if(word in allWords){
			allWords[word]++;
		}else{
			allWords[word] = 1;
		}
		return allWords;
	}, {})	
}

/*
function countWords(arr) {
      return arr.reduce(function(countMap, word) {
        countMap[word] = ++countMap[word] || 1 // increment or initialize to 1
        return countMap
      }, {}) // second argument to reduce initialises countMap to {}
    }

    module.exports = countWords
*/