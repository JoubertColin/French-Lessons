/*// Obter a imagem e o áudio pelos seus IDs
const imagem = document.getElementById('minhaImagem');
const audio = document.getElementById('meuAudio');

// Adicionar um listener de clique à imagem
imagem.addEventListener('click', function () {
  audio.play(); // Reproduz o áudio ao clicar na imagem
});*/


const imagens = document.querySelectorAll('.img-audio');

imagens.forEach(imagem => {
  imagem.addEventListener('click', () => {
    const srcAudio = imagem.getAttribute('data-audio');
    const audio = new Audio(srcAudio);
    audio.play();
  });
});


/*// Caixa de resposta


//function enviarResposta() {
  const resposta = document.getElementById('resposta').value;
  if (resposta.trim() === "") {
    alert("Por favor, digite uma resposta.");
  } else {
    alert("Você respondeu: " + resposta);
  }
}*/