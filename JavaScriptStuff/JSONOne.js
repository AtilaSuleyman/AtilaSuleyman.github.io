function retrieveJson(){
	var requestURL = "https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json";
		var request = new XMLHttpRequest();
		request.open("GET", requestURL);
		request.responseType = "json";
		request.send();
		request.onload = function() {
			var requestData = request.response;
			var h1 = document.createElement("h1");
			document.getElementsByTagName("body")[0].appendChild(h1);
			var h3 = document.createElement("h3");
			document.getElementsByTagName("body")[0].appendChild(h3);
			var newDiv = document.createElement("div"); 
			newDiv.setAttribute("id", "maindiv");
			document.getElementsByTagName("body")[0].appendChild(newDiv);
			h1.innerHTML += requestData.squadName;
			var br = document.createElement("br");
			h3.innerHTML += "Home Town: "+requestData.homeTown;
			h3.appendChild(br);
			h3.innerHTML += "Year Formed: "+requestData.formed;
			h3.appendChild(br);
			h3.innerHTML += "Secret Base: "+requestData.secretBase;
			h3.appendChild(br);
			h3.innerHTML += "Is Active: "+requestData.active;
			h3.appendChild(br);
			h3.innerHTML += "Members: ";
			h3.appendChild(br);
			for(var i = 0; i<requestData.members.length; i++){
				var paragraph = document.createElement("p");
				newDiv.appendChild(paragraph);	
				paragraph.innerHTML += "Name: "+requestData.members[i].name;
				paragraph.appendChild(br);
				paragraph.innerHTML += "Age: "+requestData.members[i].age;
				paragraph.appendChild(br);
				paragraph.innerHTML += "Secret Identity: "+requestData.members[i].secretIdentity;
				paragraph.appendChild(br);
				paragraph.innerHTML += "Powers: ";
				paragraph.appendChild(br);
				for(var j = 0; j<requestData.members[i].powers.length; j++){
					paragraph.innerHTML += requestData.members[i].powers[j];
					paragraph.appendChild(br);
				}
			}
		};
	}
