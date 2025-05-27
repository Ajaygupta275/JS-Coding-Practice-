//  Use switch case to print day of week.

function week(todayDay){
    switch(todayDay){
        case 1:
        console.log("Monday");
         break;
         case 2:
        console.log("Tuesday");
         break;
         case 3:
        console.log("Wednesday");
         break;
         case 4:
        console.log("Thursday");
         break;
         case 5:
        console.log("Friday");
         break;
         case 6:
         console.log("Saturday");
         break;
         case 7:
         console.log("Sunday");
         break;
           default:
           return("Invalid day number. Please enter a number from 1 to 7.");   
    }
}

week(3);