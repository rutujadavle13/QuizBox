const questions = [
  {
    question:
      "Which programming language is mainly used for adding interactivity to websites?",
    answers: [
      { text: "a) HTML", correct: false },
      { text: "b) CSS", correct: false },
      { text: "c) Python", correct: false },
      { text: "d) JavaScript", correct: true },
    ],
  },
  {
    question:
      "Which method is used to convert a JSON string into a JavaScript object?",
    answers: [
      { text: "a) JSON.parse()", correct: true },
      { text: "b) JSON.stringify() ", correct: false },
      { text: "c) JSON.object()", correct: false },
      { text: "d) JSON.convert()", correct: false },
    ],
  },
  {
    question:
      "What is the purpose of a front-end web development framework like React or Angular?",
    answers: [
      { text: "a) To manage databases and server-side logic", correct: false },
      {
        text: "b) To create a visually appealing user interface",
        correct: true,
      },
      { text: "c) To handle server-side routing", correct: false },
      { text: "d) To interact with web servers", correct: false },
    ],
  },
  {
    question:
      "Which part of web development is responsible for handling data storage and retrieval?",
    answers: [
      { text: "a) Front-end development", correct: false },
      { text: "b) Back-end development", correct: true },
      { text: "c) Full-stack development", correct: false },
      { text: "d) Middleware development", correct: false },
    ],
  },
  {
    question:
      "What is the primary function of a web server in the context of web development?",
    answers: [
      {
        text: "a) Rendering web pages on the client’s browser",
        correct: false,
      },
      { text: "b) Executing JavaScript code", correct: false },
      { text: "c) Storing user data", correct: false },
      {
        text: "d) Handling HTTP requests and serving web pages",
        correct: true,
      },
    ],
  },
  {
    question:
      "Which of the following is not a back-end programming language commonly used in web development?",
    answers: [
      { text: "a) PHP", correct: false },
      { text: "b) Ruby", correct: false },
      { text: "c) Java", correct: false },
      { text: "d) HTML", correct: true },
    ],
  },
  {
    question:
      "What is the correct syntax for creating a CSS class called “highlight” with a red text color?",
    answers: [
      { text: "a) .highlight { color: red; }", correct: true },
      { text: "b) highlight { text-color: red; }", correct: false },
      { text: "c) .highlight { text-color: red; }", correct: false },
      { text: "d) highlight { color: red; }", correct: false },
    ],
  },
  {
    question:
      "Which CSS property is used to control the spacing between elements in a layout?",
    answers: [
      { text: "a) padding", correct: false },
      { text: "b) margin", correct: true },
      { text: "c) spacing", correct: false },
      { text: "d) border", correct: false },
    ],
  },
  {
    question:
      " Which of the following is a popular front-end development framework maintained by Google?",
    answers: [
      { text: "a) React", correct: false },
      { text: "b) Django", correct: false },
      { text: "c) Vue.js", correct: false },
      { text: "d) Angular", correct: true },
    ],
  },
  {
    question:
      "Which of the following is a server-side scripting language commonly used for web development?",
    answers: [
      { text: "a) HTML", correct: false },
      { text: "b) CSS", correct: false },
      { text: "c) Python", correct: true },
      { text: "d) JavaScript", correct: false },
    ],
  },
  {
    question:
      "Which of the following is used to store and query data in a tabular format in web development?",
    answers: [
      { text: "a) Database", correct: true },
      { text: "b) API", correct: false },
      { text: "c) JSON", correct: false },
      { text: "d) XML", correct: false },
    ],
  },
  {
    question:
      "Which JavaScript function is used to change the content of an HTML element?",
    answers: [
      { text: "a) modify()", correct: false },
      { text: "b) change()", correct: false },
      { text: "c) update()", correct: false },
      { text: "d) innerHTML()", correct: true },
    ],
  },
  {
    question:
      "Which HTTP method is typically used to retrieve data from a web server?",
    answers: [
      { text: "a) GET", correct: true },
      { text: "b) POST", correct: false },
      { text: "c) PUT", correct: false },
      { text: "d) DELETE", correct: false },
    ],
  },
  {
    question:
      "Which of the following is an example of a front-end web development framework/library?",
    answers: [
      { text: "a) Express.js", correct: false },
      { text: "b) Django", correct: false },
      { text: "c) Flask", correct: false },
      { text: "d) React.js", correct: true },
    ],
  },
  {
    question: " What is the purpose of the “cookie” in web development?",
    answers: [
      {
        text: "a) To store data on the client’s browser for future use",
        correct: true,
      },
      {
        text: "b) To encrypt sensitive information during transmission",
        correct: false,
      },
      {
        text: "c) To handle server-side logic",
        correct: false,
      },

      {
        text: "d) To create user authentication systems",
        correct: false,
      },
    ],
  },
  {
    question: "Whats so great about XML?",
    answers: [
      { text: "a) Easy data exchange", correct: false },
      { text: "b) High speed on network", correct: false },
      { text: "c) Only B.is correct", correct: false },
      { text: "d) Both A & B", correct: true },
    ],
  },
  {
    question: "What are meta tags used for?",
    answers: [
      {
        text: "a) To store information usually relevant to browsers and search engines",
        correct: true,
      },
      {
        text: "b) To only store information usually relevant to browsers",
        correct: false,
      },
      {
        text: "c) To only store information about search engines",
        correct: false,
      },
      { text: "d) TO store information about external links", correct: false },
    ],
  },
  {
    question: "How to create a Date object in JavaScript?",
    answers: [
      { text: "a) dateObjectName = new Date([parameters])", correct: true },
      { text: "b) dateObjectName.new Date([parameters])", correct: false },
      { text: "c) dateObjectName := new Date([parameters])", correct: false },
      { text: "d) dateObjectName Date([parameters])", correct: false },
    ],
  },
  {
    question:
      "The _______ method of an Array object adds and/or removes elements from an array.",
    answers: [
      { text: "a) Reverse", correct: false },
      { text: "b) Shift", correct: false },
      { text: "c) Slice", correct: false },
      { text: "d) Splice", correct: true },
    ],
  },
  {
    question: "Who is making the Web standardsr?",
    answers: [
      { text: "a) Mozilla", correct: false },
      { text: "b) Microsoft", correct: false },
      { text: "c) The World Wide Web Consortium", correct: true },
      { text: "d) NVDIA", correct: false },
    ],
  },
];

const questionElement = document.getElementById("questions");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();

  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}
function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";

  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });

  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
