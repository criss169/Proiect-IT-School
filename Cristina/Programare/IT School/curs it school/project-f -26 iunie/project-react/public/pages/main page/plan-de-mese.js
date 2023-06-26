// Get all FAQ questions
const faqQuestions = document.querySelectorAll(".faq-question");

// Attach click event listeners to toggle answers
faqQuestions.forEach((question) => {
  const answer = question.nextElementSibling;
  question.addEventListener("click", () => {
    question.classList.toggle("open");
    answer.style.display = answer.style.display === "none" ? "block" : "none";
  });
});
