console.log("==== Repetição ===");

var starto = 1;
const finaro = 10;

while(starto <= finaro){
    document.write(starto);
    console.log(starto);
    // starto = starto + 1;
    starto++;
}
document.write("<hr>");

var ixtarti = 50;
var finau = 1;

while (ixtarti >= finau) {
    document.write(ixtarti);
    ixtarti--;
}

document.write("<hr>");

var ixtarti = 0;
var finau = 100;

while (ixtarti <= finau){
    if (ixtarti % 2 == 0){
        document.write(ixtarti, " ");
    }
    ixtarti++;
}

document.write("<hr>")
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

document.write("<hr>");

var response = 1;
while (response != 0){
    response = parseFloat(prompt("Informe um número uwu ou digite zero pra finalizar:\n"));
    if(response){
        document.write(response);
    }
    
}