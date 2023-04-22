class Animal{
	breed;
	sound;
	constructor(){
		
	}
	constructor(nf, lt){
		this.breed = nf;
		this.sound = lt;
	}
}

let cow = new Animal("Desi Cow", "Moaaa");

console.log(cow.breed);
console.log(cow.sound);

let dog = new Animal();

/*
        constructor(nf, lt){
        ^^^^^^^^^^^

SyntaxError: A class may only have one constructor

*/