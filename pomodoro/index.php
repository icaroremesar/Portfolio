
<?php
$nome = "Ícaro";
?>
<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <title>Pomodoro</title>
    <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0">
    <link href="pomodoro.css" type="text/css" rel="stylesheet"/>
    <link rel="sortcut icon" href="0resgate/imagens/Livro.jpg" type="image/jpg" />
</head>
<body>
    <div id="corpo">
        <div id="introducao"><h1>Pomodoro</h1></div>
        <div id="tempo">
            <div id="boasvindas">
                <p><?php echo "Olá, ".$nome; ?> </p>
            </div>
            <div id="visor">
                <div>
                    <h1 id="visor_minutos">50</h1>
                    <p>MINUTOS</p>
                </div><!-- Minutos -->
                <div><h1>:</h1></div>
                <div>
                    <h1 id="visor_segundos">00</h1>
                    <p>SEGUNDOS</p>
                </div><!-- Segundos -->
            </div><!-- Visor de tempo -->
            <div id="botao_acao_visor">
                <a class="botao" id="botao_novatarefa" onclick='abrirpopup()'>Nova Tarefa</a>
                <a class="botao" id="botao_descanso" onclick='iniciadescanso()'>Descanso</a>
            </div>
            <div></div>
        </div><!-- Apresentação -->
        <div id='popup_novatarefa'>
            <div onclick='fecharpopup()'></div>
            <div id='popup_centro'>
                <div onclick='fecharpopup()' id='lateral1'></div>
                <div id='conteudopopup'>
                    <div id='botaofecharpopup' onclick='fecharpopup()'><a>x</a></div>
                    <h1>Nova tarefa</h1>
                    <form>
                        <input id='nome_tarefa' placeholder='nome da tarefa'></input>
                    </form>
                    <button id='botao_iniciar' onclick='salvardados()'>Iniciar</button>
                </div>
                <div onclick='fecharpopup()' id='lateral2'></div>
            </div>
            <div onclick='fecharpopup()'></div>
        </div>
        <div id='tarefasx'>
            <h1>Tarefas</h1>
            <div class='tarefa'>
                <div><p>Fez?</p></div>
                <div><p>Tarefa</p></div>
                <div><p>Início</p></div>
                <div><p>Fim</p></div>
            </div>
            <div id="novastarefas" class="anovastarefas">
            </div>
        </div>
    </div>
</body>

<script src='pomodoro.js'></script>
</html>