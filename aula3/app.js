var greetMe = function() {
    console.log("Hello");
}
var greetWorld = function() {
    console.log("World!")
}

function log(fn){
    return greetMe;
}


greetMe();
greetWorld();
log(greetMe);