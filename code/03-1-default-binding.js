//`this` is not "itself" nor "the same scope". It is not an author-time binding.

//`this` is a runtime binding, it depends on the call-site: the location in code where a function is called, not where it's declared.

//1. Default binding
//If no other rules apply `this` refers to the global object (e.g. `window`) in non `strict-mode`, while is `undefined` in `strict-mode`.

function foo() {
	console.log( this.a );
}

a = 2;

foo();
