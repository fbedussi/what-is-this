//Hard binding
//`.call()` or `.apply()` provide a temporary binding, to get a permanent one, use `.bind`, that returns a new function with `this` permanently binded to the `.bind` argument:

function foo() {
	console.log( this.a );
}

var obj = {
	a: 2,
	foo: foo
};

setTimeout( foo.bind(obj), 100 );
