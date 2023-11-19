function reverse(str) {
    if (str.length <= 1) {
        return str;
    }
    return reverse(str.slice(1)) + str[0];
}


function isPalindrome(str) {
    if (str.length <= 1) {
        return true;
    }
    if (str[0] === str[str.length - 1]) {
        return isPalindrome(str.slice(1, -1));
    } else {
        return false;
    }
}

function someRecursive(array, callback) {
    if (array.length === 0) return false;
    if (callback(array[0])) return true;
    return someRecursive(array.slice(1),callback);
}