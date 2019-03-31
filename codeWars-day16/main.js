//Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

function fakeBin(x){

  let array = '';

  for(i = 0; i < x.length; i++) {

    if( x[i] < '5') {

      array += '0';

    }else if(x[i] >= '5') {

      array += '1';

    }

  }
  return array;



}
