const student = {
    name:"Ritesh",
    age:20,
    eligibility :function(){
        if(this.age>18){
            return "Yes"
        }
    },
    hobby :{
        sports:"playing Cricket",
        music: "playing Guitar",
    }

}

console.log(student.name);
console.log(student["age"]);
// console.log(student.methodKey());
console.log(student.eligibility());
console.log(student.eligibility);
console.log(student.hobby.music);

student.collage = "Global"
student.percent = function(){
    return 84;
}

console.log(student.collage);
console.log(student.percent());