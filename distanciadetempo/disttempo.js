let horasiniciais;
let minutosiniciais;
let diasiniciais;
let mesesiniciais;
let anosiniciais;
let horasfinais;
let minutosfinais;
let diasfinais;
let mesesfinais;
let anosfinais;
let agora = '';
let distanciatemposegundos;
let data;
let semanas;
let dias;
let horas;
let minutos;
let segundos;


function colocandoosdiasi(){
    for(d=1;d<32;d++){
        document.getElementById('diainicio').innerHTML += '<option value="'+d+'" id="di'+d+'">'+d+'</option>';
        document.getElementById('diafim').innerHTML += '<option value="'+d+'" id="df'+d+'">'+d+'</option>';
    }
    for(m=1;m<13;m++){
        document.getElementById('mesinicio').innerHTML += '<option value="'+m+'" id="mi'+m+'">'+m+'</option>';
        document.getElementById('mesfim').innerHTML += '<option value="'+m+'" id="mf'+m+'">'+m+'</option>';
    }
    for(a=1900;a<2200;a++){
        document.getElementById('anoinicio').innerHTML += '<option  value="'+a+'" id="ai'+a+'">'+a+'</option>';
        document.getElementById('anofim').innerHTML += '<option  value="'+a+'" id="af'+a+'">'+a+'</option>';
    }
    for(h=0;h<24;h++){
        document.getElementById('horasinicio').innerHTML += '<option  value="'+h+'" id="hi'+h+'">'+h+'</option>';
        document.getElementById('horasfim').innerHTML += '<option  value="'+h+'" id="hf'+h+'">'+h+'</option>';
    }
    for(min=0;min<60;min++){
        document.getElementById('minutosinicio').innerHTML += '<option  value="'+min+'" id="mini'+min+'">'+min+'</option>';
        document.getElementById('minutosfim').innerHTML += '<option  value="'+min+'" id="minf'+min+'">'+min+'</option>';
    }
}

colocandoosdiasi();

function dadosdehoje(){
    agora = new Date();
    horasiniciais = agora.getHours();
    minutosiniciais = parseInt(agora.getMinutes());
    diasiniciais = parseInt(agora.getDate());
    mesesiniciais = parseInt(agora.getMonth())+1;
    anosiniciais = parseInt(agora.getFullYear());
    document.getElementById('horasinicio').value = horasiniciais;
    document.getElementById('minutosinicio').value = minutosiniciais;
    document.getElementById('diainicio').value = diasiniciais;
    document.getElementById('mesinicio').value = mesesiniciais;
    document.getElementById('anoinicio').value = anosiniciais;
}

function calculandoemsegundos(){
    horasiniciais = parseInt(document.getElementById('horasinicio').value)
    minutosiniciais = parseInt(document.getElementById('minutosinicio').value)
    diasiniciais = parseInt(document.getElementById('diainicio').value)
    mesesiniciais = parseInt(document.getElementById('mesinicio').value)
    anosiniciais = parseInt(document.getElementById('anoinicio').value)
    var dia1 = new Date('"'+anosiniciais+'-'+mesesiniciais+'-'+diasiniciais+' '+horasiniciais+':'+minutosiniciais+':00');
    horasfinais = parseInt(document.getElementById('horasfim').value)
    minutosfinais = parseInt(document.getElementById('minutosfim').value)
    diasfinais = parseInt(document.getElementById('diafim').value)
    mesesfinais = parseInt(document.getElementById('mesfim').value)
    anosfinais = parseInt(document.getElementById('anofim').value)
    var dia2 = new Date('"'+anosfinais+'-'+mesesfinais+'-'+diasfinais+' '+horasfinais+':'+minutosfinais+':00');
    if(dia1>dia2){
        distanciatemposegundos = (dia1 - dia2)/1000;
    }
    else{
        distanciatemposegundos = (dia2 - dia1)/1000;
    }
    resposta();
}


function resposta(){
    var icaroxs = setInterval(function() {
        if(distanciatemposegundos != 0){
            semanas = parseInt(distanciatemposegundos / (60*60*24*7));
            dias = parseInt(distanciatemposegundos / (60*60*24) - (semanas*7));
            horas = parseInt(distanciatemposegundos / (60*60) - (semanas*7*24)- (dias*24));
            minutos = parseInt(distanciatemposegundos / (60) - (semanas*7*24*60)- (dias*24*60)- (horas*60));
            segundos = parseInt(distanciatemposegundos - (horas*60*60) - (minutos*60)- (semanas*7*24*60*60)- (dias*24*60*60));
            if(horas<10){
                horas = '0'+horas;
            }
            if(minutos<10){
                minutos = '0'+minutos;
            }
            if(segundos<10){
                segundos = '0'+segundos;
            }
            document.getElementById('semanascalc').innerText = semanas;
            document.getElementById('diascalc').innerText = dias;
            document.getElementById('horascalc').innerText = horas;
            document.getElementById('minutoscalc').innerText = minutos;
            document.getElementById('segundoscalc').innerText = segundos;
            distanciatemposegundos--;
        }else{
            document.getElementById('semanascalc').innerText = '00';
            document.getElementById('diascalc').innerText = '00';
            document.getElementById('horascalc').innerText = '00';
            document.getElementById('minutoscalc').innerText = '00';
            document.getElementById('segundoscalc').innerText = '00';
            clearInterval(icaroxs);
        }
    }, 1000);
}