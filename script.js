

let questions=[
  {
    "question": "Was ist der Datentyp von NaN in JavaScript?",
    "answers": [
      "Number",
      "Integer",
      "Float",
      "Numeric"
    ]
  },
  {
    "question": "Wie wird eine anonyme Funktion in JavaScript erstellt?",
    "answers": [
      "function() {}",
      "() => {}",
      "function(a, b) {}",
      "function named() {}"
    ]
  },
  {
    "question": "Was gibt 'typeof null' in JavaScript zurück?",
    "answers": [
      "object",
      "null",
      "undefined",
      "function"
    ]
  },
  {
    "question": "Welcher Operator wird verwendet, um den Rest einer Division zu berechnen?",
    "answers": [
      "%",
      "mod",
      "remainder",
      "div"
    ]
  },
  {
    "question": "Wie nennt man den Mechanismus, bei dem JavaScript Variablendeklarationen an den Anfang des Scopes verschiebt?",
    "answers": [
      "Hoisting",
      "Lifting",
      "Elevation",
      "Upwarding"
    ]
  },
  {
    "question": "Was ist der Zweck von 'use strict' in JavaScript?",
    "answers": [
      "Es erzwingt einen strengeren Modus zur Fehlererkennung.",
      "Es deaktiviert alle globalen Variablen zur Fehlererkennung.",
      "Es optimiert den Code für höhere Geschwindigkeit.",
      "Es macht den Code kompatibel mit älteren Browsern."
    ]
  },
  {
    "question": "Welche Array-Methode transformiert jedes Element in einem Array und gibt ein neues Array zurück?",
    "answers": [
      "map()",
      "forEach()",
      "filter()",
      "reduce()"
    ]
  },
  {
    "question": "Was gibt die Methode JSON.stringify() zurück?",
    "answers": [
      "Einen JSON-String",
      "Ein JSON-Objekt",
      "Ein JSON-Array",
      "Einen regulären String ohne Formatierung"
    ]
  },
  {
    "question": "Wie nennt man eine Funktion, die sich selbst sofort aufruft?",
    "answers": [
      "IIFE (Immediately Invoked Function Expression)",
      "SIF (Self-invoking function)",
      "Callback",
      "Recursive function"
    ]
  },
  {
    "question": "Was bedeutet 'Closure' in JavaScript?",
    "answers": [
      "Eine Funktion behält Zugriff auf Variablen ihres äußeren Scopes, selbst nachdem dieser abgeschlossen ist.",
      "Eine Funktion, die Parameter sammelt und dann einen Wert zurückgibt.",
      "Eine Funktion, die rekursiv aufgerufen wird.",
      "Ein anderer Begriff für Objektorientierung."
    ]
  },

  {
    "question": "Was macht die Funktion parseInt() in JavaScript?",
    "answers": [
      "Sie wandelt einen String in eine Ganzzahl um.",
      "Sie wandelt einen String in eine Fließkommazahl um.",
      "Sie parst einen JSON-String in ein Objekt.",
      "Sie formatiert eine Zahl als String."
    ]
  },
  {
    "question": "Welche Methode fügt ein Element am Ende eines Arrays hinzu?",
    "answers": [
      "push()",
      "pop()",
      "shift()",
      "unshift()"
    ]
  },
  {
    "question": "Was ist das Ergebnis von typeof [] in JavaScript?",
    "answers": [
      "object",
      "array",
      "liste",
      "undefined"
    ]
  },
  {
    "question": "Welches Schlüsselwort wird verwendet, um eine Konstante in JavaScript zu deklarieren?",
    "answers": [
      "const",
      "let",
      "var",
      "static"
    ]
  },
  {
    "question": "Wie erstellt man ein neues Promise in JavaScript?",
    "answers": [
      "new Promise((resolve, reject) => {})",
      "Promise.create((resolve, reject) => {})",
      "new Promise.resolve()",
      "Promise.then((resolve, reject) => {})"
    ]
  },
  {
    "question": "Was bewirkt der Spread Operator '...' in einem Array?",
    "answers": [
      "Er erweitert ein Array in seine einzelnen Elemente.",
      "Er kombiniert zwei Arrays zu einem.",
      "Er filtert Elemente aus einem Array heraus.",
      "Er sortiert ein Array in aufsteigender Reihenfolge."
    ]
  },
  {
    "question": "Wie greift man auf das Prototyp eines Objekts in JavaScript zu?",
    "answers": [
      "Object.getPrototypeOf(obj)",
      "obj.prototype",
      "obj.getPrototype()",
      "Prototype(obj)"
    ]
  },
  {
    "question": "Worauf bezieht sich 'this' in einer regulären Funktion (nicht einer Arrow-Funktion)?",
    "answers": [
      "Auf das Objekt, das die Funktion aufgerufen hat.",
      "Auf das globale Objekt (window).",
      "Auf den Kontext der übergeordneten Funktion.",
      "Auf 'undefined'."
    ]
  },
  {
    "question": "Was ist das Ergebnis von [1, 2, 3].map(x => x * 2)?",
    "answers": [
      "[2, 4, 6]",
      "[1, 2, 3, 6]",
      "[1, 4, 9]",
      "2, 4, 6"
    ]
  },
  {
    "question": "Welche Methode wird verwendet, um ein JavaScript-Objekt in einen JSON-String umzuwandeln?",
    "answers": [
      "JSON.stringify()",
      "JSON.parse()",
      "JSON.convert()",
      "JSON.toString()"
    ]
  }
]

const permutationsArray = [
    [3, 1, 2, 0],
    [0, 2, 3, 1],
    [1, 0, 3, 2],
    [1, 2, 0, 3],
    [2, 0, 1, 3],
    [3, 2, 1, 0],
    [3, 0, 2, 1],
    [2, 3, 0, 1],
    [1, 3, 0, 2],
    [2, 1, 3, 0]
  ];
  
let permutationsCounter = 0;

function showResult(){
    let resultIn = document.getElementById("result");
    resultIn.classList.remove("result-out")
    resultIn. classList.add("result-in");

    // let overlayOn =document.getElementById("body");
    // overlayOn.classList.add("overlay");
}

function hideResult(){
    let resultOut = document.getElementById("result");
    resultOut.classList.remove("result-in")
    resultOut. classList.add("result-out");

    // let overlayOff =document.getElementById("body");
    // overlayOff.classList.remove("overlay");
}
 function startQuizz(index){
    showQuestion(index);
    showAnswer(index);
 }

function showQuestion(index){
    let showQuestion = document.getElementById("questionSection");
    showQuestion.innerHTML = ""
    showQuestion.innerHTML = showQuestionTemplate(index);
}

function showQuestionTemplate(index) {
    return `
      <h2>${index + 1}. Frage:</h2>
      <p>${questions[index].question}</p>
    `;
  }

  function showAnswer(index){
    let showAnswer = document.getElementById("answerSection");

    showAnswer.innerHTML =""
    showAnswer.innerHTML += showAnswerTemplate(index);
    permutationsCounter = permutationsCounter < permutationsArray.length - 1 ? permutationsCounter + 1 : 0;
  }

  function showAnswerTemplate(index){
    permutationList = permutationsArray[permutationsCounter]
    let buttons=""

    for (let i = 0; i < 4; i++) {
      let answerIndex = permutationList[i];
      buttons += `<button id="button${answerIndex}" onclick="checkAnswer(${answerIndex})">${questions[index].answers[answerIndex]}</button>`;
    }

    return `
    <div class="answer">${buttons}</div>
    <div class="nav-menu">
        <button onclick="showResult()">Result</button>
        <button onclick="nextQuestion(${index})">Next</button>
    </div>
    `;
    }

  function pointCounter(){

  }

  function checkAnswer(i) {
    if (i === 0) {
      let greenButton = document.getElementById("button" + i);
      greenButton.classList.add("greenButton")
    } else {
      let redButton = document.getElementById("button" + i);
      redButton.classList.add("redButton")
    }
}

function nextQuestion(index){
    let newIndex = index < questions.length - 1 ? index + 1 : 0;   
    startQuizz(newIndex);
}

function nextPermutation(index){
    let newIndex = index < permutation.length - 1 ? index + 1 : 0;   
    return newIndex;
}

