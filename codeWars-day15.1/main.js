// Define a function that removes duplicates from an array of numbers and returns it as a result.
//
// The order of the sequence has to stay the same.

function distinct(a) {
  let myArray=[ ]
  for(let i = 0; i< a.length; i++){
  if (myArray.indexOf(a[i])==-1){
    myArray.push(a[i])
  }
}
return myArray
}
