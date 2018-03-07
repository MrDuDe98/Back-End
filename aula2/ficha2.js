function main(){

    //linha 1

    imc(80,1.84);

}

//Linha1
function imc(peso, altura){
    var imc = 0;
    imc = peso / Math.pow(altura, 2 );
    return(imc);
    if(imc <= 18.5){
        console.log("abaixo de peso")
    }if(18.5 <= imc <=25 ){
        console.log("peso normal")
    }if(25 <= imc <=30){
        console.log("acima do peso")
    }if(imc > 30){
        console.log("obeso")
    }
}

//INLINE
main();