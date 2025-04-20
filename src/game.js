import humanChoice from "./user.js"

export default () => {
    const state = {
        humanScore: 0,
        computerScore: 0,
    };

    const elemenScoreHuman = document.querySelector('.score-human');
    const elemenScoreComputer = document.querySelector('.score-computer');
    const elementResult = document.querySelector('.result-result');

    const getComputerChoice = () => {
        const randomElement = Math.floor(Math.random() * 3)
        switch (randomElement) {
            case 0:
                return 'rock';
            case 1:
                return 'paper';
            case 2:
                return 'scissors';
            default:
                break;
        }
    }

    const render = () => {
        if (state.humanScore > state.computerScore) {
            elementResult.innerHTML = 'You won, congratulation!'
        } else if (state.humanScore < state.computerScore) {
            elementResult.innerHTML = 'You lose ('
        } else {
            elementResult.innerHTML = 'friendship won (tie)'
        }

        elemenScoreHuman.innerHTML = state.humanScore;
        elemenScoreComputer.innerHTML = state.computerScore;
    }

    const game = (valueHuman, valueComp) => {
        if (valueHuman === valueComp) {
            return alert('friendship won (tie)');
        } else if (valueHuman === 'rock' && valueComp === 'paper') {
            state.computerScore += 1;
            return alert('you lose');
        } else if (valueHuman === 'paper' && valueComp === 'rock') {
            state.humanScore += 1;
            return alert('you won');
        } else if (valueHuman === 'scissors' && valueComp === 'rock') {
            state.computerScore += 1;
            return alert('you lose');
        } else if (valueHuman === 'rock' && valueComp === 'scissors') {
            state.humanScore += 1;
            return alert('you won');
        }  else if (valueHuman === 'paper' && valueComp === 'scissors') {
            state.computerScore += 1;
            return alert('you lose');
        } else if (valueHuman === 'scissors' && valueComp === 'paper') {
            state.humanScore += 1;
            return alert('you won');
        }
    }

    const playRound = (humanChoi, computerChoi) => {
        const choiHuman = humanChoi.toLowerCase();
        return game(choiHuman, computerChoi);
    }

   

    for (let i = 0; i < 5; i++) {
        const human = humanChoice()
        const computer = getComputerChoice()
        playRound(human, computer);
    }

    render()

    return
}
