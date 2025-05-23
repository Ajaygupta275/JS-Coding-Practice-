// function factorial(number){
//     var product=1;
//     for(var i=number;i>=1;--i){
//         product*=i;
//     }
//     return product;
// }

// console.log (factorial(4));


function curve(arr,amount){
    for(var i=0;i<arr.length;i++){
        arr[i]+=amount;
    }
}

var grade=[77,73,74,81,90];
curve(grade,5);
console.log(grade);