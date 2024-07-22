// botao pra voltar pro topo
// Mostra o botão quando o usuário rolar 20px da parte superior do documento
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// Ao clicar no botão, a página é movida para o topo
function topFunction() {
  // Retorna suavemente ao topo da página
  // O intervalo de tempo define a suavidade do retorno (quanto menor, mais suave)
  const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 5); // Altere o valor 8 para ajustar a velocidade do retorno
    }
  };
  scrollToTop();
}
