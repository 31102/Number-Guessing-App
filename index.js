


let guessField = document.getElementById("guessField");
let submitGuess = document.getElementById("subt");


let guesses = document.querySelector(".guesses");
let remainingGuess = document.querySelector(".lastResult");
let lowOrHi = document.querySelector(".lowOrHi");
let abc = document.querySelector(".abc");

let randomNumber = parseInt(Math.random() * 100) + 1;
let playGame = true;
let previousGuess = []
let remainGuess = 10;


function validateGuess() {

    let guess = parseInt(guessField.value);

    if (isNaN(guess)) {
        alert("Enter a valid Number")
    }
    else if (guess > 100) {
        alert("Enter a number between 1 to 100")
    }
    else if (guess < 1) {
        alert("Enter a number between 1 to 100")
    }
    else {
        previousGuess.push(guess)
        if (remainGuess === 11) {
            // alert(`Game Over and Random Number was ${randomNumber}`);
            displayMessage(`Game Over and Random Number was ${randomNumber}`);
            endGame();
        }
        else {
            checkGuess(guess);
        }
    }

}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`You WON`);
    }
    else if (guess > randomNumber) {
        displayMessage(`Number is TOO high`);
    }
    else if (guess < randomNumber) {
        displayMessage(`Number is TOO low`);
    }
}

function displayguess(message) {
    guesses.innerHTML = previousGuess;
    guessField.value = ""
    
   
}

function displayMessage(message){
    lowOrHi.innerHTML = `${message}`;
    endGame();
}


if (playGame) {
    submitGuess.addEventListener("click", (e) => {
        e.preventDefault();
        validateGuess();
        displayguess();
    });
}

function startGame() {
    lowOrHi.addEventListener("click" , (e)=>{
        e.preventDefault();
        randomNumber = parseInt(Math.random() * 100) + 1;
        previousGuess = []
        remainGuess = 10
        lowOrHi.innerHTML = ""
        submitGuess.value = "Submit Guess";
        submitGuess.removeAttribute("disabled")
        playGame = true;
        console.log("asiuduus");
        guesses.innerHTML = ""
        remainingGuess.innerHTML = 10
    })
}

function endGame() {
    if(remainGuess === 1){
        submitGuess.setAttribute("disabled" , "");
        submitGuess.value = "Game Over";
        abc.innerHTML= `Rondom number was ${randomNumber}`
        submitGuess.style.cursor="pointer"
        playGame = false;
        lowOrHi.innerHTML = "Start Game"
        lowOrHi.style.cursor="pointer"
        remainGuess--;
        startGame();
    }
    else{
        remainGuess--;
        remainingGuess.innerHTML = `${remainGuess}`
    }
}