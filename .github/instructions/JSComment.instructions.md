---
applyTo: '**/*.js'
---

# Regole per i commenti alle variabili in JavaScript

Ogni variabile dichiarata con `let` o `const` deve essere accompagnata da un commento inline (`//`) sulla stessa riga oppure su quella immediatamente precedente.

Il commento deve spiegare:
- a cosa serve la variabile;
- che tipo di valore contiene (se non e ovvio dal nome).

## Formato obbligatorio

Commento sulla stessa riga:

```js
const maxTentivi = 3; // numero massimo di tentativi consentiti prima del blocco
let punteggioUtente = 0; // punteggio corrente del giocatore, aggiornato a ogni risposta
```

Oppure commento sulla riga precedente (accettato per commenti piu lunghi):

```js
// indice dell'elemento attualmente selezionato nella lista dei risultati
let indiceSelezionato = 0;
```

## Regole specifiche

- Non usare commenti generici come `// variabile` o `// numero`: devono descrivere il contesto d'uso.
- Se la variabile contiene il risultato di una funzione, specifica cosa rappresenta quel risultato.
- Se la variabile e temporanea o di supporto a un ciclo, indicalo esplicitamente.

```js
// contatore temporaneo usato nel ciclo per tenere traccia dell'indice corrente
let i = 0;
```

## Cosa evitare

```js
// SBAGLIATO: commento assente
let nome;

// SBAGLIATO: commento inutile
let eta = 25; // eta

// CORRETTO
let eta = 25; // eta dell'utente registrato, usata per verificare l'accesso
```
