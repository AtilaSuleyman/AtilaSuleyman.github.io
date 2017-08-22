function divisibleByThree(numOfIterations){

	for(var i = 1; i<= numOfIterations; i++){
		console.log("iteration: "+i)
		if (i % 3 === 0) {
			console.log("Divided by 3 at iteration: "+i);
			console.log("The result is: " + i/3);
		}
		else{
			var j = i;
			do{
				console.log("Not divisable by 3, added 1 to "+ j);
				j=j+1;
			}
			while(j%3!==0);
			if(j % 3 === 0){
				console.log("Divided "+j+" by 3 at iteration: "+i);
				console.log("The result is: " + j/3);
			}
		}
	}
}