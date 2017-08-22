function divideByThree(startNum){
	var cntr = 0;
	do{
		if (startNum % 3 === 0) {
			console.log("Divided "+startNum+ " by 3 at iteration:"+cntr);
			console.log("The result is: " + startNum/3);
			startNum = startNum/3;
			cntr++;
		}
		else if((startNum+1) % 3 === 0){
			console.log("Added 1 to "+startNum+" at iteration: "+cntr);
			console.log("The result is: " + (startNum+1));
			startNum = startNum + 1;
			console.log("Divided "+startNum+ " by 3 at iteration:"+cntr);
			console.log("The result is: " + startNum/3);
			startNum = startNum/3;
			cntr++;
		}
		else{
			console.log("Subtracted 1 from "+startNum+" at iteration: "+cntr);
			console.log("The result is: " + (startNum-1));
			startNum = startNum - 1;
			console.log("Divided "+startNum+ " by 3 at iteration:"+cntr);
			console.log("The result is: " + startNum/3);
			startNum = startNum/3;
			cntr++;
		}

	}
	while(startNum!==1);
	console.log(cntr);
	document.getElementById("p1").innerHTML = cntr;
}