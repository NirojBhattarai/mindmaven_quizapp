document.addEventListener("DOMContentLoaded", () => {
  const questionContainer = document.getElementById("question-container");
  const questionText = document.getElementById("question-text");
  const choicesList = document.getElementById("choices-list");
  const nextButton = document.getElementById("next-btn");
  const resultContainer = document.getElementById("result-container");
  const scoreDisplay = document.getElementById("score");
  const restartButton = document.getElementById("restart-btn");
  const startButton = document.getElementById("start-btn");

  const questions = [
    {
      question: "Which is the Capital City of Nepal?",
      choices: ["Kathmandu", "Ilam", "Birgunj", "Pokhara"],
      answer: "Kathmandu",
    },
    {
      question: "Which is the most watched sport in the world?",
      choices: ["Cricket", "Boxing", "Football", "Golf"],
      answer: "Football",
    },
    {
      question: "How much is the height of Mount Everest in feet?",
      choices: ["29032ft", "29023ft", "29320ft", "29203ft"],
      answer: "29032ft",
    },
    {
      question: "What is the national flower of Nepal?",
      choices: ["Sunflower", "Rose", "Lotus", "Rhododendron"],
      answer: "Rhododendron",
    },
    {
      question: "Which planet is known as the Red Planet?",
      choices: ["Earth", "Venus", "Mars", "Jupiter"],
      answer: "Mars",
    },
    {
      question: "Who developed the theory of relativity?",
      choices: [
        "Isaac Newton",
        "Albert Einstein",
        "Galileo Galilei",
        "Nikola Tesla",
      ],
      answer: "Albert Einstein",
    },
    {
      question: "Which element has the chemical symbol 'O'?",
      choices: ["Oxygen", "Gold", "Osmium", "Oganesson"],
      answer: "Oxygen",
    },
    {
      question: "What is the smallest continent by land area?",
      choices: ["Europe", "Australia", "Antarctica", "South America"],
      answer: "Australia",
    },
    {
      question: "Who is the author of 'Romeo and Juliet'?",
      choices: [
        "William Wordsworth",
        "Charles Dickens",
        "William Shakespeare",
        "Jane Austen",
      ],
      answer: "William Shakespeare",
    },
    {
      question: "Which country is known as the Land of the Rising Sun?",
      choices: ["China", "Japan", "South Korea", "India"],
      answer: "Japan",
    },
    {
      question: "How many continents are there on Earth?",
      choices: ["5", "6", "7", "8"],
      answer: "7",
    },
    {
      question:
        "Which organ in the human body is primarily responsible for filtering blood?",
      choices: ["Heart", "Kidneys", "Lungs", "Liver"],
      answer: "Kidneys",
    },
    {
      question: "What is the currency of the United Kingdom?",
      choices: ["Dollar", "Euro", "Pound Sterling", "Yen"],
      answer: "Pound Sterling",
    },
  ];

  let currentQuestionIndex = 0;
  let score = 0;
  let selectedChoice = null;

  startButton.addEventListener("click", startQuiz);

  nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  });

  restartButton.addEventListener("click", () => {
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.classList.add("hidden");
    questionContainer.classList.remove("hidden");
    startQuiz();
  });

  function startQuiz() {
    startButton.classList.add("hidden");
    resultContainer.classList.add("hidden");
    questionContainer.classList.remove("hidden");
    showQuestion();
  }

  function showQuestion() {
    nextButton.classList.add("hidden");
    questionText.textContent = questions[currentQuestionIndex].question;
    choicesList.innerHTML = "";
    selectedChoice = null;

    questions[currentQuestionIndex].choices.forEach((choice) => {
      const li = document.createElement("li");
      li.innerHTML = `${choice}`;
      choicesList.appendChild(li);

      li.addEventListener("click", () => selectAnswer(choice, li));
    });
  }

  function selectAnswer(choice, li) {
    if (selectedChoice) {
      selectedChoice.classList.remove("selected");
    }

    li.classList.add("selected");
    selectedChoice = li;

    const correctAnswer = questions[currentQuestionIndex].answer;
    if (choice === correctAnswer) {
      score++;
    }

    nextButton.classList.remove("hidden");
  }

  function showResult() {
    questionContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");
    scoreDisplay.textContent = `${score} out of ${questions.length}`;
  }
});
