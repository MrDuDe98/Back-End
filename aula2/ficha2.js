function main(){

    //linha 1

    imc(80,1.40);

    //linha 2

    inverso("ola mundo");

    //linha 3

    vogais("ola euueuu");

    //linha 4

    frase("quantas vezes tem esta frase a letra", "a");

}

//Linha1
function imc(peso, altura){
    var imc = 0;
    imc = peso / Math.pow(altura, 2 );
    console.log("O seu IMC é: ",imc)
    if(imc <= 18.5){
        console.log("abaixo de peso")
    }if(imc > 18.5 && imc <= 25 ){
        console.log("peso normal")
    }if(imc > 25 && imc <= 30){
        console.log("acima do peso")
    }if(imc > 30){
        console.log("obeso")
    }
}

//linha2
function inverso(frase){
    var fraseInv = "";
    var l = frase.length - 1;
    for(i = l; i >= 0; i--){
        fraseInv += frase.charAt(i);
    }
    

console.log(fraseInv);
}

//linha3
function vogais(texto){
    var totalVogais = 0;
    texto.toLowerCase();
    for( i = 0;i < texto.length; i++){
        c = texto.charAt(i);
        if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u' )
            totalVogais++;
    }
console.log(totalVogais);
}


//linha4
function frase(frase, letra){
    var totalLetra = 0;
    for(i = 0; i < frase.length; i++){
        c = frase.charAt(i);
        if(c == letra){
            totalLetra++
        }
    }
    console.log(totalLetra);
}

//linha5

//INLINE
main();