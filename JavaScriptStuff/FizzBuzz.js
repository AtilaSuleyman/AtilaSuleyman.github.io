function FizzBuzz(numLimit, wordForThree, wordForFive){
		for(var i = 0; i< numLimit; i++)
		{
			if(i%3==0 && i%5==0){
				console.log("FizzBuzz");
			}
			else if(i%3==0){
				console.log(wordForThree);
			}
			else if(i%5==0){
				console.log(wordForFive);
			}
			else{
				console.log(i);
			}
		}
	}