//Create a function isDivisible(n, x, y) that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.
function isDivisible(n, x, y) {
console.log(n)
 //checking if n is divisible by both x and y
if (n % x===0 && n % y=== 0){
return true;
}else{
return false}

}
