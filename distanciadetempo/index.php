<?php
$nome = "Ícaro";
?>
<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <title>Mensagens</title>
    <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0">
    <link href="disttempo.css" type="text/css" rel="stylesheet"/>
    <link rel="sortcut icon" href="0resgate/imagens/Livro.jpg" type="image/jpg" />
</head>
<body>
    <div id="escolhendo">
        <div>
            <h1>De:</h1>
        </div>
        <div class="tempox">
            <a>Horas</a>
            <a>Minutos</a>
            <a>Dia</a>
            <a>Mês</a>
            <a>Ano</a>
        </div>
        <div class="tempox">
            <select id='horasinicio'>
            </select>
            <select id='minutosinicio'>
            </select>
            <select id='diainicio'>
            </select>
            <select id='mesinicio'>
            </select>
            <select id='anoinicio'>
            </select>
        </div>
        <button onclick="dadosdehoje()">Hoje</button>
        <div>
            <h1>Até:</h1>
        </div>
        <div class="tempox">
            <a>Horas</a>
            <a>Minutos</a>
            <a>Dia</a>
            <a>Mês</a>
            <a>Ano</a>
        </div>
        <div class="tempox">
            <select id='horasfim'>
            </select>
            <select id='minutosfim'>
            </select>
            <select id='diafim'>
            </select>
            <select id='mesfim'>
            </select>
            <select id='anofim'>
            </select>
        </div>
        <button onclick="calculandoemsegundos()">Calcular</button>
    </div>
    <div id="resultadox">
        <div class="xx">
            <div><p>Semanas</p></div>
            <div><p>Dias</p></div>
            <div><p>Horas</p></div>
            <div><p>Minutos</p></div>
            <div><p>Segundos</p></div>
        </div>
        <div class="xx">
            <div><p id="semanascalc"></p></div><!-- Semanas -->
            <div><p id="diascalc"></p></div><!-- Dias -->
            <div><p id="horascalc"></p></div><!-- Horas -->
            <div><p id="minutoscalc"></p></div><!-- Minutos -->
            <div><p id="segundoscalc"></p></div><!-- Segundos -->
        </div>
    </div>
</body>
<script src='disttempo.js'></script>
</html>