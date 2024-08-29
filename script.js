const quizData = [
  {
    question: "when did alpha born?",
    a: "1865",
    b: "1863",
    c: "1889",
    d: "1864",
    correct: "a",
  },
  {
    question: "which is the oldest cave in india?",
    a: "Elora",
    b: "Ajanta",
    c: "Chithanvasal",
    d: "Mahabalipuram",
    correct: "b",
    
  },
  {
    question: In which continent does india come?",
    a: "Africa",
    b: "Artic",
    c: "Asia",
    d: "Australia",
    correct: "c",
  },
  {
    question: "what is called as the "Roof of the World?",
    a: "Indira Point",
    b: "Kanchenjunga",
    c: "Pamir Knot",
    d: "none of the above",
    correct: "a",
  },
 {
    question: "which gas is the lightest?",
    a: "Helium",
    b: "Ammonia",
    c: "Oxygen",
    d: "Hydrogen",
    correct: "d",
  },
];

const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

const deselectAnswers = () => {
  answerElements.forEach((answer) => (answer.checked = false));
};

const getSelected = () => {
  let answer;
  answerElements.forEach((answerElement) => {
    if (answerElement.checked) answer = answerElement.id;
  });
  return answer;
};

const loadQuiz = () => {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionElement.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
};

loadQuiz();

submitButton.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) score+=10;
    currentQuiz++;
    if (currentQuiz < quizData.length) loadQuiz();
    else {
      quiz.innerHTML = `
            <h2>You answered ${score}/50{quizData.length} questions correctly</h2>
            <button onclick="history.go(0)">Play Again</button>
        `;
    }
  }
});
