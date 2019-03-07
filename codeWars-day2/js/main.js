countSheeps[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]

function countSheeps(arrayOfSheep) {
  //counter to keep track of sheep in array
  total=0
  //loop to go through all the sheep in the array
  for( i=0; i<arrayOfSheep.length; i++){
  //conditional
  if (arrayOfSheep[i]===true){
      total++;
  }

  }
  return total;
}
