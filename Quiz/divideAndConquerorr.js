function binarySearch(arr, val, start = 0, end = arr.length - 1) {
    if (start > end) {
        return -1;
    }

    const middle = Math.floor((start + end) / 2);

    if (arr[middle] === val) {
        return middle;
    } else if (arr[middle] > val) {
        return binarySearch(arr, val, start, middle - 1);
    } else {
        return binarySearch(arr, val, middle + 1, end);
    }
}

console.log(binarySearch([1, 2, 3, 4, 5], 5));
