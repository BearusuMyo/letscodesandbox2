var counter = 0;
function addition(){
    const moderu = [];
    moderu.push(document.getElementById("model").value);
    document.write(" - ", moderu[counter], "<br>");
    counter++;
    document.getElementById("quant").textContent = counter;     
}