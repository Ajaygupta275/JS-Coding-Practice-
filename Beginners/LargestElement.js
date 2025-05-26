// . Find the largest of three numbers.

let Check=(a,b,c)=>{
    if(a>=b && a>=c){
        return a;
    }else if(b>=a && b>=c){
        return b;
    }else{
        return c;
    }
}
console.log(Check(10,2,8))