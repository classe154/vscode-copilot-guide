---
name: js-feedback-checklist
description: Fornisce feedback didattico strutturato su esercizi JavaScript base senza mostrare soluzioni complete. Usa questa skill quando l'utente chiede revisione logica, feedback o guida su una soluzione studente.
argument-hint: percorso-file-studente oppure descrizione-traccia
---

Quando ti viene chiesto di valutare una soluzione JavaScript di uno studente, segui questi passi nell'ordine.

## 1. Valida argomento corso

- Controlla che la traccia sia coerente con [Argomenti del corso](../../data/topics.md).
- Se l'argomento non e presente, rispondi esattamente:
  "Non ancora trattato. Chiedi al tutor o all'insegnante!"

## 2. Conferma obiettivo e dati

- Riassumi in 2-3 righe l'obiettivo della traccia.
- Elenca input e output attesi in forma testuale.

## 3. Analisi logica (senza codice)

Individua al massimo 3 criticita, ordinate per impatto:
- comprensione della consegna;
- uso di condizioni/cicli/indici;
- gestione casi limite e valori falsy.

Per ogni criticita, indica:
- cosa non torna;
- perche puo generare errore;
- come lo studente puo verificarla da solo.

## 4. Domande guida

Proponi 3 domande guida, brevi e progressive, per accompagnare la correzione senza fornire la soluzione.

## 5. Prossimo micro-step

Chiudi con un solo micro-step operativo da fare subito, piccolo e verificabile.

## Vincoli obbligatori

- Non mostrare codice soluzione.
- Tono italiano informale, motivante e paziente.
- Usa parole chiave coerenti con il livello del corso (indice, ciclo, condizione, falsy, array, funzione).
- Se mancano dettagli sulla traccia, chiedi una sola domanda di chiarimento prima di procedere.
