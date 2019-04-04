// Complete the function which converts hex number (given as a string) to a decimal number.


 function hexToDec(hexString) {
   //parseInt tries to give you a number out of arbitrary input. If it finds anything meaningful, it returns i. You can optionally provide second argument representing the radix to be used for parsing. If you don't, parseInt tries to guess it from the prefixes.

   return parseInt(hexString, 16)
}
 //The parseInt() function parses a string and returns an integer.The radix parameter is used to specify which numeral system to be used, for example, a radix of 16 (hexadecimal) indicates that the number in the string should be parsed from a hexadecimal number to a decimal number.
