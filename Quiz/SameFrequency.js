function sameFrequency(a,b){
    a=a.toString();
    b=b.toString();
    if(a.length!=b.length){
        return false;
    }
    let mul2=1,mul1=1,sum1=0,sum2=0;
    for(let index in a){
        sum1+=parseInt(a[index]);
        sum2+=parseInt(b[index]);
        mul1*=parseInt(a[index]);
        mul2*=parseInt(b[index]);
    }
    if(mul2==mul1 && sum2==sum1){
        return true;
    }
return false;
}