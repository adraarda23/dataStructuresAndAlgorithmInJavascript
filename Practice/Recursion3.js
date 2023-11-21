function capitalizeFirst(arr, index = 0) {
    if (arr.length - 1 === index) {
        arr[index] = arr[index][0].toUpperCase() + arr[index].slice(1);
        return arr;
    }

    arr[index] = arr[index][0].toUpperCase() + arr[index].slice(1);
    return capitalizeFirst(arr, index + 1);
}

function flatten(oldArr){
    var newArr = []
        for(var i = 0; i < oldArr.length; i++){
          if(Array.isArray(oldArr[i])){
                newArr = newArr.concat(flatten(oldArr[i]))
          } else {
                newArr.push(oldArr[i])
          }
    } 
    return newArr;
  }