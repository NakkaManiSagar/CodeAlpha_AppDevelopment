let flashcards = JSON.parse(localStorage.getItem("flashcards")) || [
  { question: "What is 2 + 2?", answer: "4" },
  { question: "Capital of France?", answer: "Paris" }
];

let currentIndex = 0;

const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answer");

function displayCard(index) {
  if (flashcards.length === 0) {
    questionEl.textContent = "No cards available";
    answerEl.textContent = "";
    return;
  }
  questionEl.textContent = flashcards[index].question;
  answerEl.textContent = flashcards[index].answer;
  answerEl.style.display = "none";
}

document.getElementById("showAnswer").onclick = () => {
  answerEl.style.display = "block";
};

document.getElementById("next").onclick = () => {
  if (currentIndex < flashcards.length - 1) currentIndex++;
  displayCard(currentIndex);
};

document.getElementById("prev").onclick = () => {
  if (currentIndex > 0) currentIndex--;
  displayCard(currentIndex);
};

document.getElementById("addCard").onclick = () => {
  const question = document.getElementById("newQuestion").value;
  const answer = document.getElementById("newAnswer").value;
  if (question && answer) {
    flashcards.push({ question, answer });
    localStorage.setItem("flashcards", JSON.stringify(flashcards));
    currentIndex = flashcards.length - 1;
    displayCard(currentIndex);
  }
};

document.getElementById("deleteCard").onclick = () => {
  if (flashcards.length > 0) {
    flashcards.splice(currentIndex, 1);
    if (currentIndex > 0) currentIndex--;
    localStorage.setItem("flashcards", JSON.stringify(flashcards));
    displayCard(currentIndex);
  }
};

// Initialize first card
displayCard(currentIndex);
