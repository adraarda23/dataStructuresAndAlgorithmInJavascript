function minSubArrayLen(arr,num){
    let head=0;
    let tail=0;
    let total=0;
    let smallestNumber = Infinity;
    while (head < arr.length) {
        
        if (total < num &&tail<arr.length) {
            total += arr[tail];
            tail++;
        } else if (total >= num) {
            if (smallestNumber > tail - head) {
                smallestNumber = tail - head;
            }
            total = total - arr[head];
            head++;
        } else {
            break;
        }
        console.log(head,tail,total,smallestNumber);
    }
    return smallestNumber === Infinity ? 0 : smallestNumber;}

