// the benefit of the call method is we can pass the extra Arguments 

let dog = {
	name: "Dog",
	bark: function(place,age){
		console.log(this.name," is Barking. i live in ",place);
		console.log("I am ",age," month old");
		
	}
}

let parrot = {
	name: "Parrot",
	chirp: function(){
		console.log(this.name, " is chirping");
	}
}

dog.bark.call(parrot, "USA",5);
dog.bark.apply(parrot,["India",10]);