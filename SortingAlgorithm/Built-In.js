const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// Expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// Expected output: Array [1, 100000, 21, 30, 4]



//WARNING


//.sort must take a compare func for correct result
//For Example
function compare(num1,num2){
    return num1-num2;
}

const newArray =array1.sort(compare);
console.log(newArray);

