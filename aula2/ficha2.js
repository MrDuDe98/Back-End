function main(){

    //linha 1

    imc(80,1.40);

    //linha 2
    inverso("ola mundo");
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

//INLINE
main();