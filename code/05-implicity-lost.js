//Alert: implicitly lost
//If the function is not called but simply passed, when it will be called  the `this` reference is lost:

function foo() {
	console.log( this.a );
}

var obj = {
	a: 2,
	foo: foo
};

//obj.foo();
var bar = obj.foo; // function reference/alias!

bar();
//foo()