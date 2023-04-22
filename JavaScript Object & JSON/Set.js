const x  =  new Set(["raju", "mohan", "sohan"]);
const z = x;

x.add("rohan");

let y = "seema";

x.add(y);

console.log(x);
console.log(x.size);
console.log(x.delete("sohan"));
console.log(x.has("rohan"));

// x.forEach(function(value){
//     console.log(value+" in foreach");
// })

// const itr = x.values()

// console.log(itr);
// console.log(z);

// for(let i of itr){
//     console.log(i);
// }

console.log(x.keys());
console.log(x.entries());

console.log(typeof x)
console.log(x instanceof Set)



