var a = 5;
var b = 10;

// Pattern 1
var tmp = a;
a = b;
b = tmp;

// Pattern 2
a = a + b;
b = a - b;
a = a - b;

// Pattern 3
(function(a_, b_) {
  a = b_;
  b = a_;
})(a, b);

// Pattern 4
b = [a, a = b][0];

// Pattern 5
a = a ^ b;
b = a ^ b;
a = a ^ b;

// Pattern 6
a = b + (b = a, 0);
