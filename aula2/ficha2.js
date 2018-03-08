function main(){

    //linha 1

    imc(80,1.40);

    //linha 2

    inverso("ola mundo");

    //linha 3

    vogais("ooooooo");
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
function vogais(frase){
    var totalVogais = 0;
    var l = frase.length -1;
    var leter;
    for(i=0; i <= l; i++){
        letter = frase.charAt(i);
        if(leter == "a" || leter == "e" || leter == "i" || leter == "o" || leter == "u" ){
            totalVogais += 1;
        }
    }
console.log(totalVogais);
}

//INLINE
main();