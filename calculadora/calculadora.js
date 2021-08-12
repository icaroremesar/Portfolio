let valor;
let valor1;

let dados = [];

function clicounoac(){
    //limpar visor e limpar ultimos dados
    document.getElementById('aparecernovisor').innerText = '0';
    document.getElementById('value').value = '';
}

//Quando clicar em alguma operação, temos que armazenar os dados
function armazenardados(){
    dados.push(document.getElementById('value').value.replace(',','.'));
    document.getElementById('value').value = '';
    document.getElementById('aparecernovisor').innerText = '0';
}

function testandox(){

    for(a=0;a<parseInt(dados.length-2);a+=5){
        document.getElementById('apareceraqui').innerHTML += '<div><a id="'+[a]+'">'+dados[a]+' </a><a id="'+[a+1]+'">'+dados[a+1]+' </a><a id="'+[a+2]+'">'+dados[a+2]+' </a><a id="'+[a+3]+'">'+dados[a+3]+' </a><a id="'+[a+4]+'">'+dados[a+4]+' </a></div>';
        document.getElementById('aparecernovisor').innerText = dados[a+4];
        document.getElementById('value').value = dados[a+4];
    }
}

function fazeroperacao(){
        //se for multiplicação
            dados.push('=');
            if(dados[parseInt(dados.length - 3)]=='x'){
                dados.push(parseFloat(dados[parseInt(dados.length - 4)]) * parseFloat(dados[parseInt(dados.length - 2)]));
            }
            if(dados[parseInt(dados.length - 3)]=='+'){
                dados.push(parseFloat(dados[parseInt(dados.length - 4)]) + parseFloat(dados[parseInt(dados.length - 2)]));
            }
            if(dados[parseInt(dados.length - 3)]=='-'){
                dados.push(parseFloat(dados[parseInt(dados.length - 4)]) - parseFloat(dados[parseInt(dados.length - 2)]));
            }
            if(dados[parseInt(dados.length - 3)]=='/'){
                dados.push(parseFloat(dados[parseInt(dados.length - 4)]) / parseFloat(dados[parseInt(dados.length - 2)]));
            }
            document.getElementById('apareceraqui').innerHTML = '';
            testandox();
        //se for soma
        /*if(dados[i+1]=='+'){
            dados.push('=');
            dados.push(parseFloat(dados[i]) + parseFloat(dados[i+2]));
            document.getElementById('apareceraqui').innerHTML = '';
            document.getElementById('apareceraqui').innerHTML += '<a>'+dados[i]+' </a>';
            document.getElementById('apareceraqui').innerHTML += '<a>'+dados[i+1]+' </a>';
            document.getElementById('apareceraqui').innerHTML += '<a>'+dados[i+2]+' </a>';
            document.getElementById('apareceraqui').innerHTML += '<a>'+dados[i+3]+' </a>';
            document.getElementById('apareceraqui').innerHTML += '<a>'+dados[i+4]+' </a>';
            document.getElementById('aparecernovisor').innerText = dados[i+4];
            document.getElementById('value').value = dados[i+4];
        }*/

}

/* Operações */
function clicounomaisoumenos(){
    console.log('+/-');
    document.getElementById('aparecernovisor').innerText += '+/-';
}
function clicounoporc(){
    console.log('%');
}
function clicounodivisao(){
    armazenardados();
    if(dados.length % 5 == 1){
            dados.push('/');
    }else{
        if(dados.length % 5 == 3){
            fazeroperacao();
        }
        else{
            dados.push('/');
        }
    }
}
function clicounovezes(){
    armazenardados();
    if(dados.length % 5 == 1){
            dados.push('x');
    }else{
        if(dados.length % 5 == 3){
            fazeroperacao();
        }
        else{
            dados.push('x');
        }
    }
}
function clicounomenos(){
    armazenardados();
    if(dados.length % 5 == 1){
            dados.push('-');
    }else{
        if(dados.length % 5 == 3){
            fazeroperacao();
        }
        else{
            dados.push('-');
        }
    }
}
function clicounomais(){
    armazenardados();
    if(dados.length % 5 == 1){
            dados.push('+');
    }else{
        if(dados.length % 5 == 3){
            fazeroperacao();
        }
        else{
            dados.push('+');
        }
    }
}

/* Números */
function clicouno9(){
    valor = 9;
    atualizarvisor();
}
function clicouno8(){
    valor = 8;
    atualizarvisor();
}
function clicouno7(){
    valor = 7;
    atualizarvisor();
}
function clicouno6(){
    valor = 6;
    atualizarvisor();
}
function clicouno5(){
    valor = 5;
    atualizarvisor();
}
function clicouno4(){
    valor = 4;
    atualizarvisor();
}
function clicouno3(){
    valor = 3;
    atualizarvisor();
}
function clicouno2(){
    valor = 2;
    atualizarvisor();
}
function clicouno1(){
    valor = 1;
    atualizarvisor();
}
function clicouno0(){
    valor = 0;
    atualizarvisor();
}

/* Vírgula */
function clicounovirgula(){
    valor = ',';
    atualizarvisor();
}

/*p Igual */
function clicounoigual(){
    armazenardados();
    fazeroperacao();
}

function atualizarvisor(){
    if(document.getElementById('aparecernovisor').innerText == '0'){
        document.getElementById('aparecernovisor').innerText = '';
    } 
    document.getElementById('aparecernovisor').innerText += valor;
    document.getElementById('value').value += valor;
}

//clicar em um número
    //limpar o 