// Fibonacci Series

// function Series(num){
//     let num1=0,num2=1,nextNum;
//     console.log("Fibonacci Sequence:");
//     for(let i=1;i<=num;i++){
//         console.log(num1);
//         nextNum=num1+num2;
//         num1=num2;
//         num2=nextNum;
//     }
// }
// Series(7);






// function Series(n){
//     let num1=0,num2=1,nextnum;
//     console.log("Fibonacci Sequence");
//     for(let i=1; i<=n; i++){
//         console.log(num1);
//         nextnum=num1+num2;
//         num1=num2;
//         num2=nextnum;
//     }
// }

// Series(7);



// Factorial series

// function factorial(n){
//     let answer=1;
//     for(let i=2; i<=n;i++){
//         answer*=i;

//     }
//     return answer;
// }
// console.log(factorial(3));




// Write a Program to count the occurrences of a character in a string in JavaScript?

// function check(str,char){
//      let count=0;
//      for(let i=0;i<str.length;i++){
//         if(str[i]===char){
//             count ++;
//         }
//      }
//      return count;
// }

// console.log(check('GeeksForGeeks', 'e'))




function checkOccurance(str,letter){
     let count=0;
    for(let i=0;i<=str.length;i++){
        if(str[i]===letter){
            count++;
        }
    }
    return count;
}

console.log(checkOccurance('GeeksForGeeks', 'G'));