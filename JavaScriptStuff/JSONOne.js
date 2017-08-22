function retrieveJson(){
	var requestURL = "https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json";
		var request = new XMLHttpRequest();
		request.open("GET", requestURL);
		request.responseType = "json"
		request.send();
		request.onload = function() {
			var requestData = request.response;
			var myH1 = document.createElement("h1");
			alert(requestData["members"][0].name);
			myH1.textContent = requestData["squadName"];
			document.getElementsByTagName("head")[0].appendChild(myH1);
		}
}
