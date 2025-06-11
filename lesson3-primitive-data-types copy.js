// Primitive data types

// Number, String, Boolean, Undefined, Null, Symbol, BigInt, Object

// String
let name = 'John';
console.log(name);
console.log(typeof name);

let name2 = new String('Vova');
console.log(name2);
console.log(typeof name2);

let obj = new Object();
console.log(obj);
console.log(typeof obj);

let obj2 = {
	prop1: 1,
	prop2: 'Vova',
	prop3: true,
	prop4: function() {}
};
console.log(obj2);
console.log(typeof obj2);

//! Auto-boxing - putting a primitive value into a wrapper of the correct type

let num1 = 123;
console.log(num1);
console.log(typeof num1);

let num2 = new Number(123);
console.log(num2);
console.log(typeof num2);

let str = 'Hello';
console.log(str);
console.log(typeof str);

let str2 = new String('Hello');
console.log(str2);
console.log(typeof str2);

console.log(typeof function() {})

