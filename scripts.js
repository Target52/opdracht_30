let checkN = function (number1, number2) {
    let i = 1;
    while (i < 5) {
        if (number1 == number2) {
            alert('Gefeliciteerd je hebt gewonnen')
            return;
        } else {
            let p = 5 - i;
            alert('Niet goed geraden, probeer het opnieuw, u heeft nog: ' + p + ' pogingen');
            number2 = prompt('Voer een nummer in van 0 tot 25...');
            i++;
        }
    }
};

let getNumber = function () {
    let kleinste = prompt('wat is het kleinste getal?');
    alert(kleinste);
    let grootste = prompt('wat is het grootste getal?');
    alert(grootste);
    let getalR = Math.floor((Math.random() * (grootste - kleinste + 1)) + kleinste);
    return getalR;
}

naam = prompt('Welkom! Wat is je naam?');
alert('Hey ' + naam);
getalR = getNumber();
//alert(getalR);
let getalG = prompt('Voer een nummer in van 0 tot 25 om te beginnen met raden...');
checkN(getalR, getalG);
alert('Dag ' + naam + ' Tot de volgende keer');