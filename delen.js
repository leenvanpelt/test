"use strict";

document.getElementById("delen").onclick = function(){
    const verkeerdeElementen = document.querySelectorAll("input:invalid, select:invalid");
    for (const verkeerdElement of verkeerdeElementen){
        document.getElementById(`${verkeerdElement.id}Fout`).hidden = false;
    }
    const correcteElementen = document.querySelectorAll("input:valid,select:valid");
    for (const correctElement of correcteElementen){
        document.getElementById(`${correctElement.id}Fout`).hidden = true;
    }
    const resultaat = document.getElementById("gedeeld");
    const getal1 = Number(document.getElementById("getal1").value);
    const getal2 = Number(document.getElementById("getal2").value);
    console.log(`getal 1= ${getal1} - getal2 = ${getal2}`); //OK
    if (verkeerdeElementen.length === 0){    
        resultaat.hidden = false ;
        resultaat.innerText = getal1/getal2;
    }else{
        resultaat.hidden = true;
    }
};