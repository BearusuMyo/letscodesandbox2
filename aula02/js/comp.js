function comparar(){
    const nuwum1 = parseFloat(document.getElementById("op1").value);
    const nuwum2 = parseFloat(document.getElementById("op2").value);
    console.log("Seus nuwumeros: ",nuwum1, nuwum2);

    const cowomp = nuwum1 > nuwum2;
    document.getElementById("result").value = cowomp;


    console.log(towotal);
    console.log("Calculado!");
}