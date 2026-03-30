# Argomenti trattati all'interno del corso

## HTML

- sintassi di HTML
- indentazione, attributi, tipi di tag
- tutti i tag principali, ma esclusivamente quelli validi in HTML 5
- Parole chiave: tag, classi, id

## CSS

- sintassi di CSS
- Parole chiave: classi, id, selettori, proprietà, valore, istruzione CSS
- modalità di inclusione del CSS, suggerendo l'utilizzo del CSS esterno in file separato, incluso tramite tag `<link>`
- Ereditarietà e specificità
- Selettori avanzati, pseudoclassi e pseudo elementi
- CSS Flexbox e proprietà annesse, incluso `gap` e tutte le proprietà di flex-container e flex-items
- Proprietà di base: `color`, `background-color`, `font-family`, `font-size`, `font-weight`, `text-align`, `text-decoration`, `border`, `border-radius`, `margin`(tutte le proprietà singole), `padding`(tutte le proprietà singole), `line-height`, `width`, `height` (e tutti i loro derivati max e min)
- Proprietà di `position`
- unità di misura `px`, `em`, `rem`, `%`, `vw`, `vh`
- media query
- tecnica di "container" e tecnica di "immagine fluida"
- Bootstrap Icons
- Bootstrap 5, in particolare il sistema di griglie e le utilities più conosciute.

## JS

### Variabili e sintassi di base

- `let` e `const`(NO `var`)
- inclusione di JS nel file HTML solo con `<script>` prima della chiusura del body
- commenti in JS
- sintassi di base
- contatenazione stringhe con +
- concatenazione stringhe con template literal
- tipi di dato: number, boolean, string.
- innerText, innerHTML
- Parole chiave: istanziare, dichiarare, assegnazione, variabile, costante, valori

### Istruzioni condizionali

- If, else, else-if
- operatori logici
- operatori matematici
- confronti tra valori
- valori falsy
- parole chiave: condizione, confronto, valore, falsy

### Ciclo For

- iterare, contatore, indice, condizione, ciclo, iterazione, condizione d'uscita
- Ciclo for semplice con contatore e condizione
- Non ancora `for..of`, `for..in`, `forEach`, `while`, `do... while`

### Array

- Parole chiave: array, elemento, indice, lunghezza
- Dichiarazione di un array
- metodi `push`, `unshift`, `shift`, `pop`, `splice`
- proprietà `length`
- indici
- Ciclo for + Array
- Non ancora `for..of`, `for..in`, `forEach`, `while`, `do... while`

### Funzioni

- Parole chiave: funzione, callback function, argomenti, parametri, valore di ritorno, return, dichiarazione, invocazione, hoisting, scope, return implicito
- Funzioni tradizionali
- Arrow function
- Dichiarazione e definizione di una funzione
- invocazione di una funzione
- timing functions

### Manipolazione del DOM

- Parole chiave: DOM, nodi
- Metodi `getElementById`, `querySelector`, `querySelectorAll`, `classList.add()`, `classList.toggle()`, `classList.remove()`
- proprietà `className`, `classList`, `innerText`, `innerHTML`, `style`
- metodi: `createElement()`, `appendChild()`, `append()`
- Utilizzo dei template literals sempre preferito alle DOM API tradizionali
- NON TRATTATI: `getElementsByTagName`, `textContent`, `setAttribute`, `createElement()`, `appendChild()`, `removeChild()`, `remove()

### OGGETTI

- Parole chiave: oggetto, valore, chiave, proprietà, dot notation, square bracket notation, chiave dinamica
- dichiarazione di un oggetto
- lettura delle proprietà di un oggetto
- scrittura delle proprietà di un oggetto
- aggiunta proprietà di un oggetto
- NON TRATTATI: metodi degli oggetti non menzionati precedentemente.

### ARRAY METHODS

- Metodo `forEach`
- Metodo `filter`
- Metodo `map`
- Metodo `find`
- NON TRATTATI: metodi `reduce`, `some` e tutti quelli non menzionati precedentemente

### CHIAMATE AJAX

- Parole chiave: AJAX, HTTP, API, JSON, asincrono, response, request
- Axios.get()
- Metodi JSON.parse(), JSON.stringify()
- Promises (solo `then()` e `catch()`)
- Utilizzare sempre axios e mai la sintassi async/await
- NON TRATTATI: fetch API, async/await, Promise.all() e  altri metodi non menzionati. 