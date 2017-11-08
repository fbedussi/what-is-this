//2. Implicit binding
//If a function is called as an object method, `this` refers to that object. 

function foo() {
	console.log( this.a );
}

var obj = {
	a: 2,
	foo: foo
};

obj.foo();
