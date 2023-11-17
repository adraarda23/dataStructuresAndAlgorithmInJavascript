function findLongestSubstring(str) {
    let start = 0;
    let maxLength = 0;
    let charIndexMap = {};

    for (let end = 0; end < str.length; end++) {
        const char = str[end];
        if (charIndexMap[char] >= start) {
            start = charIndexMap[char] + 1;
        }
        charIndexMap[char] = end;
        maxLength = Math.max(maxLength, end - start + 1);
        console.log(start,end,maxLength,charIndexMap);
    }
    
    return maxLength;
}
