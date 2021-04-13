var cognomeUtente = prompt("inserisci il tuo cognome")
var listaCognomi = [
    'Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'
];


listaCognomi.push(cognomeUtente);

listaCognomi.sort();

document.getElementById("allCognomi").innerHTML = listaCognomi.join(', ');

var posizioneCognome = (listaCognomi.indexOf(cognomeUtente));

document.getElementById("posizioneUtente").innerHTML = ("Il tuo cognome si trova alla posionione numero " + (posizioneCognome + 1));