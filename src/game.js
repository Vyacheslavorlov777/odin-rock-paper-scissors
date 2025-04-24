export default (humanChoi, state) => {
    const elements = {
        container: document.querySelector('.container'),
        rock: document.querySelector('.rock-icon'),
        paper: document.querySelector('.paper-icon'),
        scisoors: document.querySelector('.scissors-icon'),
        iconUser: document.querySelector('.icon-user'),
        iconComputer: document.querySelector('.icon-computer'),
        elemenScoreHuman: document.querySelector('.score-human'),
        elemenScoreComputer: document.querySelector('.score-computer'),
        modal: document.querySelector('.modalBackground'),
        modalWindow: document.querySelector('.modalWindow'),
    }

    const getComputerChoice = () => {
        const choices = ['rock', 'paper', 'scissors'];
        return choices[Math.floor(Math.random() * choices.length)];
    }

    const render = (humanChoi, computerChoi) => {
        const humanValue = humanChoi.target.id;

        elements.iconUser.innerHTML = `<img id="${humanValue}" class="${humanValue}-icon icon-main" src="/src/img/${humanValue}.PNG" alt="" srcset="">`;
        elements.iconComputer.innerHTML = `<img id="${computerChoi}" class="${computerChoi}-icon icon-main" src="/src/img/comp-${computerChoi}.PNG" alt="" srcset="">`;

        if (state.humanScore === 5) {
            elements.modal.style.display = 'block';
            elements.modalWindow.innerHTML = 'You won, congratulation!';
            elements.container.style = 'background-image: url(/src/img/the-end.JPG)';
        } else if (state.computerScore === 5) {
            elements.modal.style.display = 'block';
            elements.modalWindow.innerHTML = 'You lose (';
            elements.container.style = 'background-image: url(/src/img/the-end.JPG)';
        }

        elements.elemenScoreHuman.innerHTML = state.humanScore;
        elements.elemenScoreComputer.innerHTML = state.computerScore;
    };

    const game = (valueHuman, valueComp) => {
        const humanChoice = valueHuman.target.id;

        const winnerCombination = {
            rock: 'scissors',
            paper: 'rock',
            scissors: 'paper',
        };

        if (humanChoi === valueComp) {
            return;
        } else if (winnerCombination[humanChoice] === valueComp) {
            state.humanScore += 1;
        } else {
            state.computerScore += 1;
        }
    };

    const playRound = (humanChoi, computerChoi) => {
        game(humanChoi, computerChoi);
        render(humanChoi, computerChoi);
        return;
    };

    playRound(humanChoi, getComputerChoice());
    return;
};
