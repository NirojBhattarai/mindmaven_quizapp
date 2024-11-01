document.addEventListener("DOMContentLoaded", () => {
  const quizContainer = document.getElementById("quiz-container");
  const questionContainer = document.getElementById("question-container");
  const questionText = document.getElementById("question-text");
  const choicesList = document.getElementById("choices-list");
  const nextButton = document.getElementById("next-btn");
  const resultContainer = document.getElementById("result-container");
  const score = document.getElementById("score");
  const restartButton = document.getElementById("restart-btn");
  const startButton = document.getElementById("start-btn");

  const questions = [
    {
      question: "Which is the Capital City of Nepal ?",
      choices: ["Kathmandu", "Ilam", "Birgunj", "Pokhara"],
      answer: "Kathmandu",
    },
    {
      question: "Which is the most watched sports in the world ?",
      choices: ["Cricket", "Boxing", "Football", "Golf"],
      answer: "Football",
    },
    {
      question: "How much is the height of Mount Everest in feet ?",
      choices: ["29032", "29023", "29320", "29203"],
      answer: "29032",
    },
  ];
});
