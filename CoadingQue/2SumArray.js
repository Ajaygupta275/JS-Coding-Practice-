
// function sumArray(arr){
//     let sum=0;
//     for(let i=0;i<arr.length;i++){
//         sum+=arr[i];
//     }
//     return sum;
// }
// const arr=[1,2,4,6,3];
// console.log(sumArray(arr));

// Check Prime or not

// function checkPrime(num){
//    if(num<=1){
//     return false;
//    }
//    for(let i=2;i<num;i++){
//     if(i%num===0){
//         return false;
//     }
//     return true;
//    }

// }
// console.log(checkPrime(7));



function checkPrime(num){
    if(num<1){
        return false;
    }
    for(let i=2; i<num;i++){
        if(num%i===0){
            return false;
        }
    }
    return true;
}

console.log(checkPrime(7));