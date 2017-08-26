let wordList = ["hello", "tuesday", "pedagogical", "thursday", "friday", "dissatissfaction", "likely", "xbox", "teenager",
    "beyond", "stereotype", "superintendent", "professionalism", "communication", "peculiar", "supremacist", "appreciate", "stereotype"];
let lives = 7;
let wordToPlay = "";
let urlOfWordList = "https://raw.githubusercontent.com/dwyl/english-words/master/words.txt";
let newWordsList = "";

function selectWord() {
    let randomWord = Math.floor(Math.random() * wordList.length);
    let word = wordList[randomWord];
    lives = 7;
    return word;
}

function easyFilter(word) {
    return word.length < 7;
}

function mediumFilter(word) {
    return word.length > 6 && word.length < 10;
}

function hardFilter(word) {
    return word.length > 9;
}

function getArrayOfDiff(word) {
    if (word.toUpperCase() === "easy".toUpperCase()) {
        return wordList.filter(easyFilter);
    }
    else if (word.toUpperCase() === "medium".toUpperCase()) {
        return wordList.filter(mediumFilter);
    }
    else if (word.toUpperCase() === "hard".toUpperCase()) {
        return wordList.filter(hardFilter);
    }
    else {
        return wordList;
    }
}


function playHangman(difficulty) {
    console.log(newWordsList.length);
    wordList = getArrayOfDiff(difficulty);
    wordToPlay = selectWord();
    let amountOfDashes = wordToPlay.length;
    let guessString = document.getElementById("output");
    guessString.innerHTML = "";
    for (let i = 0; i < amountOfDashes; i++) {
        if (i === amountOfDashes - 1) {
            guessString.innerHTML += "_";
        }
        else {
            guessString.innerHTML += "_ ";
        }
    }
}

function playerGuess(letter) {
    let guessedCorrect = false;
    let wordLength = wordToPlay.length;
    let splitString = wordToPlay.split('');
    let output = document.getElementById("output");
    let dashArray = output.innerHTML.split(" ");
    output.innerHTML = "";
    for (let i = 0; i < splitString.length; i++) {
        if (splitString[i].toUpperCase() === letter.toUpperCase()) {
            dashArray[i] = letter;
            guessedCorrect = true;
        }
    }
    for (let i = 0; i < dashArray.length; i++) {
        if (i === dashArray.length - 1) {
            output.innerHTML += dashArray[i];
        }
        else {
            output.innerHTML += dashArray[i] + " ";
        }
    }
    if (!dashArray.includes("_")) {
        alert("You have Won");
        location.reload();
    }
    else if (!guessedCorrect) {
        lives = lives - 1;
        document.getElementById("draw").innerHTML = '<img src="' + lives + '.png" width="200" height="400">';
    }
    if (lives === 0) {
        alert("You have Lost");
        location.reload();
    }
}

