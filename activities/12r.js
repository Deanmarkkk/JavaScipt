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
const container = document.querySelector('.container');
//RESET BUTTON
const resetBtn = document.querySelector('.reset-btn');
resetBtn.addEventListener('click', () => { //12v
    //resetScore()
    container.innerHTML = `<p class="parag">Are you sure you want to reset the score? <button class="yesBtn" onclick="yesNo('yes')">Yes</button><button class="noBtn" onclick="yesNo('no')">No</button></p>`
});

 function yesNo(choose) { //12x
        if (choose === 'yes') {
            resetScore()
        }
        else if (choose === 'no') { //12x
            location.reload(true); //new
            container.style.display = 'none';
        };
    };

//AUTO PLAY FUNCTION
const autoPlayBtn = document.querySelector('.autoPlay');
const getAutoPlayBtn = autoPlayBtn.textContent;

let playing = false;
let intervalId;
function togglePlay() {
    if (getAutoPlayBtn === 'Auto Play') {
        autoPlayBtn.innerHTML = 'Stop' //12t
        if (!playing) {
                intervalId = setInterval(() => { //LESSON 12 - PART 2 CHANGE TO ARROW FUNCTION
                const randomPlay = computerFunc();
                playGame(randomPlay)
            }, 1000);
            playing = true;
            }
        else {
        autoPlayBtn.innerHTML = 'Auto Play' //12t
        clearInterval(intervalId);
        playing = false;
        alert('You stop the game')
        }
    }
};

autoPlayBtn.addEventListener('click',() => {
    togglePlay();
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
    else if (event.key === 'a') { //12u
        togglePlay()
    }
    else if (event.key === 'Backspace') { //12w
        resetScore() 
    }
});
