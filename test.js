function countDuplication(arr){
  var value = 3; 
  var arrLength = arr.length;
  var dupeCount = 0;

  arr.sort();

  for(var i = 0; i < arrLength; i++){
    if (arr[i] === arr[i + 1]){
      arr = arr.filter(function(item) { 
        return item!== value; 
      });
      dupeCount +=1; 
      arrLength = arr.length;
      i = 0;
    }
  }
  console.log(dupeCount);
}


countDuplication([1,2,3,4,5,2]);