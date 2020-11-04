
const cpuChoice = () => {
    const cpuChoices = ['rock', 'paper', 'scissors'];
    let num = Math.floor(Math.random() * cpuChoices.length);
    return cpuChoices[num];
}


const referee = (playerChoice, cpuChoice) =>{
    if( playerChoice != 'rock' || playerChoice != 'paper' || playerChoice != 'scissors'){
        console.log('Please enter Rock, Paper or Scissors');
        return null;
    }
    else{
        let winner  
        switch (cpuChoice){
            case 'rock':
                if(playerChoice === 'paper'){
                    winner = 'player';
                    break;
                }
                else{
                    winner = 'cpu';
                    break;
                } 
            case 'paper':
                if(playerChoice === 'scissors'){
                    winner = 'player';
                    break;
                }
                else{
                    winner = 'cpu';
                    break;
                }
            case 'scissors':
                if(playerChoice === 'rock'){
                    winner = 'player';
                    break;
                }
                else{
                    winner = 'cpu';
                    break;
                }
            default:
                console.log('ERROR NO CPU CHOICE');  
        }
        return winner;
    }
}

const playerChoice = () => {
    let playerChoice = window.prompt('Enter Rock, Paper Or Scissors')
    playerChoice = playerChoice.toLowerCase();
    return playerChoice
}

const playGame = rounds => {

    let playerScore = 0;
    let cpuScore = 0;

    for(let i = 0; i < rounds; i++){
        let winner = referee(playerChoice(), cpuChoice());
        winner === 'player' ? playerScore++ : cpuScore++
    }

    console.log(`player score: ${playerScore}`)
    console.log(`cpu score: ${cpuScore}`)
    playerScore >= 3 ? console.log('player won') : console.log('cpu won');
}


const removeFromArray = function(){
    let array = arguments[0]

    for(let i = 1; i < arguments.length; i++){
       
        array.forEach(element => {
            if(typeof element === typeof arguments[i]){
                array = array.filter(num => num != arguments[i]);
            }
        });
    }
    return array
}


const sumAll = (num1, num2) => {
    
    if(typeof num1 != 'number' || typeof num2 != 'number'){
        return 'ERROR'
    }
    else{
        let sum = 0
        for(let i = num1 + 1; i < num2; i++){
            sum += i
        }
        sum += num1 + num2

        return sum
    }
}


