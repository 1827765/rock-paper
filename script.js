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
    Input = prompt('rock paper scissors', '');
    userInput = Input.toString().toLowerCase();
    regex = /rock|paper|scissors/i;    
    if (userInput.search(regex) >= 0) {
        return userInput
    } else alert('Try Again');

};
let humanScore = 0 ;
let computerScore = 0 ;

let playRound = (humanChoice, computerChoice) => {
    
    switch(humanChoice) {
        case 'rock':
            humanChoice.length === computerChoice.length ? console.log('tie'):
            humanChoice.length === 4 && computerChoice.length === 8 ? console.log(`you win! ${humanChoice} beats ${computerChoice}`) && ++humanScore:
            humanChoice.length === 4 && computerChoice.length === 5 ? console.log(`you lose ${computerChoice} beats ${humanChoice}`) && ++computerScore: ''
        break;
        case 'paper':
            humanChoice.length === computerChoice.length ? console.log('tie'):
            humanChoice.length === 5 && computerChoice.length === 4 ? console.log(`you win ${humanChoice} beats ${computerChoice}`) && ++humanScore: 
            computerChoice.length > 5 && humanChoice.length === 5 ? console.log(`you lose ${computerChoice} beats ${humanChoice}`) && ++computerScore:''
        break;
        case 'scissors':
            humanChoice.length === computerChoice.length ? log(`tie`):
            humanChoice.length === 8 && computerChoice.length === 5 ? log(`you win! ${humanChoice} beats ${computerChoice}`) && ++humanScore: 
            humanChoice.length === 8 && computerChoice === 4 ? log(`you lose ${computerChoice} beats ${humanChoice}`) && ++computerScore : ''
            

        }
    }

    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
playRound(humanChoice, computerChoice);