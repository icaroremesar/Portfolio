let mensagem = [];
let informacoes= [];
let opcoes = [];
let nomex;

function salvarnome(){
    nomex = document.getElementById('nome').value;
    if(nomex != ''){
        console.log(nomex);
        document.getElementById('mensagens').innerHTML += '<div class="resposta" id="'+nomex+'">'+nomex+'</div>';
        document.getElementById('erro').innerText = '';
        document.getElementById('nomex').innerHTML = '';
        setTimeout(function(){ 
            document.getElementById('mensagens').innerHTML += '<div class="pergunta"><h1>Olá '+nomex+', tudo bem?</h1><p>Ícaro Pereira Remesar</p><div><a class="botaodeenviar">Opção 1</a><a class="botaodeenviar">Opção 2</a><a class="botaodeenviar">Opção 3</a></div></div>';
        }, 3000);

    }
    else{
        document.getElementById('erro').innerText = 'Coloque seu nome';
    }
}

function enviar(){
    document.getElementById('introducao').innerHTML = '';
    document.getElementById('mensagem').innerHTML += '<div class="pergunta"><h1>Olá, qual é o seu nome?</h1><form><input id="nome" placeholder="seu nome"><div id="nomex"><a class="botaodeenviar" onclick="salvarnome()">Enviar</a></div></form></div>';
}