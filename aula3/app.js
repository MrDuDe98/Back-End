var greetMe = function() {
    console.log("Hello");
}
var greetWorld = function() {
    console.log("World!")
}

function log(fn){
    console.log("Invocação")
    fn();
}


greetMe();
greetWorld();
log(greetMe);
log(greetWorld);

var msg = require('./Log.js');

msg.log1.info('Hello Word');
msg.log2.update('Toop')