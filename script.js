// Menu responsivo e personalização dos contatos do portfólio.
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
  menuToggle.textContent = isOpen ? "×" : "☰";
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menu");
    menuToggle.textContent = "☰";
  });
});

// PERSONALIZE: informe o e-mail profissional abaixo para ativar o contato.
// Exemplo: const emailProfessor = "professor@escola.edu.br";
const emailProfessor = "";

const emailLink = document.getElementById("emailLink");
if (emailProfessor.trim()) {
  emailLink.href = `mailto:${emailProfessor.trim()}`;
  emailLink.innerHTML = 'Enviar e-mail <span>↗</span>';
} else {
  emailLink.href = "#contato";
  emailLink.addEventListener("click", (event) => {
    event.preventDefault();
    alert("Para ativar este contato, edite a variável emailProfessor no arquivo script.js e informe o e-mail do professor.");
  });
}
