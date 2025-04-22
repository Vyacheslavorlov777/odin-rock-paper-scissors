import play from "../game.js"

const app = () => {
    const state = {
        humanScore: 0,
        computerScore: 0,
    };

    const elements = {
        rock: document.querySelector('.rock-icon'),
        paper: document.querySelector('.paper-icon'),
        scisoors: document.querySelector('.scissors-icon'),
        modal: document.querySelector('.modalBackground'),
        closed: document.querySelector('.closed'),
    };

    elements.rock.addEventListener('click', (e) => {
        e.preventDefault()
        play(e, state)
    })
    
    elements.paper.addEventListener('click', (e) => {
        e.preventDefault()
        play(e, state)
    })
    
    elements.scisoors.addEventListener('click', (e) => {
        e.preventDefault()
        play(e, state)
    })

    elements.closed.addEventListener('click', (e) => {
        elements.modal.style.display = 'none'
    })

    return
}

app()