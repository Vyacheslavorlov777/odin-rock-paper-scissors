import play from "../game.js"

const app = () => {
    const state = {
        humanScore: 0,
        computerScore: 0,
    };

    const humanChoices = document.querySelectorAll('.human-choice');
    const modal = document.querySelector('.modalBackground');
    const closed = document.querySelector('.closed');

    humanChoices.forEach((choi) => {
        choi.addEventListener('click', (ev) => {
            ev.preventDefault();
            play(ev, state);
        })
    });

    closed.addEventListener('click', (e) => {
        modal.style.display = 'none'
    });

    return;
};

app()