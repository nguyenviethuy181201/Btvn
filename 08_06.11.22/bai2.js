const result1 = [];
const result2 = [];
const result3 = [];
const arr = [ 25, 50, 43, 36, 31, 26, 24, 19, 28, 24,  4, 18, 16, 48, 47, 49, 42, 15,  3, 16 ];
for( let i = 0; i < arr.length; i++){
    const abc = arr.filter(item => item === arr[i]);
    if(abc.length > 1){
        result1.push(i);
    }
}
for(let i = 0; i < result1.length - 1; i++){
    if(arr[result1[i]] === arr[result1[i + 1]]){
        result2.push(result1[i + 1])
    }
}
for(let i = 0; i < arr.length; i++){
   if( i!== 9 && i!== 19){
    result3.push(arr[i]);
   }
}
console.log(result3);
