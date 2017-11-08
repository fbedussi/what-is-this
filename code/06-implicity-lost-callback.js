//Or the more common:

function foo() {
	console.log( this.a );
}

var obj = {
	a: 2,
	foo: foo
};

setTimeout( obj.foo, 100 );
// setTimeout(function() {
// 	obj.foo();
// }, 100 );