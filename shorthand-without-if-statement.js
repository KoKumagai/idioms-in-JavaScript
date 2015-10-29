var obj = { sayHello: function() { console.log('Hello!!'); } };

// shorthand
obj && obj.sayHello && obj.sayHello(); // Hello!!

// equivalent to
if(obj) {
    if(obj.sayHello) {
        obj.sayHello(); // Hello!!
    }
}
