
function isExistence(obj) {
  if(obj != null) {
    console.log("Exists");
  } else {
    console.log("Does not exist");
  }
}

var nullVariable = null;
var undefinedVariable = undefined;
var NaNVariable = NaN;
var emptyStringVariable = '';
var zeroVariable = 0;
var falseVariable = false;

isExistence(nullVariable);        // Does not exist
isExistence(undefinedVariable);   // Does not exist
isExistence(NaNVariable);         // Exists
isExistence(emptyStringVariable); // Exists
isExistence(zeroVariable);        // Exists
isExistence(falseVariable);       // Exists
