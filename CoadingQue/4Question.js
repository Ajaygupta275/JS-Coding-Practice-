function sortedArray(arr){
    let temp;
for(let i=0;i<=arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]>arr[j]){
          temp=arr[i];
          arr[i]=arr[j];
          arr[j]=temp;
        }
    }
}
return arr;
}

console.log(sortedArray([5, 3, 8, 1]))