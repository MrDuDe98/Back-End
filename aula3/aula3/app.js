var started = function(){
    console.log("Started Download")
}

var update = function(a){
    console.log(a,"% of Download");
}

var completed = function(){
    console.log("Download Completed")
}

function performDownload(fn1, fn2, fn3){
    fn1();
    var a = 0;
    while (a<=100){
        fn2(a);
        a++;
    }    
    fn3();
}

performDownload(started, update, completed);

var msg = require('./ArrayUtils');


var a = new Array();
a = [10, 14, 20, 21];

// array está vazio?*********************
var isEmpty = msg.utils.isEmpty(a);
console.log(" ");
console.log("Esta vazia? ", isEmpty);
//***************************************

// numero maximo dentro do array
var maxArray = msg.utils.maxArray(a);
console.log("Maior numero do array: ",maxArray)
//***************************************

// numero minimo dentro do array
var minArray = msg.utils.minArray(a);
console.log("Menor numero do array: ",minArray)
//*************************************** 

// media da array
var medArray = msg.utils.medArray(a);
console.log("Media do array: ",medArray)
//***************************************

// Indice de um determinado elemento no array

//posicao de um valor dentro da array, se existe devolve a posiçao, se nao devolve -1

