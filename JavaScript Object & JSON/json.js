// JSON object
const data = {
    "name": "John",
    "age": 22,
    "hobby": {
	"reading" : true,
	"gaming" : false,
	"sport" : "football"
    },
    "class" : ["JavaScript", "HTML", "CSS"],
    // "agile" : function(){
    //     console.log("Hello World...")
    // }, 
    "mecculam":"raaj"
}

// accessing JSON object
console.log(data.name); // John
console.log(data.hobby); // { gaming: false, reading: true, sport: "football"}

console.log(data.hobby.sport); // football
console.log(data.class[1]); // HTML
// console.log(data.agile());
console.log(data.mecculam);

// json object
const jsonData = '{ "name": "John", "age": 22 }';

// converting to JavaScript object
const obj = JSON.parse(jsonData);

// accessing the data
console.log(obj); // John

const jobj = JSON.stringify(obj);

console.log(jobj);

