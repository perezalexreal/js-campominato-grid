const buttonEasy = document.querySelector('.easy');
const buttonMedium = document.querySelector('.medium');
const buttonHard = document.querySelector('.hard');


function changeColor(boxDiv, number) {
    boxDiv.addEventListener('click', function (){
        this.classList.add('blue');
        this.innerHTML = number;
    })
}


function creaBox(containerGame, difficultGame, number) {
    const boxElemento = document.createElement('div');
    boxElemento.classList.add('box');
    if( difficultGame ===  'easy'){
        containerGame.style.width = '350px'
    } else if ( difficultGame === 'medium') {
        containerGame.style.width = '450px';
    } else {
        containerGame.style.width = '500px';
    }
    containerGame.append(boxElemento);
    changeColor(boxElemento, number);
}

// width 500 if 100

// width 450 if 81 
// width 350 if 49

const container = document.querySelector('.campominato-container');


buttonEasy.addEventListener('click', function() {
    container.innerHTML = "";
    let dificult = 'easy';
    for (let i = 0; i < 49 ; i++) {
        creaBox(container, dificult, i);
    }
})

buttonMedium.addEventListener('click', function() {
    container.innerHTML = "";
    let dificult = 'medium';
    for (let i = 0; i < 81 ; i++) {
        creaBox(container, dificult, i);
    }
})

buttonHard.addEventListener('click', function() {
    container.innerHTML = "";
    let dificult = 'hard';
    for (let i = 0; i < 100 ; i++) {
        creaBox(container, dificult, i);
    }
})







