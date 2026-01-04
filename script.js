const modal = document.getElementById("modal");
const quizForm = document.getElementById("quizForm");
const quizPerguntas = document.getElementById("quizPerguntas");
const quizTitle = document.getElementById("quizTitle");

const quizzes = {
  quiz1: [
    { q: "O que significa HTML?", a: ["Linguagem de Marcação", "Linguagem de Estilo", "Banco de Dados"], correct: 0 },
    { q: "Qual tag cria um parágrafo?", a: ["<p>", "<h1>", "<div>"], correct: 0 }
  ],
  quiz2: [
    { q: "Qual operador é usado para igualdade?", a: ["=", "==", "==="], correct: 2 },
    { q: "O que é DOM?", a: ["Documento HTML", "Documento CSS", "Documento JS"], correct: 0 }
  ]
};

function abrirQuiz(id) {
  quizPerguntas.innerHTML = "";
  quizTitle.innerText = `📝 ${id.toUpperCase()}`;
  quizzes[id].forEach((item, i) => {
    const div = document.createElement("div");
    div.innerHTML = `<p>${item.q}</p>` + item.a.map((opt, idx) => 
      `<label><input type="radio" name="q${i}" value="${idx}" required> ${opt}</label><br>`
    ).join("");
    quizPerguntas.appendChild(div);
  });
  modal.style.display = "flex";
}

function fecharModal() {
  modal.style.display = "none";
  quizForm.reset();
}

// Fechar clicando fora
window.onclick = (e) => {
  if (e.target === modal) fecharModal();
};

// Submeter quiz
quizForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const respostas = new FormData(quizForm);
  let acertos = 0;
  quizzes[quizTitle.innerText.split(" ")[1].toLowerCase()].forEach((item, i) => {
    if (parseInt(respostas.get(`q${i}`)) === item.correct) acertos++;
  });
  alert(`✅ Você acertou ${acertos} de ${quizzes[quizTitle.innerText.split(" ")[1].toLowerCase()].length} perguntas!`);
  fecharModal();
});
