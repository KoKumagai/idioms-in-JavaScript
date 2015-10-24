var Person = (function() {

  // Constructor
  var Person = function(firstName, lastName) {
    this.firstName_ = firstName;
    this.lastName_ = lastName;
  };

  var p = Person.prototype;

  // Methods
  p.getFirstName = function() {
    return this.firstName_;
  };

  p.getLastName = function() {
    return this.lastName_;
  };

  return Person;
})();


var ko = new Person('Ko', 'Kumagai');

console.log(ko.getFirstName()); // 'Ko'
console.log(ko.getLastName());  // 'Kumagai'
