



let i=1;
do{
    i++;
    console.log(i)

}while(i<=10);

// Print even numbers from 1 to 50.

for(let i=1;i<=50;i++){
   let check=i%2==0;
   console.log(check);
}

function check(start,end){
    for(let i=start;i<=end;i++){
        let checks=i%2==0;
        console.log(checks);
    }

}
check(1,50);

// Create a multiplication table of a number.


function mul(n){
    console.log('Multiple Number table');
    for(let i=1;i<=10;i++){
        console.log(`${n} x ${i}=${n*i}`);

    }
}
mul(3)

// Calculate the sum of first N natural numbers.
function sumNatural(n){
   let sum=0;
   for(let i=1;i<=n;i++){
    sum+=i;
   }
   return sum;
}
const result=sumNatural(10);
console.log(result,"Its natural number show");