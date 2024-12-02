const log = console.log;
let humanScore = 0;
let computerScore = 0;


const getComputerChoice = () => {
    random= Math.random().toString().charAt(5);
    if (random <= 3) {
        return 'rock'     
    }else if (random >= 8) {
        return 'paper'     
    }else return 'scissors'

};

const getHumanChoice = () => {
    const input = prompt('rock, paper, or scissors:', '').toLowerCase();
    const regex = /^(rock|paper|scissors)$/i;
    if (regex.test(input)) {
        return input;
    } else {
        alert('Invalid choice. Try again.');
        return getHumanChoice();
    }
};

const playRound = (humanChoice, computerChoice) => {
    if (humanChoice === computerChoice) {
        console.log('It\'s a tie!');
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
};


const scoring = () => {

        if (humanScore === 3 && computerScore < 3 ) {
            return console.log(`${humanScore}YOU BEAT THE SYSTEM!!!`)
        } else if (computerScore === 3 && humanScore < 3 ) {
            return console.log(`${computerScore} vs ${humanScore}THE SYSTEM WINS`);   
        }
};

const playGame = () => {
    while (humanScore < 3 && computerScore < 3) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        log(humanChoice);
        log(computerChoice);
        }
    scoring();



};

playGame();
