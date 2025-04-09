let questions= [
  {
    "question": "Was ist der Datentyp von NaN in JavaScript?",
    "answers": ["Number", "Integer", "Float", "Numeric"],
    "points": 15
  },
  {
    "question": "Wie wird eine anonyme Funktion in JavaScript erstellt?",
    "answers": ["function() {}", "() => {}", "function(a, b) {}", "function named() {}"],
    "points": 10
  },
  {
    "question": "Was gibt 'typeof null' in JavaScript zurück?",
    "answers": ["object", "null", "undefined", "function"],
    "points": 15
  },
  {
    "question": "Welcher Operator wird verwendet, um den Rest einer Division zu berechnen?",
    "answers": ["%", "mod", "remainder", "div"],
    "points": 10
  },
  {
    "question": "Wie nennt man den Mechanismus, bei dem JavaScript Variablendeklarationen an den Anfang des Scopes verschiebt?",
    "answers": ["Hoisting", "Lifting", "Elevation", "Upwarding"],
    "points": 15
  },
  {
    "question": "Was ist der Zweck von 'use strict' in JavaScript?",
    "answers": ["Es erzwingt einen strengeren Modus zur Fehlererkennung.", "Es deaktiviert alle globalen Variablen zur Fehlererkennung.", "Es optimiert den Code für höhere Geschwindigkeit.", "Es macht den Code kompatibel mit älteren Browsern."],
    "points": 20
  },
  {
    "question": "Welche Array-Methode transformiert jedes Element in einem Array und gibt ein neues Array zurück?",
    "answers": ["map()", "forEach()", "filter()", "reduce()"],
    "points": 15
  },
  {
    "question": "Was gibt die Methode JSON.stringify() zurück?",
    "answers": ["Einen JSON-String", "Ein JSON-Objekt", "Ein JSON-Array", "Einen regulären String ohne Formatierung"],
    "points": 10
  },
  {
    "question": "Wie nennt man eine Funktion, die sich selbst sofort aufruft?",
    "answers": ["IIFE (Immediately Invoked Function Expression)", "SIF (Self-invoking function)", "Callback", "Recursive function"],
    "points": 20
  },
  {
    "question": "Was bedeutet 'Closure' in JavaScript?",
    "answers": ["Eine Funktion behält Zugriff auf Variablen ihres äußeren Scopes, selbst nachdem dieser abgeschlossen ist.", "Eine Funktion, die Parameter sammelt und dann einen Wert zurückgibt.", "Eine Funktion, die rekursiv aufgerufen wird.", "Ein anderer Begriff für Objektorientierung."],
    "points": 25
  },
  {
    "question": "Was bewirkt 'Array.prototype.filter()'?",
    "answers": ["Gibt ein neues Array mit allen Elementen zurück, die eine Bedingung erfüllen.", "Filtert ein Array und verändert es direkt.", "Löscht alle falschen Elemente aus dem Array.", "Sortiert das Array in aufsteigender Reihenfolge."],
    "points": 20
  },
  {
    "question": "Wie deklariert man eine Konstante in JavaScript?",
    "answers": ["const x = 5;", "let x = 5;", "var x = 5;", "static x = 5;"],
    "points": 10
  },
  {
    "question": "Was ist der Unterschied zwischen 'let' und 'var'?",
    "answers": ["let hat Blockscope, var nicht.", "var ist moderner als let.", "let kann mehrfach deklariert werden.", "let funktioniert nur in Funktionen."],
    "points": 15
  },
  {
    "question": "Welche Methode ruft eine Funktion einmal pro Element in einem Array auf?",
    "answers": ["forEach()", "map()", "reduce()", "filter()"],
    "points": 10
  },
  {
    "question": "Wie kann man die Länge eines Arrays ermitteln?",
    "answers": ["array.length", "array.size", "array.count()", "array.length()"],
    "points": 10
  },
  {
    "question": "Welche Vergleichsoperatoren prüfen auch den Typ?",
    "answers": ["===", "==", "=>", "=<"],
    "points": 10
  },
  {
    "question": "Wie kann man einen zufälligen Wert aus einem Array auswählen?",
    "answers": ["array[Math.floor(Math.random() * array.length)]", "array[random()]", "array.pick()", "array.shuffle()[0]"],
    "points": 20
  },
  {
    "question": "Was ist ein Callback in JavaScript?",
    "answers": ["Eine Funktion, die als Argument an eine andere Funktion übergeben wird.", "Eine Methode zum Zurückrufen von Daten aus einer API.", "Eine spezielle Art von Eventlistener.", "Ein Fehlerbehandlungsmechanismus."],
    "points": 20
  },
  {
    "question": "Was gibt 'typeof []' zurück?",
    "answers": ["object", "array", "list", "undefined"],
    "points": 15
  },
  {
    "question": "Welches Schlüsselwort wird verwendet, um eine Funktion zu exportieren?",
    "answers": ["export", "module", "public", "expose"],
    "points": 10
  },
  {
    "question": "Wie lässt sich eine Zahl in einen String umwandeln?",
    "answers": ["String(123)", "parseInt('123')", "toNumber('123')", "int('123')"],
    "points": 10
  },
  {
    "question": "Welche Methode entfernt das letzte Element eines Arrays?",
    "answers": ["pop()", "shift()", "remove()", "cut()"],
    "points": 10
  },
  {
    "question": "Wie kann man überprüfen, ob eine Variable ein Array ist?",
    "answers": ["Array.isArray(var)", "var instanceof Array", "typeof var === 'array'", "var.isArray()"],
    "points": 20
  },
  {
    "question": "Wie kann man alle Elemente eines Arrays zu einem String verbinden?",
    "answers": ["join()", "concat()", "combine()", "merge()"],
    "points": 15
  },
  {
    "question": "Wie erstellt man ein Objekt in JavaScript?",
    "answers": ["let obj = {}", "let obj = []", "let obj = new Array()", "let obj = createObject()"],
    "points": 10
  },
  {
    "question": "Was gibt 'typeof undefined' zurück?",
    "answers": ["undefined", "null", "object", "string"],
    "points": 10
  },
  {
    "question": "Was bedeutet 'event bubbling'?",
    "answers": ["Ein Ereignis steigt vom Ziel-Element zur Wurzel auf.", "Ein Ereignis bleibt nur auf dem Ziel-Element.", "Ein Ereignis startet bei der Wurzel und geht zum Ziel.", "Ein Ereignis wird automatisch gestoppt."],
    "points": 25
  },
  {
    "question": "Was macht 'setTimeout()'?",
    "answers": ["Führt eine Funktion nach einer Verzögerung aus.", "Wiederholt eine Funktion regelmäßig.", "Beendet eine laufende Funktion.", "Wartet synchron vor Ausführung."],
    "points": 20
  },
  {
    "question": "Wie kann man einen Event Listener entfernen?",
    "answers": ["removeEventListener()", "detachListener()", "deleteEvent()", "event.remove()"],
    "points": 15
  },
  {
    "question": "Wie prüft man, ob zwei Werte exakt gleich sind (inkl. Typ)?",
    "answers": ["===", "==", "equals()", "typeof ==="],
    "points": 10
  }
];

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
let resultCounter = 0;
let userResultCounter = 0;

function showResult(){
    let resultIn = document.getElementById("result");
    resultIn.classList.remove("result-out")
    resultIn. classList.add("result-in");

    let resultShow = document.getElementById("showResult")
    resultShow.innerHTML = showResultTemplate()
}

function hideResult(){
  let resultOut = document.getElementById("result");
  resultOut.classList.remove("result-in")
  resultOut. classList.add("result-out");
}

function showResultTemplate(){
  let showResult = document.getElementById("showResult");
  showResult ="";

  return`
        <tr>
          <td>Aktuelle Punkte:</td>
        </tr>
        <tr>
          <td>${userResultCounter} von ${resultCounter}</td>
        </tr>
  `
}

function startQuizz(index){
  showQuestion(index);
  showAnswer(index);
}

function showQuestion(index){
    let showQuestion = document.getElementById("questionSection");
    showQuestion.innerHTML = ""
    showQuestion.innerHTML = showQuestionTemplate(index);
    resultCounter += questions[index].points
}

function showQuestionTemplate(index) {
    return `
      <h2>${index + 1}. Frage:</h2>
      <p>${questions[index].question}</p>
      <p>Punkte: ${questions[index].points}</p>
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
    buttons += `<button id="button${answerIndex}" onclick="checkAnswer(${answerIndex},${index})">${questions[index].answers[answerIndex]}</button>`;
  }

  return `
  <div class="answer">${buttons}</div>
  <div class="nav-menu">
      <button onclick="showResult()">Result</button>
      <button onclick="nextQuestion(${index})">Next</button>
  </div>
  `;
}

function checkAnswer(i, index) {
  for (let j = 0; j < 4; j++) {
    document.getElementById("button" + j).disabled = true;
  }

  if (i === 0) {
    let greenButton = document.getElementById("button" + i);
    greenButton.classList.add("greenButton");
    userResultCounter += questions[index].points;
  } else {
    let redButton = document.getElementById("button" + i);
    redButton.classList.add("redButton")
    document.getElementById("button" + 0).classList.add("greenButton");
  }

  if (index === questions.length - 1) {
    setTimeout(() => {
      showFinalResult();
    }, 1000); 
  }
}

function nextQuestion(index){
    let newIndex = index < questions.length - 1 ? index + 1 : 0;   
    startQuizz(newIndex);
    hideResult();
}

function nextPermutation(index){
    let newIndex = index < permutation.length - 1 ? index + 1 : 0;   
    return newIndex;
}

function showFinalResult() {
  let answerSection = document.getElementById("answerSection");

  answerSection.innerHTML = `
    <div class="result-box">
      <h2>Quiz beendet!</h2>
      <p>Dein Ergebnis: <strong>${userResultCounter} Punkte</strong> von maximal ${resultCounter} Punkten</p>
      <button onclick="restartQuiz()">Nochmal spielen</button>
    </div>
  `;
}

function restartQuiz() {
  resultCounter = 0;
  userResultCounter = 0;
  permutationsCounter = 0;
  startQuizz(0); 
}