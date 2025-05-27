//  Use == vs === with examples.




//Check Vowel or Not

function CheckVowel(char){
    const lowerChar=char.toLowerCase();

    if(!/[a-z]/.test(lowerChar)|| char.length!==1){
        console.log("Please enter a single alphabet char");
        return;
    }
    if("aeiou".includes(lowerChar)){
        console.log(`'${char}' is a Vowel.`);
    }else{
        console.log(`'${char}' is a Constant.`);
    }

}

  console.log(CheckVowel('a'));