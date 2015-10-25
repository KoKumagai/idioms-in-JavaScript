var inherit = function(subClass, superClass) {
  Object.setPrototypeOf(subClass.prototype, superClass.prototype);
};


// Super Class
var Animal = (function() {

  // Constructor
  var Animal = function(name) {
    this.name = name;
    console.log("A new animal has been created");
  };

  var p = Animal.prototype;

  p.eat = function() {
    console.log('An animal eating');
  };

  p.sleep = function() {
    console.log('An animal sleeping');
  };

  return Animal;
})();


// Sub Class
var Bird = (function() {

  // Constructor
  var Bird = function(name) {
    Animal.call(this, name);
    console.log("A new bird has been created");
  };

  inherit(Bird, Animal);

  var p = Bird.prototype;

  // Override
  p.sleep = function() {
    Animal.prototype.sleep.call(this);
    console.log('A bird sleeping');
  };

  p.fly = function() {
    console.log('A bird flying');
  };

  return Bird;
})();


var animal = new Animal(); // A new animal has been created
animal.eat(); // An animal eating
animal.sleep(); // An animal sleeping

var bird = new Bird(); // A new animal has been created  A new bird has been created
bird.eat(); // An animal eating
bird.sleep(); // An animal sleeping  A bird sleeping
bird.fly(); // A bird flying
