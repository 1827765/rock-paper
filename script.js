const log = console.log()

const getComputerChoice = () => {
    random= Math.random().toString().charAt(5);
    if (random <= 3) {
        return 'rock'     
    }else if (random >= 8) {
        return 'paper'     
    }else return 'scissors'

};
const getHumanChoice = (userInput) =>{
    choice = "rock","paper","scissors";
    userInput = prompt('rock paper scissors', '');
    regex = /rock|paper|scissors/i;

    if (userInput.search(regex) >= 0) {
        return userInput
    } else alert('Try Again');

};
let humanScore = 0 ;
let computerScore = 0 ;

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

let playRound = (humanChoice, computerChoice) => {

    switch(humanChoice) {
        case 'rock':
            humanChoice.length === computerChoice.length ? console.log('tie'):
            humanChoice.length === 4 && computerChoice.length > 5 ? console.log(`you win! ${humanChoice} beats ${computerChoice}`):
            humanChoice.length === 4 && computerChoice.length === 5 ? console.log(`you lose =! ${computerChoice} beats ${humanChoice}`): ''
        break;
        case 'paper':
            humanChoice.length === computerChoice.length ? console.log('tie'):
            humanChoice.length === 5 && computerChoice.length === 4 ? console.log(`you win ${humanChoice} beats ${computerChoice}`): 
            computerChoice.length > 5 && humanChoice.length === 5 ? console.log(`you lose ${computerChoice} beats ${humanChoice}`):''
        break;
        case 'scissors':
            humanChoice.length === computerChoice.length ? log(`tie`):
            humanChoice.length == 8 && computerChoice.length < 6 ? log(`you win! ${humanChoice} beats ${computerChoice}`) : 
            humanChoice.length === 8 && computerChoice === 4 ? log(`you lose ${computerChoice} beats ${humanChoice}`)
            

    }
}
console.log(playRound(humanChoice, computerChoice));