var namaewa = prompt("Por favor, informe o seu nome:");
var nuwuber1 = parseFloat(prompt("Informe a sua nota:"));
var nuwuber2 = parseFloat(prompt("Informe agora a sua segunda nota:"));
var nowota = (nuwuber1 + nuwuber2) / 2;
var resp = "";
var recup = "-";

if (nowota >= 6){
    resp = "Aprovado!";
} else if (nowota < 6 && nowota >= 4) {
    resp = "Recuperação!";
    recup = parseFloat(prompt("Que pena, você ficou de Recuperação\nInforme sua nota para calcularmos sua nota final: "));
    nowota = (nowota + recup);
    if (nowota > 5){
        resp = "Aprovado com recuperação!";
    } else{
        resp = "Reprovado!";
    }
    } else {
        resp = "Reprovado!";
    }

console.log(resp);

if (recup = "-") {document.write(`
Aluno: ${namaewa} <br>
Nota: ${nowota} <br>
Situação: ${resp} <br>
`)} else {
document.write(`
    Aluno: ${namaewa} <br>
    Nota: ${nowota} <br>
    Situação: ${resp} <br>
    Nota de recuperação: ${recup} <br>
`)
}

//<script src="js/operadores.js"></script>
//  <script src="js/variaveis.js"></script>
//  <script src="js/funcoes.js"></script>