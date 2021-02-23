const pop = document.querySelector('.popup');
const pop2 = document.querySelector('.button-show');
const closepop2 = pop.querySelector('.button-hide');

pop2.addEventListener('click', function (evt) {
    evt.preventDefault();
    pop.classList.add('popup--open')
});

closepop2.addEventListener('click', function () {
    pop.classList.remove('popup--open');

});

document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
        pop.classList.remove('popup--open');
    }
});