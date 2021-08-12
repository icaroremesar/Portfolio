    let x = document.getElementById('ssxx');
    if(x.style == "overflow-x: scroll"){
        console.log(2);
    }
    else{
        console.log(3);
    }
    /*setInterval(*/function xy(){
        const a = $('#contclones');
        const posicao = a.scrollLeft();
        const b = $('#contclones');
        const posicaob = b.scrollRight();
        console.log(posicao);
        console.log(posicaob);
    }/*,1000);*/
    