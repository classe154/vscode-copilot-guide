# Miniguida: Copilot e agenti personalizzati

Questa guida ti mostra come personalizzare GitHub Copilot nel tuo repository mediante 5 diversi strumenti:

1. **Parte 1**: `copilot-instructions.md` — istruzioni valide per tutto il repository
2. **Parte 2**: Agenti personalizzati — assistenti con ruolo e stile fisso
3. **Parte 3**: `.instructions.md` — istruzioni specifiche per file o cartelle
4. **Parte 4**: Skill — procedure step-by-step attivate su richiesta
5. **Parte 5**: Prompt Files (`.prompt.md`) — comandi slash riusabili in chat
6. **Parte 6**: Tabella comparativa tra i 5 strumenti

## Parte 1) Uso di `.github/copilot-instructions.md`

Questa sezione riassume le indicazioni ufficiali di GitHub Docs e VS Code Docs su come usare in pratica `copilot-instructions.md`.

### 1.1 A cosa serve

`.github/copilot-instructions.md` contiene istruzioni di repository valide per Copilot, utili per:

- standard di codice e stile;
- comandi corretti di build/test/lint;
- convenzioni del progetto e struttura cartelle;
- vincoli da rispettare (es. no librerie non approvate).

### 1.2 Dove si mette e quando si applica

1. Crea (o aggiorna) il file in: `.github/copilot-instructions.md`.
2. Scrivi istruzioni in linguaggio naturale (Markdown va benissimo).
3. Salva il file: le istruzioni diventano disponibili subito nelle richieste Copilot.

Nota pratica:

- su GitHub, quando le istruzioni sono usate, il file appare tra le reference della risposta;
- in VS Code puoi anche generare una bozza iniziale con `/init` e rifinirla a mano.

### 1.3 Priorità delle istruzioni (per evitare conflitti)

Quando convivono più livelli, l'ordine di priorità è:

1. istruzioni personali;
2. istruzioni repository (`copilot-instructions.md`);
3. istruzioni organizzazione.

Quindi conviene evitare regole contraddittorie tra questi livelli.

### 1.3bis Nota sulle istruzioni organizzazione

Le istruzioni organizzazione si configurano a livello account GitHub (non nel repository) e hanno la priorità più bassa. Per questo corso, concentrati su `copilot-instructions.md` nel tuo repository.

### 1.4 Buone pratiche consigliate

- usa frasi operative e verificabili (es. "esegui sempre test prima della PR");
- evita richieste troppo vaghe (es. "scrivi codice migliore");
- inserisci percorsi reali del progetto (`src/`, `tests/`, config lint);
- aggiorna il file quando cambiano comandi o pipeline CI.

### 1.5 Errori comuni da evitare

- mettere istruzioni task-specifiche invece di regole stabili del repo;
- scrivere un file troppo lungo e ridondante;
- dimenticare di allineare le istruzioni ai veri comandi funzionanti.

### 1.6 Fonti utili (ufficiali)

- GitHub Docs: "Adding repository custom instructions for GitHub Copilot"
  https://docs.github.com/en/copilot/how-tos/configure-custom-instructions/add-repository-instructions
- VS Code Docs: "Customize AI in Visual Studio Code"
  https://code.visualstudio.com/docs/copilot/customization/overview

## Parte 2) Agenti personalizzati

Questa parte mostra come creare agenti in modo pratico, con focus su:

- differenza tra agente locale e globale;
- esempio di agente semplice scritto a mano;
- meta prompt per farti generare un agente da un LLM.

### 2.1 Agente locale vs agente globale

#### Agente locale (consigliato per progetti specifici)

Un agente locale vive dentro il tuo repository e vale per quel progetto.

- Percorso tipico nel progetto: `.github/agents/`
- Esempio file: `.github/agents/SupportoJS.agent.md`

Quando usarlo:

- quando vuoi regole legate al contesto del repository;
- quando vuoi che il team condivida lo stesso comportamento dell'agente;
- quando l'agente deve usare file dati locali (es. `.github/agents/data/topics.md`).

Pro:

- versionabile in Git;
- condivisibile con il team;
- allineato al codice e alle convenzioni del progetto.

Contro:

- non riusabile automaticamente in altri repository;
- va mantenuto per ogni progetto.

#### Agente globale (consigliato per preferenze personali)

Un agente globale vive nel tuo profilo utente e puoi riusarlo in più progetti.

- Percorso user-level consigliato: `~/.copilot/agents`

Quando usarlo:

- quando vuoi uno stile personale costante ovunque;
- quando non dipende da file o dominio specifico di un singolo repo.

Pro:

- riuso veloce su più workspace;
- ottimo per workflow personali.

Contro:

- meno adatto a regole strettamente legate a un progetto;
- non è automaticamente condiviso col team via repository.

Regola pratica:

- usa locale per conoscenza di progetto;
- usa globale per abitudini personali trasversali.

### 2.1bis Percorsi consigliati in questo repository

Nel repository `vscode-copilot-guide`, gli agenti locali sono salvati in:
- `.github/agents/NOME_AGENTE.agent.md`

Esempio in questo repository:

- `.github/agents/Booligan.agent.md`
  Agente motivazionale per studenti del corso Boolean.

### 2.2 Esempio di agente semplice scritto a mano

Obiettivo: creare un agente minimale che ti aiuti con esercizi JavaScript base.

#### Step A: crea il file agente

Nel repository, crea il file `.github/agents/TutorJSBase.agent.md` con questo contenuto:

```md
Sei TutorJSBase, un assistente che aiuta studenti alle prime armi con JavaScript.

Obiettivo:
- spiegare in modo chiaro esercizi su variabili, if/else, ciclo for e array.

Stile:
- italiano semplice;
- risposte brevi (massimo 8 frasi);
- fai sempre un mini esempio concreto.

Comportamento:
- non dare subito la soluzione completa;
- fai prima 1 domanda di chiarimento se il requisito non e chiaro;
- evidenzia errori comuni e come evitarli.
```

#### Step B: (opzionale) aggiungi dati locali

Se vuoi che l'agente lavori su un syllabus preciso, crea:

- `.github/agents/data/topics.md`

E aggiungi nel prompt dell'agente una riga tipo:

- "Usa i temi presenti in `data/topics.md` per contestualizzare esempi e spiegazioni."

#### Perché questo esempio funziona

- ha un ruolo chiaro;
- definisce stile e limiti;
- definisce comportamento in caso di ambiguità;
- resta corto e manutenibile.

### 2.3 Meta prompt per farsi generare un agente

Usa questo meta prompt quando vuoi che un LLM ti produca una bozza di agente pronta da salvare.

```text
Agisci come "agent designer" per VS Code Copilot.
Voglio creare un agente personalizzato in formato Markdown.

Input:
- Nome agente: <NOME>
- Scopo: <COSA DEVE FARE>
- Utenti target: <CHI LO USA>
- Tono: <TONO>
- Vincoli: <COSA EVITARE>
- Dominio tecnico: <STACK/ARGOMENTI>
- Usa dati locali?: <SI/NO>
- Se SI, file dati: <PERCORSO_FILE>

Output richiesto:
1) Un file completo "<NOME>.agent.md" pronto da copiare.
2) Struttura obbligatoria con sezioni: Ruolo, Obiettivo, Stile, Comportamenti, Limiti.
3) Istruzioni operative chiare e verificabili (niente frasi vaghe).
4) Versione breve (max 25 righe) e versione estesa (max 80 righe).
5) Una checklist finale in 8 punti per validare la qualita dell'agente.

Vincoli di qualita:
- italiano naturale;
- niente contraddizioni tra stile e comportamento;
- evitare istruzioni troppo generiche;
- includere almeno 3 "se succede X, allora fai Y".

Non generare l'output fino a che non ti vengono passate tutte le informazioni <DATO>
```

### 2.4 Checklist rapida prima dell'uso

Prima di considerare finito un agente, verifica:

- lo scopo e espresso in una frase chiara;
- sono presenti stile + comportamento + limiti;
- c'e almeno una regola per gestire richieste ambigue;
- se usa file locali, il path e corretto;
- non ci sono istruzioni in conflitto;
- la lunghezza e proporzionata (non troppo lunga);
- l'agente produce risposte coerenti in 2-3 test reali;
- se locale, il file e nel percorso `.github/agents/`.

### 2.5 Mini workflow consigliato

1. Parti da un agente locale minimale.
2. Testalo su 3 richieste reali.
3. Raffina istruzioni vaghe.
4. Se il comportamento ti serve ovunque, crea anche una versione globale.

Con questa impostazione hai una base solida, semplice da evolvere e da condividere.

## Parte 3) File `.instructions.md` (istruzioni specifiche per file o cartella)

I file `.instructions.md` completano `copilot-instructions.md` permettendo di definire regole mirate a specifici tipi di file o cartelle, invece di regole valide per tutto il repository.

### 3.1 A cosa serve

Usa i file `.instructions.md` quando vuoi che Copilot applichi regole diverse in base al file su cui sta lavorando. Esempi:

- regole di commento solo per i file `.js`;
- convenzioni sui nomi solo per i componenti in `src/components/`;
- vincoli di stile diversi per test rispetto al codice produttivo.

### 3.2 Dove si mettono

I file `.instructions.md` vanno dentro `.github/instructions/` e possono essere organizzati in sottocartelle.

```
.github/
└── instructions/
    ├── JSComment.instructions.md     ← regole per tutti i file .js
    ├── CSS.instructions.md           ← regole per i file .css
    └── components.instructions.md   ← regole per src/components/
```

### 3.3 Formato obbligatorio: il frontmatter `applyTo`

Ogni file deve iniziare con un blocco frontmatter che specifica a quali file si applica, usando la sintassi glob:

```md
---
applyTo: '**/*.js'
---

Ogni variabile dichiarata con let o const deve avere un commento inline...
```

Esempi di pattern glob comuni:

| Pattern | Si applica a |
|---|---|
| `**/*.js` | tutti i file `.js` nel repository |
| `src/**/*.js` | file `.js` solo dentro `src/` |
| `**/*.js,**/*.ts` | file `.js` e `.ts` |
| `**` | tutti i file |

### 3.4 Differenza con `copilot-instructions.md`

| | `copilot-instructions.md` | `.instructions.md` |
|---|---|---|
| Ambito | tutto il repository | solo i file che corrispondono al glob |
| Numero di file | uno solo | illimitati |
| Frontmatter | non necessario | obbligatorio (`applyTo`) |
| Uso tipico | convenzioni generali, stack, comandi | regole per linguaggio o cartella specifica |

### 3.5 Esempio in questo repository

- [.github/instructions/JSComment.instructions.md](.github/instructions/JSComment.instructions.md)
  Applica le regole sui commenti alle variabili a tutti i file `.js` del progetto.

## Parte 4) Skill Copilot

Le skill sono cartelle di istruzioni che Copilot carica **solo quando sono rilevanti**, cioè solo quando il contesto della richiesta lo richiede. A differenza delle istruzioni (sempre attive), una skill viene usata su richiesta.

### 4.1 Struttura di una skill

Ogni skill è una sottocartella dentro `.github/skills/` con un file obbligatorio `SKILL.md`:

```
.github/
└── skills/
    ├── js-strict-check/
    │   └── SKILL.md
    └── js-feedback-checklist/
        └── SKILL.md
```

Il file `SKILL.md` ha un frontmatter YAML con due campi obbligatori:

- `name`: identificatore univoco, minuscolo con trattini;
- `description`: spiega cosa fa la skill e **quando Copilot deve usarla** (questa frase è fondamentale: è ciò che Copilot legge per decidere se attivare la skill).

### 4.2 Esempi in questo repository

Nel repository `vscode-copilot-guide` sono presenti 2 skill:

#### 4.2.1 js-strict-check

- [.github/skills/js-strict-check/SKILL.md](.github/skills/js-strict-check/SKILL.md)
  Si attiva quando chiedi di controllare o revisionare un file `.js` per verificare la presenza di `'use strict'` e dei punto-virgola obbligatori.

Esempio di prompt che la attiva:

- "Puoi controllare questo file JS?"
- "Revisiona `fizzbuzz.js` e dimmi se è scritto correttamente."

#### 4.2.2 js-feedback-checklist

- [.github/skills/js-feedback-checklist/SKILL.md](.github/skills/js-feedback-checklist/SKILL.md)
  Si attiva quando chiedi un feedback didattico su una soluzione studente senza mostrare la soluzione completa.

Esempio di prompt che la attiva:

- "Dammi feedback logico su questa soluzione JS."
- "Puoi guidarmi nella correzione senza darmi codice pronto?"

### 4.3 Fonti utili

- GitHub Docs: "Creating agent skills for GitHub Copilot"
  https://docs.github.com/en/copilot/how-tos/use-copilot-agents/coding-agent/create-skills
- VS Code Docs: "Use Agent Skills in VS Code"
  https://code.visualstudio.com/docs/copilot/customization/agent-skills

### 4.4 Differenza pratica: Skill vs `.instructions.md`

Entrambi personalizzano Copilot, ma con obiettivi diversi:

- `.instructions.md`: regole sempre attive sui file che corrispondono a `applyTo`.
- `SKILL.md`: capacita specializzata caricata quando la richiesta e pertinente (o invocata da slash command).

Quando scegliere uno o l'altro:

- regole stabili di stile, naming e convenzioni file-based -> `.instructions.md`
- workflow riusabili, checklist operative, procedure multi-step -> `SKILL.md`

## Parte 5) Prompt Files (`.prompt.md`)

I Prompt Files sono file Markdown invocabili manualmente come comandi slash in chat (es. `/html-bootstrap-scaffold`).

Sono utili quando vuoi automatizzare un task singolo e ripetibile, senza creare un agente completo o una skill complessa.

### 5.1 Dove si mettono

Per prompt di workspace usa la cartella:

- `.github/prompts/`

### 5.2 Formato base

Un prompt file usa estensione `.prompt.md` e puo avere frontmatter YAML opzionale.

Campi utili piu comuni:

- `name`: nome del comando slash;
- `description`: descrizione breve del task;
- `argument-hint`: suggerimento parametri nella chat;
- `agent`: agente da usare per quel prompt;
- `tools`: lista tool consentiti per quel prompt.





### 5.3 Esempi in questo repository

Nel repository `vscode-copilot-guide` è presente un prompt:

#### 5.3.1 html-bootstrap-scaffold.prompt.md

- [.github/prompts/html-bootstrap-scaffold.prompt.md](.github/prompts/html-bootstrap-scaffold.prompt.md)
  Crea uno scaffold base di progetto web con `index.html`, `styles/index.css` e `scripts/index.js`, gia collegati e pronti all'uso con Bootstrap 5.3.8.

### 5.3.2 Uso rapido in chat

- Digita `/html-bootstrap-scaffold`
- Oppure apri il file prompt e usa il pulsante Play nell'editor.

### 5.4 Fonte ufficiale

- VS Code Docs: "Use prompt files in VS Code"
  https://code.visualstudio.com/docs/copilot/customization/prompt-files

## Parte 6) Confronto: Agenti vs Istruzioni vs Skill vs Prompt Files

| | `copilot-instructions.md` | `.instructions.md` | `.agent.md` | `SKILL.md` | `.prompt.md` |
|---|---|---|---|---|---|
| Quando si attiva | sempre, su ogni richiesta | sempre, sui file che corrispondono al glob | solo quando selezioni l'agente | solo quando la richiesta e pertinente | solo quando lanci il comando slash |
| Scopo | regole generali del repo | regole per tipo di file o cartella | persona specializzata con comportamento fisso | procedura step-by-step per un task specifico | task singolo riusabile in chat |
| Formato | Markdown libero | Markdown con frontmatter `applyTo` | Markdown libero | Markdown con frontmatter `name` + `description` | Markdown con estensione `.prompt.md` (+ frontmatter opzionale) |
| Percorso | `.github/copilot-instructions.md` | `.github/instructions/NOME.instructions.md` | `.github/agents/NOME.agent.md` | `.github/skills/NOME/SKILL.md` | `.github/prompts/NOME.prompt.md` |
| Esempio in questo repo | `.github/copilot-instructions.md` | `JSComment.instructions.md` | `.github/agents/Booligan.agent.md` | `js-strict-check/SKILL.md`<br/>`js-feedback-checklist/SKILL.md` | `.github/prompts/html-bootstrap-scaffold.prompt.md` |
| Esempio didattico consigliato | policy progetto | regole mirate per tipo file | tutor con ruolo fisso | `js-feedback-checklist/SKILL.md` | `html-bootstrap-scaffold.prompt.md` |

### Regola pratica per scegliere

- Hai una convenzione valida per tutto il repo? → `copilot-instructions.md`
- Hai una regola valida solo per certi file? → `.instructions.md`
- Vuoi un assistente con un ruolo fisso e uno stile definito? → `.agent.md`
- Hai una procedura dettagliata usata solo in certi momenti? → `SKILL.md`
- Vuoi un comando slash per un task ricorrente e veloce? → `.prompt.md`
- Se il task richiede input espliciti e output prevedibile in aula, preferisci `.prompt.md` (anche insieme a `SKILL.md`)