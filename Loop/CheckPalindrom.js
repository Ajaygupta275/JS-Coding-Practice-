// Check if a number is a palindrome.

function checkPlaindrome(num){
    const original=num.toString();
    const reverse=original.split('').reverse().join('');
    return original===reverse;
}
  const number='level'
  if(checkPlaindrome(number)){
    console.log(`${number} is Palindrome`);
    }else{
       console.log(`${number} is Palindrome`);   
    }
