function Person(fn, ln, age){
	this.firstName = fn;
	this.lastName = ln;
	this.age = age;
}
Person("Rajkumar","Soni", 23);
// Here i want to add more properties.
// than i have to use prototype here.

// Method_name.prototype.new_property = value
Person.prototype.nationality = "INDIAN";

console.log(Person);	// there is no change in Person function

console.log(Person.prototype); // we see here the property nationality added into the prototype


