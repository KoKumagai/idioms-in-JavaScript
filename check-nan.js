
function myIsNaN(obj) {
  if(obj !== obj) {
    console.log("Is NaN");
  } else {
    console.log("Is not NaN");
  }
}

// equivalent to
//  function myIsNaN(obj) {
//    if (isNaN(obj) && typeof obj === 'number') {
//      console.log("Is NaN");
//    } else {
//      console.log("Is not NaN");
//    }
//  }

var NaNVariable = NaN;
var nullVariable = null;
var undefinedVariable = undefined;
var emptyStringVariable = '';
var zeroVariable = 0;
var falseVariable = false;

myIsNaN(NaNVariable);         // Is NaN
myIsNaN(nullVariable);        // Is not NaN
myIsNaN(undefinedVariable);   // Is not NaN
myIsNaN(emptyStringVariable); // Is not NaN
myIsNaN(zeroVariable);        // Is not NaN
myIsNaN(falseVariable);       // Is not NaN
