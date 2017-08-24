function drawRektangle(yourWord,width,height){
    let wordToPrint = yourWord.split('');
    wordToPrint.forEach(function(element) {
        console.log(element);
    });
    let newParagraph = document.createElement("p");
    //newParagraph.setAttribute("id", "p1");
    document.body.appendChild(newParagraph);
    for(let i = 0; i<width; i++){
        //let paragraph = document.getElementById("p1");
        wordToPrint.forEach(function(element) {
            newParagraph.innerHTML+=element;
        });
        
    }
}