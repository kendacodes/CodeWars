// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot seperating them.

// It should look like this:
function abbrevName(name){

  let nameArray = name.split(" ")
   let firstInit = nameArray[0].charAt(0).toUpperCase();
  let lastInit = nameArray[nameArray.length-1].charAt(0).toUpperCase();
 return firstInit +"."+lastInit;

}
