// call
function player(name, age) {
    this.name = name;
    this.age = age;
}

function footballPlayer(name, age) {
    player.call(this, name, age); // this = footballPlayer
}
function tennisPlayer(name,age){
    player.call(this, name, age); // this = tennisPlayer
}
var football = new footballPlayer("Ronaldo", 35);
var tennis = new tennisPlayer("Djokovic", 32);

console.log(football);
console.log(tennis);

// return this
function showMessage(message)
{
    this.message = message;
    return this;
}
 
var website = showMessage.call(showMessage, "digidinos.com");

console.log(website); //in ra toàn bộ nội dung trong showMessage

console.log(showMessage.message);

// anonymous function
(function(name) {
    console.log(name);
}).call(this, "digidinos.com");

// call: sau this là các tham số
// apply: sau this là các đối tượng
var sayHello = function(name, message){
    console.log(message + name);
}

sayHello.call(this, 'World', 'Hello ' );
sayHello.apply(this,['le monde', 'Bonjour ']);