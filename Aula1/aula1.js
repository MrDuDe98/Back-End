function notaFinal(notaP1, notaP2, notaP3){
    return (notaP1 * 0.3) + (notaP2 * 0.3) + (notaP3 * 0.4);
}

function main() {    
    var notaF = notaFinal(12, 12, 13);
    console.log(notaF);
    if (notaF < 9.5){
        console.log("Reprovado!");
    }else {
        console.log("Aprovado");
    } 
}

function mesPorExtenso(numeroMes) {
    var mesExtenso;
    switch (numeroMes){
        case 0:
            mesExtenso = "Janeiro";
            break;
        case 1:
            mesExtenso = "Fevereiro";
            break;
        case 2:
            mesExtenso = "Março";
            break;
        case 3:
            mesExtenso = "Abril";
            break;
        case 4:
            mesExtenso = "Maio";
            break;
        case 5:
            mesExtenso = "Junho";
            break;
        case 6:
            mesExtenso = "Julho";
            break;
        case 7:
            mesExtenso = "Agosto";
            break;
        case 8:
            mesExtenso = "Setembro";
            break;
        case 9:
            mesExtenso = "Outubro";
            break;
        case 10:
            mesExtenso = "Novembro";
            break;
        case 11:
            mesExtenso = "Dezembro";
            break;
    }
console.log(mesExtenso);
}


//INLINE
main();
mesPorExtenso(0);