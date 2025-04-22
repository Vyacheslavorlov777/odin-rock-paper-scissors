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

    const render = (humanChoi, computerChoi) => {
        switch (humanChoi.target.id) {
            case 'rock':
                elements.iconUser.innerHTML = `<img id="rock" class="rock-icon icon-main" src="/src/img/rock.PNG" alt="" srcset="">`;
                break;
            case 'paper':
                elements.iconUser.innerHTML = `<img id="paper" class="paper-icon icon-main" src="/src/img/paper.PNG" alt="" srcset="">`;
                break;
            case 'scissors':
                elements.iconUser.innerHTML = `<img id="scissors" class="scissors-icon icon-main" src="/src/img/scissors.PNG" alt="" srcset="">`;
                break;
            default:
                break;
        }

        switch (computerChoi) {
            case 'rock':
                elements.iconComputer.innerHTML = `<img id="rock" class="rock-icon icon-main" src="/src/img/comp-rock.PNG" alt="" srcset="">`;
                break;
            case 'paper':
                elements.iconComputer.innerHTML = `<img id="paper" class="paper-icon icon-main" src="/src/img/comp-paper.PNG" alt="" srcset="">`;
                break;
            case 'scissors':
                elements.iconComputer.innerHTML = `<img id="scissors" class="scissors-icon icon-main" src="/src/img/comp-scissors.PNG" alt="" srcset="">`;
                break;
            default:
                break;
    }

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
        const valueHumanChoi = valueHuman.target.id
        if (valueHumanChoi === valueComp) {
            return
        } else if (valueHumanChoi === 'rock' && valueComp === 'paper') {
            state.computerScore += 1;
            return
        } else if (valueHumanChoi === 'paper' && valueComp === 'rock') {
            state.humanScore += 1;
            return
        } else if (valueHumanChoi === 'scissors' && valueComp === 'rock') {
            state.computerScore += 1;
            return
        } else if (valueHumanChoi === 'rock' && valueComp === 'scissors') {
            state.humanScore += 1;
            return
        }  else if (valueHumanChoi === 'paper' && valueComp === 'scissors') {
            state.computerScore += 1;
            return
        } else if (valueHumanChoi === 'scissors' && valueComp === 'paper') {
            state.humanScore += 1;
            return
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
