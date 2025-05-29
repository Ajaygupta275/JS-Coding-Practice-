function fibonacci(num){
    let firstNum=0,secondNum=1;

    for(let i=1;i<=num;i++){
        console.log(i);
        let nextValue=firstNum+secondNum;
        firstNum=secondNum;
        secondNum=nextValue;

    }
    
}
fibonacci(10);