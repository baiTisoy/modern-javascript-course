const game1 = new Hangman('Cat Tails', 2);
const puzzleDIV = document.querySelector('#puzzle');
const remainingDIV = document.querySelector('#guesses');

    puzzleDIV.textContent = game1.puzzle;
    remainingDIV.textContent = game1.statusMessage;


    window.addEventListener('keypress', (e) => {
    
        const guess = String.fromCharCode(e.charCode);
        game1.makeGuess(guess);
        puzzleDIV.textContent = game1.puzzle;
        remainingDIV.textContent = game1.statusMessage;

    })
   



