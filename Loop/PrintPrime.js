// Print all prime numbers in a given range.

function prime(num){
    if(num<=1){
        return false;
    }
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i===0)
            return false;
    }
    return true
    
}

function primeNumberCheck(start,end){
    for(let i=start;i<=end;i++){
        if(prime(i)){
            console.log(i);
        }
    }
}

primeNumberCheck(0,100);
