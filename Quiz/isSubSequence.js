function isSubsequence(str1,str2) {
    const targetLength=str1.length;
    let counter=0;
  
    for(let i=0;i<str2.length;i++){
      if(str2[i]==str1[counter]){
          counter++;
      }
    }
    return(targetLength==counter);
}