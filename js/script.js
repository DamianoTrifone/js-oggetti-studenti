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

