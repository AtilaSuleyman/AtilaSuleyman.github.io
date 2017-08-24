function countForTriples(word){
	let wordToCheck = word.split('');
	let cntr = 0;
	for(let i=0; i<wordToCheck.length-2; i++){
		if(wordToCheck[i]===wordToCheck[i+1] && wordToCheck[i]===wordToCheck[i+2]){
			cntr = cntr + 1;
		}
	}
	let output = document.getElementById("output");
	output.innerHTML = "";
	output.innerHTML += cntr;
	console.log(cntr);
}