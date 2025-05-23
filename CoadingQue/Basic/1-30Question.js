// 29 Check if Three Integers are in Range 50–99

// function check_three_nums (num1,num2,num3){
//     return (num1>=50 && num1<=99)||(num2>=50 && num2<=99)||(num3>=50 && num3<=99);
// }
// console.log(check_three_nums(50, 90, 99));
// console.log(check_three_nums(5, 9, 199));
// console.log(check_three_nums(65, 89, 199));

// 21 Add ' Py' to Start of String if Not Present
// function check(str1){
//     if(str1===null||str1===undefined||str1.substring(0,2)==="Py"){
//         return str1;
//     }
//     return "Py"+str1;

// }

// console.log(check("Python"));
// console.log(check("thon"));


// Remove Character at Specified Position in String

// function RemoveArray(str,postion){
//     return str.substring(0,postion)+ str.substring(postion+1);
// }

// console.log(RemoveArray("HelloWorld", 5))

// 23Swap First and Last Characters in String
//   Swap Ajay Values

// function swap(str){
//     if(str.length<=1){
//         return str;
//     }

//      mid=str.substring(1,str.length-1);
//     return (str.charAt(str.length-1))+mid+str.charAt(0)

// }

// console.log(swap('a'));
// console.log(swap('abc'));

// function Double(str){
//     let first=str.substring(0,1);
//     return first+str+first;
// }
// console.log(Double("ab"));
// console.log(Double("abc"));
// console.log(Double("a"));



// function check(num1){
//     if(num1%3===0||num1%7===0){
//         return true;
//     }
//     return false;


// }
// console.log(check(13));


// Question3
var today =new Date();
console.log(today)
var dd=today.getDate();
var mm=today.getMonth()+1;
var yyyy=today.getFullYear();

if(dd<10){
    dd="0"+dd;
}
if(mm<10){
    mm="0"+mm;
}

// Format the date as mm-dd-yyyy and log it
today = mm + '-' + dd + '-' + yyyy;
console.log(today);

// Format the date as mm/dd/yyyy and log it
today = mm + '/' + dd + '/' + yyyy;
console.log(today);

// Format the date as dd-mm-yyyy and log it
today = dd + '-' + mm + '-' + yyyy;
console.log(today);

// Format the date as dd/mm/yyyy and log it
today = dd + '/' + mm + '/' + yyyy;
console.log(today); 


