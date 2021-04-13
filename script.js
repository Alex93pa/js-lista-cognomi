var cognomeUtente = prompt("inserisci il tuo cognome")
var listaCognomi = [
    'Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'
];


// Costruisco una variabile cognomeMaiuscola che è uguale a mioUtente ma con la prima lettera maiuscola, e lo pusho in cognomi
inizialeMaiuscola = cognomeUtente.charAt(0);
cognomeMaiuscola = inizialeMaiuscola.toUpperCase() + cognomeUtente.slice(1);
listaCognomi.push(cognomeMaiuscola);


listaCognomi.sort();

document.getElementById("allCognomi").innerHTML = listaCognomi.join(', ');

var posizioneCognome = (listaCognomi.indexOf(cognomeMaiuscola));

document.getElementById("posizioneUtente").innerHTML = ("Il tuo cognome si trova alla posizione numero " + (posizioneCognome + 1));