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
    feedback.textContent = "✔(U+2714 + U+FE0E)";
    feedback.className = "feedback certo";
  } else {
    feedback.textContent = "✘";
    feedback.className = "feedback errado";
  }
}

/* Resposta 

document.querySelectorAll(".resposta").forEach(botao => {
  botao.addEventListener("click", () => {
    const feedback = botao.nextElementSibling; // pega o <span> ao lado

    if (botao.dataset.correta) {
      feedback.textContent = "✔";
      feedback.className = "feedback correta";
    } else {
      feedback.textContent = "✘";
      feedback.className = "feedback errada";
    }
  });
});

document.querySelectorAll(".resposta").forEach(botao => {
  botao.addEventListener("click", () => {
    // Evita clicar várias vezes no mesmo botão
    if (botao.classList.contains("correta") || botao.classList.contains("errada")) {
      return;
    }

    if (botao.dataset.correta) {
      botao.textContent += " ✔ Correta";
      botao.classList.add("correta");
    } else {
      botao.textContent += " ✘ Errada";
      botao.classList.add("errada");
    }
  });
});*/



document.querySelectorAll(".resposta").forEach(botao => {
  botao.addEventListener("click", () => {
    // evita alterar de novo se já foi marcado
    if (botao.classList.contains("correta") || botao.classList.contains("errada")) {
      return;
    }

    if (botao.dataset.correta) {
      botao.textContent += " ✔";
      botao.classList.add("correta");
    } else {
      botao.textContent += " ✘";
      botao.classList.add("errada");
    }
  });
});


