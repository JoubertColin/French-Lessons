// Caixa de resposta

function enviarResposta() {
  const resposta = document.getElementById('resposta').value;
  if (resposta.trim() === "") {
    alert("Por favor, digite uma resposta.");
  } else {
    alert("Você respondeu: " + resposta);
  }
}


// Transformar o texto em áudio

const imagens = document.querySelectorAll('.img-audio');
let audioAtual = null; // guarda o áudio que está tocando

imagens.forEach(imagem => {
  imagem.addEventListener('click', () => {
    const srcAudio = imagem.getAttribute('data-audio');

    // Se já existe áudio tocando
    if (audioAtual && !audioAtual.paused) {
      audioAtual.pause(); // pausa
      audioAtual.currentTime = 0; // opcional: reinicia do início
      audioAtual = null;
    } else {
      // Cria e toca o novo áudio
      audioAtual = new Audio(srcAudio);
      audioAtual.play();
    }
  });
});


// QUIZ

let pontos = 0;

function verificarResposta(idInput) {
  const input = document.getElementById(idInput);
  const correta = input.dataset.correta.trim().toLowerCase();
  const resposta = input.value.trim().toLowerCase();
  const feedback = document.getElementById("fb" + idInput.replace("resp", ""));

  if (resposta === correta && resposta !== "") {
    feedback.textContent = "✔";
    feedback.className = "feedback certo";
  } else {
    feedback.textContent = "✘";
    feedback.className = "feedback errado";
  }
}
