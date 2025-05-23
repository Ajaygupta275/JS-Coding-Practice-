//Capitalize First Letter of Each Word in String
//Write a JavaScript program to capitalize the first letter of each word in a given string. 
// Example ajay gupta ,Ajay Gupta


// function letter(str){
//     return str.split(" ")
//     .map(word=>word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" "); 
// }

// const inputString = "hello world, this is a test";
// const result = letter(inputString);
// console.log(result);


// Question Number 50 Question

// Write a JavaScript application that transforms a numerical value into hours and minutes.


// function timeConvert(num){
//     let hours=Math.floor(num/60);
//     let min=num%60;
//     return hours +":"+min;
// }
// console.log(timeConvert(71));



// Write a JavaScript program to convert letters of a given string alphabetically.
// Question 52

function sortLetter(str){
    return str.split('').sort().join('')
}
console.log(sortLetter("Python"));

