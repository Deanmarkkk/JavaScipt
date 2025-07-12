let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    tie: 0
};
updateScore()

//COMPUTER MOVE
function computerFunc() {
    let randomNumber = Math.random();
    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1/3) {
        computerMove = 'rock';
    }
    else if (randomNumber >= 1/3 && randomNumber < 2/3) {
        computerMove = 'paper';
    }
    else if (randomNumber >= 2/3 && randomNumber < 1) {
        computerMove = 'scissors'
    }
return computerMove;
}
//PLAYER MOVE
function playGame(playerMove) {
    const moveResut = document.querySelector('.js-result');
    const moves = document.querySelector('.js-moves');

    const computerMove = computerFunc();
    let result = '';
    //ROCK MOVE
    if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            result = 'tie';
        }
        else if (computerMove === 'paper') {
            result = 'You lose';
        }
        else if (computerMove === 'scissors') {
            result = 'You win'
        }
    }
    //PAPER MOVE
    else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            result = 'You win';
        }
        else if (computerMove === 'paper') {
            result = 'tie';
        }
        else if (computerMove === 'scissors') {
            result = 'You lose';
        }
    }
    //SCISSORS MOVE
    else if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
            result = 'You lose';
        }
        else if (computerMove === 'paper') {
            result = 'You win';
        }
        else if (computerMove === 'scissors') {
            result = 'tie';
        }
    }

    if (result === 'You win') {
        score.wins += 1;
    }
    else if (result === 'You lose') {
        score.losses += 1;
    }
    else if (result === 'tie') {
        score.tie += 1;
    }

    updateScore()
    localStorage.setItem('score', JSON.stringify(score));
    moveResut.innerHTML = `${result}!`;
    moves.innerHTML = (`You <img src="/images/${playerMove}-emoji.png" class="images" width="100px"> <img src="/images/${computerMove}-emoji.png" class="images" width="100px"> Computer`);
};

//INSTEAD OF ONCLICK ATTRIBUTE, CHANGED TO ADD EVENT LISTENER
const rockBtn = document.querySelector('.rock-btn');
const paperBtn = document.querySelector('.paper-btn');
const scissorsBtn = document.querySelector('.scissors-btn');

rockBtn.addEventListener('click', () => {
    playGame('rock')
});
paperBtn.addEventListener('click', () => {
    playGame('paper')
});
scissorsBtn.addEventListener('click', () => {
    playGame('scissors')
});

function updateScore() {
    const scores = document.querySelector('.js-score');
    scores.innerHTML = `wins: ${score.wins} losses: ${score.losses} ties: ${score.tie}`;
}

function resetScore() {
    score = {
    wins: 0,
    losses: 0,
    tie: 0
}
updateScore()
};
//RESET BUTTON
const resetBtn = document.querySelector('.reset-btn');
resetBtn.addEventListener('click', () => {
    resetScore()
});

//AUTO PLAY FUNCTION
let playing = false;
let intervalId;

function autoPlay() {
     if (!playing) {
        intervalId = setInterval(() => { //LESSON 12 - PART 2 CHANGE TO ARROW FUNCTION
        const randomPlay = computerFunc();
        playGame(randomPlay)
    }, 1000);
    playing = true;
    alert('The game is automatic')
    } 
    else {
        clearInterval(intervalId);
        playing = false;
        alert('You stop the game')
    }
};
//AUTO PLAY BUTTON
const autoPlayBtn = document.querySelector('.autoPlay');
autoPlayBtn.addEventListener('click', () => {
    autoPlay()
});
//EVENT LISTENER FOR KEYBOARDS TO PLAY THE GAME TOO
document.body.addEventListener('keydown', (event) => {
    if (event.key === 'r') {
        playGame('rock')
    }
    else if (event.key === 'p') {
        playGame('paper')
    }
    else if (event.key === 's') {
        playGame('scissors')
    }
});