const m1 =  new Map([
    ["rahul",33],
    ["mohan",31],
    ["sohan",20],
]);

const mp2 = new Map();

mp2.set("apple",200);
mp2.set("banana",300);
mp2.set("orenge",400);

console.log(m1);
console.log(mp2);

const x = m1.get("rahul");

console.log(x);

console.log(mp2.has("black"));

console.log(m1 instanceof Map);

console.log(m1.delete("sohan"));
console.log(m1);