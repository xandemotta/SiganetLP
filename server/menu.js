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
