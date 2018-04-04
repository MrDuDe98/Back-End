//exercicio 3


function Person(first, last) {

    this.firstName = first;
    this.lastName = last;
}


Person.prototype.greet = function() {
    console.log("Hello  " + this.firstName + " " + this.lastName + " " + this.age);
}
Person.prototype.age;

var marco = new Person("Marco", "Rodrigues");
marco.age = 19;
marco.greet ();

var john = new Person("John", "Doe");
john.age = 12;
john.greet ();

console.log(__proto__);
console.log(marco.__proto__);
console.log(john.__proto__ == marco.__proto__);