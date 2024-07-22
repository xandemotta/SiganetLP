// Função para rolar suavemente até o topo
function topFunction() {
  const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 5); // Ajuste a suavidade do retorno
    }
  };
  scrollToTop();
}

// Função para inicializar todos os event listeners após o carregamento do DOM
document.addEventListener("DOMContentLoaded", () => {
  // Seleção dos elementos
  let btnMenu = document.getElementById("btn-menu");
  let menu = document.getElementById("menu-mobile");
  let overlay = document.getElementById("overlay-menu");
  let emailForm = document.getElementById("emailForm");
  let myBtn = document.getElementById("myBtn");
  const switchButton = document.getElementById("theme-switcher");
  const body = document.body;
  const moonIcon = document.getElementById("moon-icon");
  const sunIcon = document.getElementById("sun-icon");

  // Abre o menu ao clicar no botão de menu
  if (btnMenu) {
    btnMenu.addEventListener("click", () => {
      if (menu) {
        menu.classList.add("abrir-menu");
      }
      if (overlay) {
        overlay.style.display = "block"; // Exibir o overlay
      }
    });
  }

  // Fecha o menu ao clicar no menu ou no overlay
  if (menu) {
    menu.addEventListener("click", () => {
      menu.classList.remove("abrir-menu");
      if (overlay) {
        overlay.style.display = "none"; // Ocultar o overlay
      }
    });
  }

  if (overlay) {
    overlay.addEventListener("click", () => {
      menu.classList.remove("abrir-menu");
      overlay.style.display = "none"; // Ocultar o overlay
    });
  }

  // Envia o formulário via AJAX
  if (emailForm) {
    emailForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Evita que o formulário seja enviado normalmente

      // Obtém os dados do formulário
      const formData = new FormData(this);

      // Envia os dados para o arquivo PHP usando AJAX
      fetch("server/enviar_email.php", {
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
          alert(
            "Fale comigo agora mesmo pelo botão contato no início da página"
          );
        });
    });
  }

  // Função para mostrar/ocultar o botão de voltar ao topo
  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      if (myBtn) {
        myBtn.style.display = "block";
      }
    } else {
      if (myBtn) {
        myBtn.style.display = "none";
      }
    }
  }

  // Adiciona o listener de scroll para mostrar/ocultar o botão de voltar ao topo
  window.onscroll = scrollFunction;

  // Alterna entre o tema escuro e o tema claro
  if (switchButton) {
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
  }
});
