function somPom() {

    document.querySelector('#som_tecla_pom').play();

}

function somClep() {

    document.querySelector('#som_tecla_clap').play();

}

function somTim() {

    document.querySelector('#som_tecla_tim').play();

}

function somPuff() {

    document.querySelector('#som_tecla_puff').play();

}

function somSplash() {

    document.querySelector('#som_tecla_splash').play();

}

function somToim() {

    document.querySelector('#som_tecla_toim').play();

}

function somPsh() {

    document.querySelector('#som_tecla_psh').play();

}

function somTic() {

    document.querySelector('#som_tecla_tic').play();

}

function somTom() {

    document.querySelector('#som_tecla_tom').play();

}

const listaDeTeclas = 
document.querySelectorAll('.tecla');

listaDeTeclas [0].onclick = somPom;

listaDeTeclas [1].onclick = somClep;

listaDeTeclas [2].onclick = somTim;

listaDeTeclas [3].onclick = somPuff;

listaDeTeclas [4].onclick = somSplash;

listaDeTeclas [5].onclick = somToim;

listaDeTeclas [6].onclick = somPsh;

listaDeTeclas [7].onclick = somTic;

listaDeTeclas [8].onclick = somTom;