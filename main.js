// logAll([1,2,3,4,5]);
// => 1 2 3 4 5
function logAll(numArr) {
  var acc = '';
  for (var i = 0; i < numArr.length; i++){
      acc += numArr[i];
      acc += ' ';
  };
  console.log(acc);
};

// sum([1,2,3]);
// => 6
function sum(numArr) {
  var acc = 0;
  for (var i = 0; i < numArr.length; i++){
      acc += numArr[i];
  };
  console.log(acc);
  return acc;
};

// subtract([10,10,10]);
// => -30
function subtract(numArr) {
  var acc = 0;
  for (var i = 0; i < numArr.length; i++){
      acc -= numArr[i];
  };
  console.log(acc);
};

// largest([1,9,7]);
// => 9
function largest(numArr) {
  var large = numArr[0];
  for (var i = 1; i < numArr.length; i++){
    if (numArr[i] > numArr[i - 1])
      large = numArr[i];
};
console.log(large);
};

// smallest([20,19,40]);
// => 19
function smallest(numArr) {
  var small = numArr[0];
  for (var i = 1; i < numArr.length; i++){
    if (numArr[i] < numArr[i - 1])
      small = numArr[i];
};
console.log(small);
};

//average([10,20,30]);
// => 20
function average(numArr) {
  console.log((sum(numArr)/numArr.length));
};
