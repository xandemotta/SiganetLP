let btnMenu = document.getElementById("btn-menu");
let menu = document.getElementById("menu-mobile");
let overlay = document.getElementById("overlay-menu");

btnMenu.addEventListener("click", () => {
  menu.classList.add("abrir-menu");
});

menu.addEventListener("click", () => {
  menu.classList.remove("abrir-menu");
});
overlay.addEventListener("click", () => {
  menu.classList.remove("abrir-menu");
});

document
  .getElementById("emailForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que o formulário seja enviado normalmente

    // Obtém os dados do formulário
    const formData = new FormData(this);

    // Envia os dados para o arquivo PHP usando AJAX
    fetch("enviar_email.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          return response.text(); // Retorna o texto da resposta
        }
        throw new Error("Erro ao enviar o email.");
      })
      .then((data) => {
        alert(data); // Exibe a mensagem de sucesso ou erro
      })
      .catch((error) => {
        console.error("Erro:", error);
        alert("Fale comigo agora mesmo pelo botão contato no inicio da página");
      });
  });

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

document
  .getElementById("emailForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var formData = new FormData(this);

    fetch("server/enviar_email.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.text())
      .then((data) => {
        document.getElementById("resultado").innerText = data;
      })
      .catch((error) => {
        document.getElementById("resultado").innerText = "Erro ao enviar email";
      });
  });

const switchButton = document.getElementById("theme-switcher");
const body = document.body;
const moonIcon = document.getElementById("moon-icon");
const sunIcon = document.getElementById("sun-icon");

switchButton.addEventListener("click", () => {
  body.classList.toggle("dark-theme");

  if (body.classList.contains("dark-theme")) {
    moonIcon.style.visibility = "hidden";
    sunIcon.style.visibility = "visible";
  } else {
    moonIcon.style.visibility = "visible";
    sunIcon.style.visibility = "hidden";
  }
});
