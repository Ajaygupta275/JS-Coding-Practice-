function reverse(num){
    let reverse=0;
    while(num>0){
        let digit=num%10;
        reverse=reverse*10+digit;
        num=Math.floor(num/10);
    }
    return reverse;
}
let number=12345;
const check=reverse(number);
console.log(check);