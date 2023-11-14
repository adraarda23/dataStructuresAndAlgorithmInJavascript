function findNumber(arr, target) {
    if (arr.length === 0) {
      return -1;
    }
  
    let start = 0;
    let end = arr.length - 1;
  
    while (start <= end) {
      const mid = Math.floor((start + end) / 2);
  
      if (arr[mid] === target) {
        return mid;
      } else if (arr[mid] < target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  
    return -1;
  }
  
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const targetNumber = 5;
  const index = findNumber(array, targetNumber);
  
  if (index !== -1) {
    console.log(`Number ${targetNumber} found at index ${index}`);
  } else {
    console.log(`Number ${targetNumber} not found in the array`);
  }
  