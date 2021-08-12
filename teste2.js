let soma = gets() === "S";
const xL = 12;
const yL = 12;
let somax = parseFloat(0.0);
let i = 0;
let x;
let y;
let b;
let z;
let p=10;
let q=1;

let a = Array();

for (x = 0; x < 12; x++) {
  a[x] = new Array();
  for (y = 0; y < 12; y++) {
    a[x][y] = Number(gets());
    /*
    a[0][0] = primeiro
    a[0][1] = segundo da linha
    a[linha][coluna]
    */
  }
}

for(z=0;z<=4;z++){
  for(q=1;q<=p;q++){
    somax+=parseFloat(a[z][q]);
    p--;
  }
}


if(soma === true){
  console.log(parseFloat(somax).toFixed(1));
}
else{
  console.log(parseFloat(somax/30).toFixed(1));
}