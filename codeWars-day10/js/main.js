function reverse (str){
  var complete = []
  var stuff = str.split(' ')
  console.log(stuff)
  for (var i=0; i<stuff.length; i++){
    complete.push(stuff[i].split('').reverse().join(''))
  }
  return complete.join(' ')
}
