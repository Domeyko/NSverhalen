/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*Bevestigen Registreren*/

function bringit(){
    document.getElementById('register').onclick=melding;
}

function melding(){
    alert('Uw bent zojuist Geregistreerd! Veel leesplezier :) ');
}
window.onload=bringit;

/*Favorieten aanklicken / uitklicken */


var el = document.getElementById('favorieten').getAttribute('src');

el = document.getElementById('favorieten').setAttribute('src', 'images/favorietenuit.png');

function changeimage(){

    var huidig = document.getElementById('favorieten').getAttribute('src');

    if (huidig == 'images/favorietenuit.png'){

        el = document.getElementById('favorieten').setAttribute('src', 'images/favorietenaan.gif');

    } else {
        el = document.getElementById('favorieten').setAttribute('src', 'images/favorietenuit.png');
    }

}
var bestand = document.getElementById('favorieten');
bestand.addEventListener('click', changeimage , false);