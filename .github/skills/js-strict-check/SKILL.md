---
name: js-strict-check
description: Controlla che ogni file JavaScript inizi con 'use strict' e che ogni statement termini con punto e virgola. Usa questa skill quando ti viene chiesto di revisionare o controllare la qualita di un file .js.
---

Quando ti viene chiesto di controllare un file JavaScript, segui questi passi nell'ordine indicato.

## 1. Controlla la presenza di 'use strict'

- La prima riga non vuota e non di commento del file deve essere esattamente: `'use strict';`
- Se manca: segnala il problema indicando che va aggiunta come prima istruzione del file.
- Se e presente ma in posizione sbagliata (es. dopo una dichiarazione di variabile): segnala la riga e spiega che deve stare in cima.

## 2. Controlla il punto e virgola a fine statement

Scorri ogni riga del file e verifica che ogni statement termini con `;`.

Devono terminare con `;`:
- dichiarazioni di variabili: `const x = 5;`
- assegnazioni: `x = 10;`
- chiamate a funzione: `console.log('ciao');`
- istruzioni `return`: `return risultato;`

NON richiedere `;` dopo:
- blocchi con `{}`: `if (...) { ... }`, `for (...) { ... }`, `function nome() { ... }`
- commenti

## 3. Riporta i risultati

Per ogni problema trovato, indica:
- numero di riga
- il codice che causa il problema
- spiegazione breve in italiano

Se il file e corretto su entrambi i punti, rispondi con un messaggio positivo che lo conferma.
