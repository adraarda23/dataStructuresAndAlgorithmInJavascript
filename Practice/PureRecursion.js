//It means it cannot supported by other helper functions
//For Example Its Pure Function
function collectOddValues(arr){
    let newArr = [];
    
    if(arr.length === 0) {
        return newArr;
    }
        
    if(arr[0] % 2 !== 0){
        newArr.push(arr[0]);
    }
        
    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}


//Another Basic Pure Recursion
function power(x,y){
    if(y===0) return 1;
    else{
        return (x*power(x,y-1));
    }
}

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60
function productOfArray(arr){
    if(arr.length==1){
        return arr[0];
    }
    else{
        arr[1]*=arr[0];
        arr.shift();
        return productOfArray(arr);
    }
}

function recursiveRange(x){
    if(x==1) return 1;
    else{
        return x+recursiveRange(x-1);
    }
 }

 function fib(n) {
    if (n <= 1) {
        return n;
    } else {
        return fib(n - 1) + fib(n - 2);
    }
}