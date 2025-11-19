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


// Aula 4


// ================== COMBINAÇÕES ==================

const combinacoes1 = [
    { linha1: 0, linha2: 1, cor: "azul" },
    { linha1: 0, linha2: 6, cor: "azul" },
    { linha1: 0, linha2: 7, cor: "azul" },
    { linha1: 0, linha2: 8, cor: "azul" },
    { linha1: 0, linha2: 9, cor: "azul" },
    { linha1: 1, linha2: 0, cor: "yellow-02" },
    { linha1: 1, linha2: 3, cor: "yellow-02" },
    { linha1: 1, linha2: 4, cor: "yellow-02" },
    { linha1: 1, linha2: 5, cor: "yellow-02" },
    { linha1: 2, linha2: 1, cor: "verde" },
    { linha1: 2, linha2: 6, cor: "verde" },
    { linha1: 2, linha2: 7, cor: "verde" },
    { linha1: 2, linha2: 8, cor: "verde" },
    { linha1: 2, linha2: 9, cor: "verde" },
    { linha1: 3, linha2: 1, cor: "roxo" },
    { linha1: 3, linha2: 6, cor: "roxo" },
    { linha1: 3, linha2: 7, cor: "roxo" },
    { linha1: 3, linha2: 8, cor: "roxo" },
    { linha1: 3, linha2: 9, cor: "roxo" },
    { linha1: 4, linha2: 0, cor: "gold" },
    { linha1: 4, linha2: 3, cor: "gold" },
    { linha1: 4, linha2: 4, cor: "gold" },
    { linha1: 5, linha2: 1, cor: "cian" },
    { linha1: 5, linha2: 5, cor: "cian" },
    { linha1: 5, linha2: 6, cor: "cian" },
    { linha1: 5, linha2: 8, cor: "cian" },
    { linha1: 6, linha2: 0, cor: "brown" },
    { linha1: 6, linha2: 3, cor: "brown" },
    { linha1: 6, linha2: 4, cor: "brown" },
    { linha1: 7, linha2: 2, cor: "red-02" },
    { linha1: 7, linha2: 7, cor: "red-02" },
    { linha1: 7, linha2: 9, cor: "red-02" },
    { linha1: 8, linha2: 0, cor: "cinza" },
    { linha1: 8, linha2: 3, cor: "cinza" },
    { linha1: 8, linha2: 4, cor: "cinza" },
    { linha1: 9, linha2: 1, cor: "laranja" },
    { linha1: 9, linha2: 6, cor: "laranja" },
    { linha1: 9, linha2: 7, cor: "laranja" },
    { linha1: 9, linha2: 8, cor: "laranja" },
    { linha1: 9, linha2: 9, cor: "laranja" }
  ];

const combinacoes2 = [
    { linha1: 0, linha2: 3, cor: "cinza" },
    { linha1: 1, linha2: 5, cor: "gold" },
    { linha1: 2, linha2: 0, cor: "red-02" },
    { linha1: 3, linha2: 4, cor: "laranja" },
    { linha1: 4, linha2: 2, cor: "cian" },
    { linha1: 5, linha2: 1, cor: "verde" }
];

const combinacoes3 = [
    { linha1: 0, linha2: 3, cor: "cinza" },
    { linha1: 1, linha2: 0, cor: "gold" },
    { linha1: 2, linha2: 4, cor: "red-02" },
    { linha1: 3, linha2: 1, cor: "laranja" },
    { linha1: 3, linha2: 2, cor: "laranja" },
    { linha1: 4, linha2: 5, cor: "cian" },
    { linha1: 5, linha2: 1, cor: "laranja" },
    { linha1: 5, linha2: 2, cor: "laranja" }

  ];

const combinacoes4 = [
    { linha1: 0, linha2: 2, cor: "cinza" },
    { linha1: 1, linha2: 4, cor: "gold" },
    { linha1: 2, linha2: 0, cor: "red-02" },
    { linha1: 3, linha2: 3, cor: "laranja" },
    { linha1: 3, linha2: 5, cor: "laranja" },
    { linha1: 4, linha2: 1, cor: "cian" },
    { linha1: 5, linha2: 3, cor: "laranja" },
    { linha1: 5, linha2: 5, cor: "laranja" }
];

const ALL_COMBINACOES = { combinacoes1, combinacoes2, combinacoes3, combinacoes4 };
// ===================================================

document.querySelectorAll('.matching-game').forEach(gameEl => {
  const list1El = gameEl.querySelector('.list1');
  const list2El = gameEl.querySelector('.list2');
  const sentenceEl = gameEl.querySelector('.sentence');
  const frasesCorretasEl = gameEl.querySelector('.frasesCorretas');
  const clearBtnEl = gameEl.querySelector('.clear');
  const copyBtnEl = gameEl.querySelector('.copy');

  let combinacoes = ALL_COMBINACOES[gameEl.dataset.combinacoes] || [];
  let mostrarFrasesCorretas = gameEl.dataset.mostrar === "true";

  // 🔇 Se for modo silencioso, remove elementos extras
  if (!mostrarFrasesCorretas) {
    sentenceEl?.remove();
    frasesCorretasEl?.remove();
    clearBtnEl?.remove();
    copyBtnEl?.remove();
  }

  initMatchingGame({
    list1El,
    list2El,
    sentenceEl,
    frasesCorretasEl,
    clearBtnEl,
    copyBtnEl,
    combinacoes,
    mostrarFrasesCorretas
  });
});

function initMatchingGame({ list1El, list2El, sentenceEl, frasesCorretasEl, clearBtnEl, copyBtnEl, combinacoes = [], mostrarFrasesCorretas = false }) {
  let selected1 = null;
  let selected2 = null;
  const jaUsadas = new Set();

  function handleClickFactory(list, setterName) {
    return function (ev) {
      const li = ev.target.closest('li');
      if (!li) return;
      [...list.querySelectorAll('li')].forEach(x => x.classList.remove('selected'));
      li.classList.add('selected');

      if (setterName === 's1') selected1 = [...list1El.children].indexOf(li);
      else selected2 = [...list2El.children].indexOf(li);

      updateSentence();
    };
  }

  list1El.addEventListener('click', handleClickFactory(list1El, 's1'));
  list2El.addEventListener('click', handleClickFactory(list2El, 's2'));

  function updateSentence() {
    if (selected1 != null && selected2 != null) {
      const comb = combinacoes.find(c => c.linha1 === selected1 && c.linha2 === selected2);
      const li1 = list1El.children[selected1];
      const li2 = list2El.children[selected2];
      const texto1 = li1.dataset.value || li1.textContent.trim();
      const texto2 = li2.dataset.value || li2.textContent.trim();
      const frase = `${texto1} ${texto2}`;

      if (comb) {
        const cor = comb.cor;
        li1.classList.remove('selected');
        li2.classList.remove('selected');
        li1.classList.add(cor);
        li2.classList.add(cor);

        if (mostrarFrasesCorretas && sentenceEl) {
          sentenceEl.textContent = `${frase} ✅`;
          if (!jaUsadas.has(frase)) {
            const item = document.createElement('li');
            item.textContent = frase;
            item.style.borderLeftColor = getComputedStyle(li1).backgroundColor;
            frasesCorretasEl.appendChild(item);
            jaUsadas.add(frase);
          }
        }

        selected1 = null;
        selected2 = null;
      } else {
        if (mostrarFrasesCorretas && sentenceEl)
          sentenceEl.textContent = '❌ Combinaison incorrecte. Veuillez réessayer.';
        selected2 = null;
        [...list2El.querySelectorAll('li')].forEach(x => x.classList.remove('selected'));
      }
    } else if (mostrarFrasesCorretas && sentenceEl) {
      sentenceEl.textContent = 'Cliquez sur un élément de chaque liste pour former une phrase.';
    }
  }

  clearBtnEl?.addEventListener('click', () => {
    selected1 = null;
    selected2 = null;
    [...list1El.querySelectorAll('li'), ...list2El.querySelectorAll('li')].forEach(x => {
      x.classList.remove('selected', 'azul', 'verde', 'laranja', 'roxo', 'cinza', 'cian', 'gold', 'red-02', 'yellow-02', 'brown');
    });
    if (frasesCorretasEl) frasesCorretasEl.innerHTML = '';
    jaUsadas.clear();
    if (sentenceEl && mostrarFrasesCorretas)
      sentenceEl.textContent = 'Cliquez sur un élément de chaque liste pour former une phrase.';
  });

 copyBtnEl?.addEventListener('click', async () => {
    if (!frasesCorretasEl || !mostrarFrasesCorretas) return;

    const ultimo = frasesCorretasEl.lastElementChild;
    if (!ultimo) return;

    const frase = ultimo.textContent;

    try {
      await navigator.clipboard.writeText(frase);
      copyBtnEl.textContent = 'Copié!';
      setTimeout(() => (copyBtnEl.textContent = 'Copier'), 1200);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = frase;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      copyBtnEl.textContent = 'Copié!';
      setTimeout(() => (copyBtnEl.textContent = 'Copier'), 1200);
    }
});
}



