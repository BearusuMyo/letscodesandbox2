function calcular(){
    const nuwum1 = parseFloat(document.getElementById("nom1").value);
    const nuwum2 = parseFloat(document.getElementById("nom2").value);
    console.log("Seus nuwumeros: ",nuwum1, nuwum2);

    const towotal = nuwum1 + nuwum2;
    document.getElementById("result").value = towotal;


    console.log(towotal);
    console.log("Calculado!");
}