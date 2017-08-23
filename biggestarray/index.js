
function largestOfFour(arr) {
 
  var result = [];
  
  
  for(var i=0; i<arr.length; i++){
     var a = 0;
    for(var j=0; j<arr[i].length; j++){  
      if(arr[i][j] > a){
        a = arr[i][j];
      }
    }result.push(a);
  }
  return result;
}
document.write(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));