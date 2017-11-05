// Arrow functions
// Arrow functions don't obey to these 4 rule, but adopt the `this` binding from the enclosing (function or global) scope.
// The most common use-case is in the use of callbacks, such as event handlers or timers:

function foo() {
	setTimeout(() => {
		// `this` here is lexically adopted from `foo()`
		console.log( this.a );
	},100);
}

var obj = {
	a: 2
};

foo.call( obj );
