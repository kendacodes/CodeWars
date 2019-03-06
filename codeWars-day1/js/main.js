//Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

//The binary number returned should be a string.

function addBinary( a, b ){
  var sum = a + b;
   var binary = '';
  while ( sum > 0 ){
  binary = ( sum % 2 ) + binary; sum = Math.floor( sum / 2 ); 
  }
  return binary;
}
 console.log(addBinary(8,8))
