function printRectangle(rows,cols){
    for(let i=1;i<=rows;i++){
        let printeStar=" ";
        for(let j=1;j<=cols;j++){
            printeStar+='*';
        }
        console.log(printeStar) ;
    }
   
}
const star=printRectangle(4,5);
console.log(star);