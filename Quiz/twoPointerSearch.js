function countUniqueValues(arr){
    if (arr.length===0){
        return 0;
    }
    let left =0;
    let right =1;
    let uniqueCount=1;
    
    while (right<arr.length){
        if(arr[left]!=arr[right]){
            uniqueCount++;
            left=right;
        }
        right++;
    }
    return uniqueCount;
  }

console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])); //7
  