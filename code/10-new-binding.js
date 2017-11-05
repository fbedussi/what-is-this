//4. `new` Binding
//When a function is invoked with `new` in front of it (constructor call), 4 thing happen:
// 1. An empty object is created and referenced by `this` variable, inheriting the prototype of the function
// 2. Properties and methods are added to the object referenced by `this`
// 3. the newly created object referenced by `this` is returned at the end implicitly (unless the function returns its own alternate object).


// We'll skip over step 2, but steps 1, 3, and 4 apply to our current discussion.

function foo(a) {
	this.a = a;
}

var bar = new foo( 2 );
console.log( bar.a );
