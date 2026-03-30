---
name: html-bootstrap-scaffold
description: Genera lo scaffolding di un progetto web con HTML, CSS e JavaScript. Crea index.html con Bootstrap 5.3.8 CDN, index.css nella cartella styles/, e index.js nella cartella scripts/.
argument-hint: nome-progetto opzionale o varianti richieste
agent: agent
---

Quando ti viene chiesto di scaffoldare un progetto web, genera la seguente struttura di cartelle e file.

## Struttura cartelle da creare

```text
progetto/
├── index.html
├── styles/
│   └── index.css
└── scripts/
    └── index.js
```

## 1. Genera index.html

Crea un file `index.html` con il seguente contenuto:

```html
<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Progetto Web</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet"/>
    <link rel="stylesheet" href="styles/index.css"/>
</head>
<body>
    <div class="container mt-5">
        <h1>Benvenuto!</h1>
        <p>Il tuo progetto e pronto per iniziare.</p>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>
    <script src="scripts/index.js"></script>
</body>
</html>
```

## 2. Genera styles/index.css

Crea la cartella `styles/` e al suo interno il file `index.css` con il seguente contenuto:

```css
:root {
  --primary-color: #0d6efd;
  --secondary-color: #6c757d;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f8f9fa;
  color: #333;
}

h1 {
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.container {
  max-width: 1200px;
}
```

## 3. Genera scripts/index.js

Crea la cartella `scripts/` e al suo interno il file `index.js` con il seguente contenuto:

```js
'use strict';

// Messaggio di benvenuto in console
console.log('Il progetto e stato caricato correttamente!');

// Esempio: aggiungi qui il tuo codice
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM e pronto per essere manipolato.');
});
```

## Istruzioni finali

- Assicurati che tutte e tre le cartelle e files siano creati.
- Verifica che i path relativi nei link siano corretti (styles/ e scripts/ rispetto a index.html).
- Spiega brevemente all'utente che il progetto e pronto e puo iniziare a modificare i file per aggiungere il suo contenuto.
