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
    };
    if (humanScore > 4 || computerScore > 4 ) {
        humanScore = 0;
        computerScore  = 0;
    };
};

// const playGame = () => {
//     while (humanScore < 3 && computerScore < 3) {
//         const humanChoice = getHumanChoice();
//         const computerChoice = getComputerChoice();
//         playRound(humanChoice, computerChoice);
//         log(humanChoice);
//         log(computerChoice);
//         }
//     



// };

// playGame();

const Main = document.querySelector('#main')
const Rock = document.createElement('button');
const paper = document.createElement('button');
const scissors = document.createElement('button');
Main.appendChild(Rock);
Main.appendChild(paper);
Main.appendChild(scissors);


Rock.textContent = 'rock'
paper.textContent = 'paper'
scissors.textContent = 'scissors'
Rock.value = 'rock'
paper.value = 'paper'
scissors.value = 'scissors'

Rock.addEventListener('click', (humanChoice, computerChoice) => {
    humanChoice = Rock.value;
    computerChoice  = getComputerChoice()
    playRound(humanChoice, computerChoice);
    scoring();
});
paper.addEventListener('click', (humanChoice, computerChoice) => {
    humanChoice = paper.value;
    computerChoice = getComputerChoice()
    playRound(humanChoice,computerChoice);
    scoring();
});

scissors.addEventListener('click',(humanChoice, computerChoice) => {
    humanChoice = scissors.value;
    computerChoice = getComputerChoice();
    console
    playRound(humanChoice, computerChoice)
    scoring();
});

