<?php
$nome = "Ícaro";
?>
<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <title>Mensagens</title>
    <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0">
    <link href="mensagens.css" type="text/css" rel="stylesheet"/>
    <link rel="sortcut icon" href="0resgate/imagens/Livro.jpg" type="image/jpg" />
</head>
<body>
    <div id="corpo">
        <div id="introducao">
            <h1>Mensagens</h1>
            <button onclick='enviar()'>Iniciar</button>
        </div>
        <div id='mensagens'>
            <h1></h1>
            <div id='mensagem'></div>
            <div id='erro'></div>
        </div>
    </div>
</body>

<script src='mensagens.js'></script>
</html>