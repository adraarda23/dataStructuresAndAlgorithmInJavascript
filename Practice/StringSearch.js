function naiveSearch(long, short){
    var count = 0;
    for(var i = 0; i < long.length; i++){
        for(var j = 0; j < short.length; j++){
           if(short[j] !== long[i+j]) break;
           if(j === short.length - 1) count++;
        }
    }
    return count;
}

var returnValue =naiveSearch("kol tol bol dol yoloblodlolasdoasda", "lod");
//console.log(returnValue);

function slidingSearch(long,short){
    var startingPoint=0;
    var head=0;
    var endPoint=long.length-1;
    var wordCount=0;
    var keyCount=0;
    var shortLength=short.length;
    while(startingPoint<endPoint){
        if(keyCount===shortLength){
            keyCount=0;
            wordCount++;
            startingPoint=head;
        }
        if(long[head]==short[keyCount]){
            head++;
            keyCount++;
        }
        else{
            startingPoint++;
            head=startingPoint;
            keyCount=0;
        }

    }
    return wordCount;
}
var testValue = slidingSearch("gegegelge","gel");
//console.log(testValue);