const person={
    name:["Ajay","Gupta"],
    age:23,
    bio:function(){
        console.log(`${this.name[0]} ${this.name[1]} is ${this.age} year old`);

      },
      introduction: function(){
        console.log(`Hi I m ${this.name[1]}`);
      },
};