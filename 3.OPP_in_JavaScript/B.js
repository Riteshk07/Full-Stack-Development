class Animal{
	breed;
	sound;
	constructor(nf, lt){
		console.log("Object Created");
		this.breed = nf;
		this.sound = lt;
	}
}

let cow = new Animal("Desi Cow", "Moaaa");

console.log(cow.breed);
console.log(cow.sound);