// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all'utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell'ordine: nome, cognome e età.

// Oggetto contenente i dati dello studente
var studente = {
    nome: "Damiano",
    cognome: "Trifone",
    eta: 24
};

// Stampa informazioni con ciclo for-in
var informazioni;
for (var informazioni in studente ){
    console.log(informazioni + " " + studente[informazioni]);
}

// Array di oggetti di studenti
var studenti = [
    {
        nome: "Guido",
        cognome: "Male",
        eta: 25
    },

    {
        nome: "Franco",
        cognome: "Pappalardo",
        eta: 35
    },

    {
        nome: "Michele",
        cognome: "Scarsino",
        eta: 19
    },

    {
        nome: "Vera",
        cognome: "Forse",
        eta: 21
    },

    {
        nome: "Lucrezia",
        cognome: "Bellassai",
        eta: 26
    }
];

// Stampa informazioni studenti
for (var i=0; i < studenti.length; i++){
    console.log(studenti[i]);
}

// Inserimento nuovo studente
nuovoStudente = {
    nome: prompt("Inserisci il nome del nuovo studente"),
    cognome: prompt("Inserisci il cognome del nuovo studente"),
    eta: parseInt(prompt("Inserisci l'età del nuovo studente"))
};

studenti.push(nuovoStudente); //Caricamento in Array
console.log(studenti); //Log comprendente l'ultimo inserimento dell'utente