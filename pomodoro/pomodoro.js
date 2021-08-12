function relaxa(){
    console.log("Ícaro");
}
function fecharpopup(){
    document.getElementById('popup_novatarefa').style.display = 'none';
}
function abrirpopup(){
    document.getElementById('popup_novatarefa').style.display = 'grid';
}
let segundostotais = 0;
let segundos = parseInt(segundostotais % 60);
let minutos = parseInt(segundostotais/60);
let oqueaconteceu = 'pomodoro';

function visorsegundos(){
    if(segundos<10){
        document.getElementById("visor_segundos").innerText = '0'+segundos;
    }
    else{
        document.getElementById("visor_segundos").innerText = segundos;
    }
}

function visorminutos(){
    if(minutos<10 && minutos>-1){
        document.getElementById("visor_minutos").innerText = '0'+minutos;
    }
    else{
        document.getElementById("visor_minutos").innerText = minutos;
    }
}

function iniciapomodoro(){
    segundostotais = parseInt(5*60);
    segundos = parseInt(segundostotais % 60);
    minutos = parseInt(segundostotais/60);
    oqueaconteceu = 'descanso';
    iniciar();

}

function iniciadescanso(){
    segundostotais = parseInt(1*60);
    segundos = parseInt(segundostotais % 60);
    minutos = parseInt(segundostotais/60);
    oqueaconteceu = 'pomodoro';
    iniciar();
}

function limparbotoes(){
    document.getElementById('botao_novatarefa').style.display = 'none';
    document.getElementById('botao_descanso').style.display = 'none';
}

var icaroxs;


function terminou(){
    segundostotais = 0;
    visorsegundos();
    visorminutos();
    if(oqueaconteceu == 'descanso'){
        var dataParametrox = new Date();
        let horaatualx = dataParametrox.getHours();
        let minutosatualx = dataParametrox.getMinutes();
        if(minutosatualx < 10){
            minutosatualx = '0'+minutosatualx;
        }
        if(horaatualx<10){
            horaatualx = '0'+horaatualx;
        }
        let pedidox = horaatualx + ":" + minutosatualx;
        tarefas.push(pedidox);
        document.getElementById('botao_descanso').style = 'display: grid;';
    }else{
        document.getElementById('botao_novatarefa').style = 'display: grid;';
    }
    adicionarxs();
}

function iniciar(){
    limparbotoes();
    var icaroxs = setInterval(function() {
        if(segundostotais != 0){
            if(segundos!=0){
                segundostotais--;
                segundos = parseInt(segundostotais % 60);
                minutos = parseInt(segundostotais/60);
                visorsegundos();
                visorminutos();
            }
            else{
                if(minutos != 0){
                    minutos--;
                    segundos = 59;
                    visorsegundos();
                    visorminutos();
                }
            }
        }else{
            clearInterval(icaroxs);
            terminou();
        }
    }, 5);
}

const tarefas = [];


function salvardados(){
    tarefa = document.getElementById('nome_tarefa').value;
    var dataParametro = new Date();
    let horaatual = dataParametro.getHours();
    let minutosatual = dataParametro.getMinutes();
    if(minutosatual < 10){
        minutosatual = '0'+minutosatual;
    }
    if(horaatual<10){
        horaatual = '0'+horaatual;
    }
    let pedido = horaatual + ":" + minutosatual;
    tarefas.push(' ');
    tarefas.push(tarefa);
    tarefas.push(pedido);
    fecharpopup();
    adicionarxs();
    if(oqueaconteceu == 'pomodoro'){
        document.getElementById('botao_descanso').style = 'display: grid;';
        iniciapomodoro();
    }else{
        document.getElementById('botao_novatarefa').style = 'display: grid;';
        iniciadescanso();
    }
}

function adicionarxs(){
    var listaxx = document.getElementById('novastarefas');
    let alvo = document.getElementById('novastarefas');
    alvo.innerText = "";
    for(x=0;x<tarefas.length;x+=4){
        listaxx.innerHTML += '<div id="esse'+x+'">';
        if(tarefas[x+3] == undefined){
            document.getElementById('esse'+x).innerHTML += '<div id="foto'+parseInt(x)+'"></div>';
        }
        else{
            document.getElementById('esse'+x).innerHTML += '<div id="foto'+parseInt(x)+'"><img src="check.png" width="30px" height="30px"></div>';
        }
        document.getElementById('esse'+x).innerHTML += '<div id="tarefa'+parseInt(x+1)+'"><p>'+(tarefas[x+1])+'</p></div>';
        document.getElementById('esse'+x).innerHTML += '<div id="iniciohora'+parseInt(x+2)+'"><p>'+(tarefas[x+2])+'</p></div>';
        if(tarefas[x+3] == undefined){
            document.getElementById('esse'+x).innerHTML += '<div id="fimhora'+parseInt(x+3)+'"><p></p></div>';
        }
        else{
            document.getElementById('esse'+x).innerHTML += '<div id="fimhora'+parseInt(x+3)+'"><p>'+(tarefas[x+3])+'</p></div>';
        }
        listaxx.innerHTML += '</div>';
        var fotox = document.getElementById('foto'+x);
        fotox.style = 'margin: auto; width: 30px; height: 30px;';
        var tarefax = document.getElementById('tarefa'+parseInt(x+1));
        tarefax.style = 'margin: auto;';
        var iniciahorax = document.getElementById('iniciohora'+parseInt(x+2));
        iniciahorax.style = 'margin: auto;';
        var fimhorax = document.getElementById('fimhora'+parseInt(x+3));
        fimhorax.style = 'margin: auto;';
        var icarozinhox = document.getElementById('esse'+x);
        icarozinhox.style = 'display: grid; grid-template-columns: 40px 1fr 70px 70px;column-gap: 5px; margin: 10px; border: 1px solid black; height: 40px; border-radius: 20px;';
    }
}

function comecando(){
    document.getElementById('botao_descanso').style = 'display: none;';
}

comecando();