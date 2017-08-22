function addParagraph(){
	var newDiv = document.createElement("div"); 
	var para = document.createElement("p");
	var node = document.createTextNode("This is new.");
	para.appendChild(node);
	para.setAttribute("id", "p1");
	newDiv.appendChild(para);
	var element = document.getElementById("div1");
	element.appendChild(newDiv);
}

function editParagraph(newText){
	document.getElementById("p1").innerHTML = newText;
}

function removeParagraph(){
	var elem = document.getElementById("p1");
	elem.remove();
}
