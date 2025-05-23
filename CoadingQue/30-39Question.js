// 30 Find The min arr in array

// function checkArray(arr){
//    let min=arr[0];
//    for(let i=1;i<arr.length;i++){
//     if(arr[i]<min){
//         min=arr[i];
//     }
//    }
//    return min;
// }

// console.log(checkArray([6,2,7,3,8]));


// Use inbulit function
// function checkArray(arr){
//    return Math.min(...arr);
// }
// console.log(checkArray([-1,4,2,5,8]))




// Question 31
//  Check if a String Contains Another String in JavaScript?

// function checkString(str,subString){
//     return str.indexOf(subString) !== -1;
// }
// console.log(checkString('GeeksForGeeks', 'For'))


// Find the Longest Word in a String in JavaScript?

// function longest(str){
//     const words=str.split('');
//     let longest= "";
//     for(let word of words){
//          if(word.length>longest.length){
//             longest=word;
//          }
//     }
//     return longest;
// }

// console.log(longest('GeeksForGeeks is great'))

// Recursion Factorial
function factorial(n){
    if(n===0 || n===1)
        return 1;

        return n*factorial(n-1);
    

}
console.log(factorial(4));
console.log(factorial(1));
