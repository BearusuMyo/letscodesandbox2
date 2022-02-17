function analisar(){
    var idade = parseInt(document.getElementById("age").value);
    var resulta = "";
    while (!idade || idade < 0){
        alert ("Ponha um número válido, bobão! >:O");
        idade = parseInt(prompt("Informe agora!"));
        document.getElementById("age").value = idade;
    }
    if (idade < 18){
        resulta = "Baby";
    } else if (idade < 60 && idade >= 18){
        resulta = "Adulto(a)";
    } else if (idade >=60 && idade < 120){
        resulta = "E-doso(a)";
    } else {
        resulta = "Defunto(a) e esqueçeram de enterrar!";
    }
    document.getElementById("result2").value = resulta;
}