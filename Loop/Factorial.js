function factorial(num){
    if(num<0){
        console.log('Fcatoria Number neagive')
    }
    let factorial=1;

    for(let i=1;i<=num;i++){
        factorial*=i;
    }
    return factorial;
}

const number=5;
console.log("Factorial of", number, "is", factorial(number))