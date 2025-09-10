/*/ Obter a imagem e o áudio pelos seus IDs
const imagem = document.getElementById('minhaImagem');
const audio = document.getElementById('meuAudio');

// Adicionar um listener de clique à imagem
imagem.addEventListener('click', function () {
  audio.play(); // Reproduz o áudio ao clicar na imagem
});


const imagens = document.querySelectorAll('.img-audio');

imagens.forEach(imagem => {
  imagem.addEventListener('click', () => {
    const srcAudio = imagem.getAttribute('data-audio');
    const audio = new Audio(srcAudio);
    audio.play();
  });
});*/


// Caixa de resposta


function enviarResposta() {
  const resposta = document.getElementById('resposta').value;
  if (resposta.trim() === "") {
    alert("Por favor, digite uma resposta.");
  } else {
    alert("Você respondeu: " + resposta);
  }

}
/*
// Outra maneira de transformar o texto em áudio


function parler(texte) {
  const synth = window.speechSynthesis;
  const utter = new SpeechSynthesisUtterance(texte);
  utter.lang = "fr-FR"; // francês (França)
  utter.rate = 0.75;       // Velocidade mais lenta (1 = normal)
  synth.cancel();
  synth.speak(utter);
}

document.querySelectorAll(".palavra").forEach(palavra => {
  palavra.addEventListener("mouseenter", () => {
    parler(palavra.textContent);
  });
});



// ***** outro conversor ---->>> //

let synth = window.speechSynthesis;
let voices = [];
let frenchVoice = null;

function carregarVozes() {
  voices = synth.getVoices();
  frenchVoice = voices.find(v => v.lang.toLowerCase().startsWith("fr-fr"));
}

// alguns navegadores só carregam vozes após este evento
synth.onvoiceschanged = carregarVozes;

function falar() {
  let texto = document.getElementById("texto").value;
  if (!texto) return;

  let utterance = new SpeechSynthesisUtterance(texto);
  utterance.lang = "fr-FR";
  utterance.voice = frenchVoice;
  utterance.rate = 0.9; // velocidade mais lenta para entender melhor
  synth.speak(utterance);
}


*/
// Outro conversor

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
    pontos += 1.6667;
    feedback.textContent = "✔";
    feedback.className = "feedback certo";
  } else {
    feedback.textContent = "✘";
    feedback.className = "feedback errado";
  }

  document.getElementById("pontos").textContent = pontos.toFixed(2);
}
