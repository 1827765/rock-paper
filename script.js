let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
    random = Math.random().toString().charAt(5);
    if (random <= 3) {
        return 'rock'
    } else if (random >= 8) {
        return 'paper'
    } else return 'scissors'

};
const playRound = (humanChoice, computerChoice) => {


    if (humanChoice === computerChoice) {
        const TIE = document.createElement('h3')
        TIE.textContent = 'TIE Same choice'
        TIE.style.backgroundColor = 'red'
        display.appendChild(TIE);
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        const humanWins = document.createElement('h2');
        humanWins.textContent = (`You win! ${humanChoice} beats ${computerChoice}`);
        display.appendChild(humanWins);
        humanScore++;
        HmSc.textContent = `Human's Score ${humanScore}`
        HmSc.value = humanScore

    } else {
        const computerWins = document.createElement('h2');
        computerWins.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
        display.appendChild(computerWins);
        computerScore++;
        CmSc.textContent = `Computer's  Score ${computerScore}`;
        HmSc.value = computerScore;

    };
    scoring();
};


const scoring = () => {

    if (humanScore === 3 && computerScore < 3) {
        const HmFinals = document.createElement('h1');
        HmFinals.textContent = `You Beat The ProGram
         score ${humanScore}:${computerScore}
         REFRESH PAGE`;
        Main.append(HmFinals)
    } else if (computerScore === 3 && humanScore < 3) {
        const CmFinals = document.createElement('h1');
        CmFinals.textContent = `${computerScore}:${humanScore}
        THE SYSTEM WINS REFRESH PAGE`;
        Main.append(CmFinals);
        if (HmSc.value > 3 || CmSc > 3) {
            humanScore = '';
            computerScore = '';
            CmSc.value = computerScore;
            HmSc.value = humanScore;
        };
    };
};

const Main = document.querySelector('#main')
const Rock = document.createElement('button');
const paper = document.createElement('button');
const scissors = document.createElement('button');
const Scores = document.createElement('div');
Scores.style.display = 'flex'
const HmSc = document.createElement('h4')
const CmSc = document.createElement('h4')
HmSc.style.cssText = 'margin: 0 auto 0 auto;'
Scores.appendChild(HmSc);
Scores.appendChild(CmSc)
Main.appendChild(Scores)
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
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
});
paper.addEventListener('click', (humanChoice, computerChoice) => {
    humanChoice = paper.value;
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
});

scissors.addEventListener('click', (humanChoice, computerChoice) => {
    humanChoice = scissors.value;
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
});

const display = document.createElement('div')
Main.appendChild(display);


