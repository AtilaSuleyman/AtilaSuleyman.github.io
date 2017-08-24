let garage = [];
let availableCars = [];

function createCar(brand, model, year, regNo, faults){
    let car = {Brand: brand, Model: model, Year: year, RegNo: regNo, Faults: faults };
    availableCars.push(car);
    console.log(availableCars.length);
    availableCars.forEach(function(element) {
        console.log(element.Brand);
        console.log(element.Model);
        console.log(element.Year);
        console.log(element.RegNo);
        console.log(element.Faults);
    });
    let paragraph = document.getElementById("p1");
    paragraph.innerHTML = "";
    paragraph.innerHTML += `Your ${car.Brand} ${car.Model} has been created!`;
    document.forms.submitForm.reset();
}

function checkInCar(regiNum){
    let output = document.getElementById("p6");
    output.innerHTML = "";
    availableCars.forEach(function(element) {
        if(element.RegNo === regiNum){
            garage.push(element);
            output.innerHTML += `${element.Brand} ${element.Model} has been successfully checked into the garage!`
        }
    });
}

function loadGarage(){
    let output = document.getElementById("p3");
    output.innerHTML = "";
    garage.forEach(function(element) {
        newParagraph = document.createElement("p");
        newParagraph.innerHTML += `Brand: ${element.Brand}, Model: ${element.Model}, Year: ${element.Year}, RegNo: ${element.RegNo}`;
        output.appendChild(newParagraph);
    });
}

function removeVehicle(regiNum){
    let paragraph2 = document.getElementById("p2");
    paragraph2.innerHTML = "";
    for(let i = 0; i<garage.length; i++){
        if(garage[i].RegNo === regiNum){
            paragraph2.innerHTML += `Brand: ${garage[i].Brand}, Model: ${garage[i].Model}, Year: ${garage[i].Year}, RegNo: ${garage[i].RegNo}`;
            garage.splice(i, 1);
        }
    }
    document.forms.checkOutForm.reset();
}

function calculateFees(regiNum){
    let paragraph4 = document.getElementById("p4");
    paragraph4.innerHTML = "";
    let bill =""
    let statement = ""
    for(let i = 0; i<garage.length; i++){
        if(garage[i].RegNo === regiNum){
            if(garage[i].Faults === 0){
                statement = "£0, car has no faults";
                paragraph4.innerHTML += statement;
            }
            else{
                bill ="£"+(garage[i].Faults*100);
                statement = "Your car has "+garage[i].Faults+" fault(s) it will therefore cost "+bill+" to fix";
                paragraph4.innerHTML += statement;
            }
        }
    }
    document.forms.billsForm.reset();
}

function executeRequest(request){
    let commandString = request.split(" ");
    let command = commandString[0];
    if(command === "create"){
        createCar(commandString[1],commandString[2],commandString[3],commandString[4],commandString[5]);
        let paragraph6 = document.getElementById("p5");
        paragraph6.innerHTML = "";
        paragraph6.innerHTML += `Your ${commandString[1]} ${commandString[2]} has been created!`;
    }
    else if(command === "checkin"){
        checkInCar(commandString[1]);
        let paragraph6 = document.getElementById("p5");
        paragraph6.innerHTML = "";
        paragraph6.innerHTML += `Your car has been checked in!`;
    }
    else if(command === "checkout"){
        removeVehicle(commandString[1]);
        let paragraph6 = document.getElementById("p5");
        paragraph6.innerHTML = "";
        paragraph6.innerHTML += `Your car has been checked out!`;
    }
    else if(command === "allcars"){
        let paragraph6 = document.getElementById("p5");
        paragraph6.innerHTML = "";
        garage.forEach(function(element) {
            newParagraph = document.createElement("p");
            newParagraph.innerHTML += `Brand: ${element.Brand}, Model: ${element.Model}, Year: ${element.Year}, RegNo: ${element.RegNo}`;
            paragraph6.appendChild(newParagraph);
        });
    }
    document.forms.adminRequest.reset();
}