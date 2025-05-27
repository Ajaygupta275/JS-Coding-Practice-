//Logical And Operator 

const ages=20;
const emId=false;

if(ages>=18 && emId){
    console.log("You are Eligible for these ");
    }
    else{
         console.log("Not Eligible");
    }


//Logical OR Operator 
function check(email,username){
   if(email || username){
    return true;
   }
   return false;

}
check();


//Logical OR Operator 

// const isLoggedIn=false;

// if(!isLoggedIn){
//     console.log("Please log in");
// }


// RealWorld Problem


const admin=false;
const age=19;
const isVerfied=true;

if(admin || age>=18 && isVerfied){
    console.log("Is Granted For the Login");

}else{
    console.log('is not Grantend');
}