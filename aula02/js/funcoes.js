console.log("=== FUNÇÕES ===");

/*
DECLARAÇÃO DE FUNÇÃO
function naem (param){

}
*/
var nume1 = parseFloat(prompt("Informe o número: "));
var nume2 = parseFloat(prompt("Informe o outro número: "));

function summath(num1,num2){
    return num1 + num2;
}

document.write("O resultado é: ", summath(nume1,nume2));
