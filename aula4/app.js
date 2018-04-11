//Ficha4


        //exercicio 2.
var obj = {
    name: "Marco",
    age: 19,
    gender: "M"
};
var json = JSON.stringify(obj);



    //  a.
console.log(json);

    //  b.
var text = '{ "name":"Marco", "age":"19", "gender":"Masculino" }';
var str = JSON.parse(text);
console.log(str.name + ", " + str.age + ", " + str.gender);
console.log(" ");
console.log("EXERCICIO 5");
console.log(" ");
var Emitter = require("./emitter");
var eventConstants = require ("./constants");
var emtr = new Emitter();

emtr.on(eventConstants.events.FILESAVED, function(){
    console.log("Somewhere, someone said hello?");
});

emtr.on(eventConstants.events.GREET, function(){
    console.log("A greeting ocured");
});

emtr.emit(eventConstants.events.FILESAVED);
emtr.emit(eventConstants.events.GREET);