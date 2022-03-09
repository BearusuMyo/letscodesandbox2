function newline(){
    document.write("<hr>");
}
console.log("==== Repetição ===");

var starto = 1;
const finaro = 10;

while(starto <= finaro){
    document.write(starto);
    console.log(starto);
    // starto = starto + 1;
    starto++;
}
newline();

var ixtarti = 50;
var finau = 1;

while (ixtarti >= finau) {
    document.write(ixtarti);
    ixtarti--;
}

newline();

var ixtarti = 0;
var finau = 100;

while (ixtarti <= finau){
    if (ixtarti % 2 == 0){
        document.write(ixtarti, " ");
    }
    ixtarti++;
}

newline();
ixtarti = 99;
finau = 1;

while (ixtarti >= finau) {
    if(ixtarti % 2 == 1){
        if (ixtarti == finau){
            document.write(ixtarti);
        } else {
            document.write(ixtarti," - ");
        }
}
    ixtarti--;
}

newline();

var response = 1;
while (response != 0){
    response = parseFloat(prompt("Informe um número uwu ou digite zero pra finalizar:\n"));
    if(response){
        document.write(response);
    }
    
}


newline();

var lineas = 1;
var columnas = parseInt(prompt("Digite o número de colunas à gerar:"));
if(!columnas){
    columnas = parseInt(prompt("Por favor digite um número inteiro válido:"));
} else if (columnas > 1) {
    for (let i = 1; i <= columnas; i++ ){
        for (let u = 1; u < i; u++){
            document.write("*");
        }
        document.write("<br>");
    }
} else{
    document.write("*");
}

newline();


// *=================*
//  *===============*
//   *=============*  
//    *===========*
//     *=========*
//      *=======*
//       *=====*
//        *===*
//         *=*
//          *
// lineas = 1;
// var columnas = parseInt(prompt("Digite o tamanho da nave da xuxa:"));
// if(!columnas){
//     columnas = parseInt(prompt("Por favor digite um número inteiro válido:"));
// } else if (columnas > 1) {
//     for (let i = 1; i <= columnas; i++ ){
//         for (let u = 1; u < i; u++){
//             document.write("*");
    
//         }
//         document.write("<br>");
//     }
// } else{
//     document.write("*");
// }

