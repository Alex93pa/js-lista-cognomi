var cognomeUtente = prompt("inserisci il tuo cognome")
var listaCognomi = [
    'Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'
];


// Costruisco una variabile cognomeMaiuscola, ovvero ccognomeUtente ma con la prima lettera maiuscola, e lo pusho in cognomi
inizialeMaiuscola = cognomeUtente.charAt(0);
cognomeMaiuscola = inizialeMaiuscola.toUpperCase() + cognomeUtente.slice(1);
listaCognomi.push(cognomeMaiuscola);

//sistemo in ordine alfabetico
listaCognomi.sort();

document.getElementById("allCognomi").innerHTML = listaCognomi.join(', ');

var posizioneCognome = (listaCognomi.indexOf(cognomeMaiuscola));

document.getElementById("posizioneUtente").innerHTML = ("Il tuo cognome si trova alla posizione numero " + (posizioneCognome + 1));