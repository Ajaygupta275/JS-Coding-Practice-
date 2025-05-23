function SecondPattern(n){
   let pattern="";
   for(let i=0;i<n;i++){
        for(let j=0; j<i+1;j++){
            pattern +="*"
        }
        console.log(pattern);
        pattern=""

   }
}
console.log(SecondPattern(4))