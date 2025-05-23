function printPattern(n){
    let str = "";
    for(let i=0; i<n;i++){
        for(let j=0; j<n;j++){
            str +="*"
        }
        console.log(str)
         str=""
    }
}
console.log(printPattern(5));