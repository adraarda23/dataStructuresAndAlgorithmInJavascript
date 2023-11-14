/* 
'',''
'aaz','zza'
'anagram','nagaram'
"rat","car"
'awesome','awesom'
'qwerty','qeywrt'
'texttwisttime,'timetwisttext'
*/

const value1="anagram";
const value2="nagaram";
let dict1 ={};
let dict2 ={};


const isAnagram =(value1,value2)=>{
    if(value1.length!=value2.length)
        return false;
        createDict(value1,dict1);
        createDict(value2,dict2);
        return compareDicts(dict1,dict2);

}

const createDict =(value,dict)=>{
    for(let i in value){
        if(value[i] in dict){
            dict[value[i]]++;
        }
        else{
            dict[value[i]] =1;
        }
    }
}
const compareDicts = (dict1, dict2) => {
    const keys1 = Object.keys(dict1);
    const keys2 = Object.keys(dict2);
    if (keys1.length !== keys2.length) {
      return false;
    }
    for (let key of keys1) {
      if (dict1[key] !== dict2[key]) {
        return false;
      }
    }
    return true;
  };

  console.log(isAnagram(value1,value2));

