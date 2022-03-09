console.log(" === Array ===");

const carruwus = ["Gowol","Coworsa","Yiff"];
//contexto.comando();
//adicionar no final e começo
carruwus.push("Coworolla");
carruwus.unshift("Marewea");
// remove, substitui e adiciona em qualquer posição
carruwus.splice(1,1)
carruwus.splice(3,3,"BMWuwu");
carruwus.splice(2,0,"Fuwusca", "Gowolf");

carruwus.push();
carruwus.pop();
carruwus.sort();
carruwus.reverse();

let i = 0;
while(carruwus[i]){
    document.write(" - ", carruwus[i], "<br>");
    i++;
}


console.log(carruwus);
console.log(carruwus.length);

