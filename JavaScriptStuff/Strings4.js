function countForTriples(word){
	var wordToCheck = word.split('');
	var cntr = 0;
	for(var i=0; i<wordToCheck.length-2; i++){
		if(wordToCheck[i]===wordToCheck[i+1] && wordToCheck[i]===wordToCheck[i+2]){
			cntr = cntr + 1;
		}
	}
	console.log(cntr);
}