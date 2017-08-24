function FizzBuzz(numLimit, wordForThree, wordForFive){
	let output = document.getElementById("output");
	output.innerHTML = "";
	let breakPoint = document.createElement("br");
		for(var i = 1; i<= numLimit; i++)
		{
			if(i%3==0 && i%5==0){
				output.innerHTML += "FizzBuzz";
				output.appendChild(breakPoint);
			}
			else if(i%3==0){
				output.innerHTML += wordForThree;
				output.appendChild(breakPoint);
			}
			else if(i%5==0){
				output.innerHTML += wordForFive;
				output.appendChild(breakPoint);
			}
			else{
				output.innerHTML += i;
				output.appendChild(breakPoint);
			}
		}
	}