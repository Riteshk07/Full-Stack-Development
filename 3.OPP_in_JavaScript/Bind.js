let dog = {
	name: "Dog",
	bark: function(){
		console.log(this.name," is Barking");
	}
}

let parrot = {
	name: "Parrot",
	chirp: function(){
		console.log(this.name, " is chirping");
	}
}

let speakP = dog.bark.bind(parrot);
speakP();