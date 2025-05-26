function leapYear(years){
    if((years%400===0 && years%400!==0 )|| (years%4===0)){
       return true;
    }
       return false;
}

const years=2004;
console.log(leapYear(years));