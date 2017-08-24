function searchJson(searchFeature){
	var requestURL = "https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/kings.json";
		var request = new XMLHttpRequest();
		request.open("GET", requestURL);
		request.responseType = "json";
		request.send();
		request.onload = function() {
            var requestData = request.response;
            var br = document.createElement("br");
            var p1 = document.getElementById("p1");
            var p2 = document.createElement("p");
            p1.innerHTML = "";
            requestData.forEach(function(element) {
                if(element.nm === searchFeature){  
                    p1.innerHTML += "Name: "+element.nm;
                    p1.appendChild(br);
                    p1.innerHTML += "City: "+element.cty;
                    p1.appendChild(br);
                    p1.innerHTML += "House: "+element.hse;
                    p1.appendChild(br);
                    p1.innerHTML += "Years: "+element.yrs;
                    p1.appendChild(br);
                    p1.appendChild(p2);
                }
                else if(element.cty === searchFeature){  
                    p1.innerHTML += "Name: "+element.nm;
                    p1.appendChild(br);
                    p1.innerHTML += "City: "+element.cty;
                    p1.appendChild(br);
                    p1.innerHTML += "House: "+element.hse;
                    p1.appendChild(br);
                    p1.innerHTML += "Years: "+element.yrs;
                    p1.appendChild(br);
                    p1.appendChild(p2);
                }
                else if(element.hse === searchFeature){
                    p1.innerHTML += "Name: "+element.nm;
                    p1.appendChild(br);
                    p1.innerHTML += "City: "+element.cty;
                    p1.appendChild(br);
                    p1.innerHTML += "House: "+element.hse;
                    p1.appendChild(br);
                    p1.innerHTML += "Years: "+element.yrs;
                    p1.appendChild(br);
                    p1.appendChild(p2);
                }
                else if(element.yrs === searchFeature){                                      
                    p1.innerHTML += "Name: "+element.nm;
                    p1.appendChild(br);
                    p1.innerHTML += "City: "+element.cty;
                    p1.appendChild(br);
                    p1.innerHTML += "House: "+element.hse;
                    p1.appendChild(br);
                    p1.innerHTML += "Years: "+element.yrs;
                    p1.appendChild(br);
                    p1.appendChild(p2);
                }
            });
        };
    }
