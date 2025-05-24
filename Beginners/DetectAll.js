function detectType(value){
    if(value===null) return null;
    if(Array.isArray(value)) return "array";
    return typeof value;
}

console.log(detectType("hello"));     // "string"
console.log(detectType(123));         // "number"
console.log(detectType(null));        // "null"
console.log(detectType([1, 2, 3]));   // "array"
console.log(detectType({ key: "val" })); // "object"