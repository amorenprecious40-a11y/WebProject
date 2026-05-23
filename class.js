const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const commentPage = document.getElementById('myH4');


function pickComputerMove() {
    const randomNumber = Math.random();
    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1/3) {
        computerMove = 'rock';
    } else if(randomNumber >= 1/3 && randomNumber < 2/3) {
        computerMove = 'paper';
    } else if(randomNumber >= 2/3 && randomNumber < 1) {
        computerMove = 'scissors';
    }
    return computerMove;

    
}

function playGame(playerMove) {
    const computerMove = pickComputerMove();
    let result = '';

    if (playerMove === 'rock'){
        if (computerMove === 'rock') {
            result = 'Tie';
        } else if(computerMove === 'paper'){
            result = 'You lose';
        } else if (computerMove === 'scissors'){
            result = 'You win';
        }
    }

    if (playerMove === 'paper'){
        if (computerMove === 'rock') {
            result = 'You win';
        } else if(computerMove === 'paper'){
            result = 'Tie';
        } else if (computerMove === 'scissors'){
            result = 'You lose';
        }
    }

    if (playerMove === 'scissors'){
        if (computerMove === 'rock') {
            result = 'You lose';
        } else if(computerMove === 'paper'){
            result = 'You win';
        } else if (computerMove === 'scissors'){
            result = 'Tie';
        }
        
    }
    commentPage.textContent = `Result: You pick ${playerMove}. Computer picked ${computerMove}. ${result}`
}
rockBtn.onclick = function() {
    playGame('rock');
}

paperBtn.onclick = function() {
    playGame('paper');
}

scissorsBtn.onclick = function() {
    playGame('scissors');
}


