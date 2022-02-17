function analisar(){
    var idade = parseFloat(document.getElementById("age").value);
    var resulta = "";
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