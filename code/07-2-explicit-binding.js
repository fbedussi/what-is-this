//3. Explicit binding
//It is possible to explicitly bind `this` to a specific context using `.call()` or `.apply()` methods that are available to every JS function.

function foo() {
	console.log( this.a );
}

var obj = {
	a: 2
};

foo.call( obj );