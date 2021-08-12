let segundos = 3;
let minutos = parseInt(segundos / 60);

function diminuirsegundos(){
    segundos--;
    console.log(segundos);
}

    do{
        setTimeout(diminuirsegundos,1000);
    }while(segundos!=0)

// for (;segundos!=0;diminuirsegundos()){
//     console.log(segundos);
// }