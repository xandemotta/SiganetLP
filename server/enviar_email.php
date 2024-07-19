<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $nome = htmlspecialchars(trim($_POST['nome']));
  $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
  $mensagem = htmlspecialchars(trim($_POST['mensagem']));

  if (empty($nome) || empty($email) || empty($mensagem)) {
    $erro = "Por favor, preencha todos os campos";
  } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $erro = "Por favor, insira um email válido";
  } else {
    $to = "alexandremota560@gmail.com"; // Substitua pelo seu email
    $subject = "Nova mensagem de $nome";
    $body = "Nome: $nome\nEmail: $email\nMensagem:\n$mensagem";
    $headers = "From: $email\r\n";

    if (mail($to, $subject, $body, $headers)) {
      $sucesso = "Email enviado com sucesso!";
    } else {
      $erro = "Erro ao enviar email";
    }
  }
}
?>

<!-- Mostrar mensagem de erro ou sucesso -->
<?php if (isset($erro)) { ?>
  <p style="color: red;"><?php echo $erro; ?></p>
<?php } elseif (isset($sucesso)) { ?>
  <p style="color: green;"><?php echo $sucesso; ?></p>
<?php } ?>

