function toggleMode() {
    const body = document.body;
    body.classList.toggle('dark')}

  function toggleMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode')}

  function toggleMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
  }

const text = "Olá, sejam bem vindos!<br> Sou desenvolvedora de software, a seguir <br> terão algumas informações sobre mim."
let index = 0;
const speed = 100; // Velocidade da escrita (em milissegundos)

function typeWriter() {
    if (index < text.length) {
        // Adiciona o caractere atual, trocando o <br> por uma quebra de linha real no HTML
        document.getElementById("about-text").innerHTML += text.charAt(index) === "<" && text.substr(index, 4) === "<br>"
            ? "<br>"
            : text.charAt(index);
        
        // Pula 4 caracteres quando o <br> é encontrado
        if (text.substr(index, 4) === "<br>") {
            index += 4;
        } else {
            index++;
        }

        setTimeout(typeWriter, speed); // Chama a função novamente para escrever o próximo caractere
    }
}

// Inicia o efeito de escrever sozinho quando a página carrega
window.onload = function() {
    typeWriter();
};

document.querySelectorAll('.links').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetID = this.getAttribute('href');
        const targetSection = document.querySelector(targetID);

        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

