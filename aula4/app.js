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

        //exercicio 3.