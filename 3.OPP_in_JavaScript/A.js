class Animal{
	numOfFeet;
	lenOfTail;
	constructor(){
		console.log("Object Created");
	}
}

let dog = new Animal();
dog.numOfFeet = 4;
dog.lenOfTail = 1.1;

console.log(dog.numOfFeet);
console.log(dog.lenOfTail);