// . Write a program for a simple calculator.

function calculate(num1,num2,operator){
    let result
    if(operator==="+"){
        result=num1+num2;
    }else if(operator==="-"){
        result=num1-num2;
    }else if(operator==="*"){
        result=num1*num2;
    }else if(operator==="/"){
        
        if(num2===0){
           return "Error: Cannot divide by zero";
        }
        result=num1/num2;

    }else{
        return "Invalid Operator";
    }
    return `Result: ${result}`;

    
}

console.log(calculate(10, 5, "+"));  // Result: 15
console.log(calculate(10, 5, "-"));  // Result: 5
console.log(calculate(10, 5, "*"));  // Result: 50
console.log(calculate(10, 5, "/"));  // Result: 2
console.log(calculate(10, 0, "/"));  // Error: Cannot divide by zero
console.log(calculate(10, 5, "%"));  // Invalid operator
