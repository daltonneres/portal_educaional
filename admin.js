const alunos = [
  { nome: "Ana Silva", email: "ana@email.com", trilha: "Front-End", progresso: "80%", quizzes: 3 },
  { nome: "Bruno Souza", email: "bruno@email.com", trilha: "React", progresso: "60%", quizzes: 1 },
  { nome: "Carla Pereira", email: "carla@email.com", trilha: "Node.js", progresso: "40%", quizzes: 0 },
  { nome: "Diego Costa", email: "diego@email.com", trilha: "Python", progresso: "90%", quizzes: 4 },
  { nome: "Eduardo Lima", email: "eduardo@email.com", trilha: "Marketing", progresso: "70%", quizzes: 2 }
];

const totalAlunos = document.getElementById("totalAlunos");
const totalTrilhas = document.getElementById("totalTrilhas");
const totalQuizzes = document.getElementById("totalQuizzes");
const tabela = document.getElementById("alunosTabela");

// Preencher tabela e KPIs
function renderAdmin() {
  tabela.innerHTML = "";
  alunos.forEach(a => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${a.nome}</td>
      <td>${a.email}</td>
      <td>${a.trilha}</td>
      <td>${a.progresso}</td>
      <td>${a.quizzes}</td>
    `;
    tabela.appendChild(tr);
  });

  totalAlunos.innerText = alunos.length;
  totalTrilhas.innerText = [...new Set(alunos.map(a => a.trilha))].length;
  totalQuizzes.innerText = alunos.reduce((acc, a) => acc + a.quizzes, 0);
}

renderAdmin();
