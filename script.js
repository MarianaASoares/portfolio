const imgTechnology = document.querySelectorAll(".logo-technology")
const titleTechnology = document.querySelector('.text-title-technology')
const button = document.querySelector('.button-technology')
const originalImages = []

const newImages = [
  'assets/logo-git.png',
  'assets/logo-figma.png',
  'assets/logo-github.png'
]

imgTechnology.forEach(img => originalImages.push(img.src));

function replaceTechnology() {
  //verifica se estamos mostrando as imagens originais(tecnologias)
  const showOriginal = imgTechnology[0].src.includes(originalImages[0].split('/').pop());

  //troca as imagens
  imgTechnology.forEach((img, index) => {

    //mudança no opacity para transição
    img.style.opacity = 0;

    //troca a imagens após transição

    setTimeout(() => {
      img.src = showOriginal ? newImages[index] : originalImages[index];

      img.style.opacity = 1;

    }, 800); //tempo da transição
  })

  button.textContent = showOriginal ? 'Tecnologias' : 'Ferramentas';

  titleTechnology.textContent = showOriginal ? 'Ferramentas' : 'Tecnologias'

  replaceBackground.style.back
}





