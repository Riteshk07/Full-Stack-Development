// SuperType constructor function
function SuperType(){
	this.name = "Ritesh";
}

// superType prototype
SuperType.prototype.getSuperName = function(){
	return this.name+" Koshta";
}

// Subtype prototype function
function SubType(){
	this.age =23;
}

// Inherit the properties from SuperType
SubType.prototype = new SuperType();

// Add new Properties to SubType prototype
SubType.prototype.getSubAge = function(){
	return this.age+"~~";
}

// Create a subtype Object 
var subObj = new SubType();
console.log(subObj.name);
console.log(subObj.age);
console.log(subObj.getSuperName());
console.log(subObj.getSubAge());