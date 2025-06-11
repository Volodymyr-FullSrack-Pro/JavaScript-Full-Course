let log = console.log;
log(true ?? false);

fd();
fe();
log(fe);

// log(v1); // undefined
var v1;

log(L1); // ReferenceError - because we are inside the temporal dead zone
let L1; // undefined is assigned this line

function fd() {
	// function declaration is hoisted
	let x; // to avoid the global var called x
	log('function declaration')
	x = 'hello x'; // global var called x
};

var fe = function e() {
	log('function expression')
}
