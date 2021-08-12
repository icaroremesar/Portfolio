<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <title>Calculadora</title>
    <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0">
    <link href="calculadora.css" type="text/css" rel="stylesheet"/>
    <link rel="sortcut icon" href="0resgate/imagens/Livro.jpg" type="image/jpg" />
</head>
<body>
    <div id="corpo">
        <div>
            <h1>Histórico</h1>
            <div>
                <input id='value' placeholder='0'>
            </div>
            <div id="apareceraqui">
                
            </div>
        </div> <!-- Histórico de operações -->
        <div>
            <div id="visor">
                <h1 id="aparecernovisor">0</h1>
            </div><!-- visor -->
            <div id="numeros">
                <div onclick="clicounoac()"><a>AC</a></div>
                <div onclick="clicounomaisoumenos()"><a>+/-</a></div>
                <div onclick="clicounoporc()"><a>%</a></div>
                <div class="operacoes" onclick="clicounodivisao()"><a>/</a></div>
                <div class="numero" onclick="clicouno7()"><a>7</a></div>
                <div class="numero" onclick="clicouno8()"><a>8</a></div>
                <div class="numero" onclick="clicouno9()"><a>9</a></div>
                <div class="operacoes" onclick="clicounovezes()"><a>x</a></div>
                <div class="numero" onclick="clicouno4()"><a>4</a></div>
                <div class="numero" onclick="clicouno5()"><a>5</a></div>
                <div class="numero" onclick="clicouno6()"><a>6</a></div>
                <div class="operacoes" onclick="clicounomenos()"><a>-</a></div>
                <div class="numero" onclick="clicouno1()"><a>1</a></div>
                <div class="numero" onclick="clicouno2()"><a>2</a></div>
                <div class="numero" onclick="clicouno3()"><a>3</a></div>
                <div class="operacoes" onclick="clicounomais()"><a>+</a></div>
                <div class="numero" onclick="clicouno0()" id="numero0"><a>0</a></div>
                <div class="numero" onclick="clicounovirgula()"><a>,</a></div>
                <div class="operacoes" onclick="clicounoigual()"><a>=</a></div>

            </div><!-- números -->
        </div>
    </div>
</body>

<script src='calculadora.js'></script>
</html>