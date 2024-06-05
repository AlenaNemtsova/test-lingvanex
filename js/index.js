'use strict';

const buttons = document.querySelectorAll('.users__button');
const cards = document.querySelectorAll('.users-card__content');

const showActive = event => {
    const type = event.target.dataset.type;
    const card = document.getElementById(type);

    buttons.forEach(button => button.classList.remove('active'));
    event.target.classList.add('active');

    cards.forEach(card => card.classList.remove('active'));
    card.classList.add('active');
}

buttons.forEach(button => button.addEventListener('click', showActive));