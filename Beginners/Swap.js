// Swap two variables without using a third variable. (Correct)

let a=8;
let b=3;
a=a+b;
b=a-b;
a=a-b;
console.log(a,b);