function analisar(){
    var idade = parseFloat(document.getElementById("age").value);
    var resulta = "";
    if (idade < 18){
        resulta = "Baby";
    } else if (idade < 60 && idade >= 18){
        resulta = "Adulto(a)";
    } else if (idade >=60 && idade < 120){
        resulta = "E-doso(a)";
    } else if (idade != NaN){
        resulta = "Defunto(a) e esqueçeram de enterrar!";
    } else {
        resulta = "Informe um número, bobão! >:O";
    }
    document.getElementById("result2").value = resulta;
}