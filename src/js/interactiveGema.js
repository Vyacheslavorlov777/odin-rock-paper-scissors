const app = () => {
    const state = {
        humanScore: 0,
        computerScore: 0,
    };

    const elements = {
        rock: document.querySelector('.rock-icon'),
        paper: document.querySelector('.paper-icon'),
        scisoors: document.querySelector('.scissors-icon'),
        iconUser: document.querySelector('.icon-user'),
        iconComputer: document.querySelector('.icon-computer'),
    }

    elements.rock.addEventListener('click', (e) => {
        e.preventDefault()
        elements.iconUser.innerHTML = `<img src="/src/img/icons8-камень-100.png" alt="" srcset="">`
        elements.iconComputer.innerHTML = computerChoiceHTML(getComputerChoice())

    })
    
    elements.paper.addEventListener('click', (e) => {
        e.preventDefault()
        elements.iconUser.innerHTML = `<img src="/src/img/icons8-матовая-бумага-100.png" alt="" srcset="">`
        elements.iconComputer.innerHTML = computerChoiceHTML(getComputerChoice())
    })
    
    elements.scisoors.addEventListener('click', (e) => {
        e.preventDefault()
        elements.iconUser.innerHTML = `<img src="/src/img/icons8-парикмахерские-ножницы-100.png" alt="" srcset="">`
        elements.iconComputer.innerHTML = computerChoiceHTML(getComputerChoice())
    })


    // const elemenScoreHuman = document.querySelector('.score-human');
    // const elemenScoreComputer = document.querySelector('.score-computer');
    // const elementResult = document.querySelector('.result-result');

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

    const computerChoiceHTML = (fn) => {
        switch (fn) {
            case 'rock':
                return `<img src="/src/img/icons8-камень-100.png" alt="" srcset="">`;
            case 'paper':
                return `<img src="/src/img/icons8-матовая-бумага-100.png" alt="" srcset="">`;
            case 'scissors':
                return `<img src="/src/img/icons8-парикмахерские-ножницы-100.png" alt="" srcset="">`;
            default:
                break;
        }
    }

    // const render = () => {
    //     if (state.humanScore > state.computerScore) {
    //         elementResult.innerHTML = 'You won, congratulation!'
    //     } else if (state.humanScore < state.computerScore) {
    //         elementResult.innerHTML = 'You lose ('
    //     } else {
    //         elementResult.innerHTML = 'friendship won (tie)'
    //     }

    //     elemenScoreHuman.innerHTML = state.humanScore;
    //     elemenScoreComputer.innerHTML = state.computerScore;
    // }

    // const game = (valueHuman, valueComp) => {
    //     if (valueHuman === valueComp) {
    //         return alert('friendship won (tie)');
    //     } else if (valueHuman === 'rock' && valueComp === 'paper') {
    //         state.computerScore += 1;
    //         return alert('you lose');
    //     } else if (valueHuman === 'paper' && valueComp === 'rock') {
    //         state.humanScore += 1;
    //         return alert('you won');
    //     } else if (valueHuman === 'scissors' && valueComp === 'rock') {
    //         state.computerScore += 1;
    //         return alert('you lose');
    //     } else if (valueHuman === 'rock' && valueComp === 'scissors') {
    //         state.humanScore += 1;
    //         return alert('you won');
    //     }  else if (valueHuman === 'paper' && valueComp === 'scissors') {
    //         state.computerScore += 1;
    //         return alert('you lose');
    //     } else if (valueHuman === 'scissors' && valueComp === 'paper') {
    //         state.humanScore += 1;
    //         return alert('you won');
    //     }
    // }

    // const playRound = (humanChoi, computerChoi) => {
    //     const choiHuman = humanChoi.toLowerCase();
    //     return game(choiHuman, computerChoi);
    // }

   

    // for (let i = 0; i < 5; i++) {
    //     const human = humanChoice()
    //     const computer = getComputerChoice()
    //     playRound(human, computer);
    // }

    // render()

    return
}

app()