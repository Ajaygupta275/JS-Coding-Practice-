// Create an object and access its properties.

const students={
    firstName:"Ajay",
    lastName:"Gupta",
    class:"Medal",
    fullName:function(){
         return this.firstName +" " + this.lastName
    }
}

console.log(students.fullName());


// Template Literal


    const name="Ajay";
    const last="Gupta";
    const occupation="No Job";
    const life="Alone"


    const student=(`My name is ${name} and last name is ${last} occupation is ${occupation} and life is ${life}`);
    console.log(student)
   
