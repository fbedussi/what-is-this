//4. `new` Binding
//When a function is invoked with `new` in front of it (constructor call), 4 thing happen:
// 1. a brand new object is created
// 2. the newly constructed object is [[Prototype]]-linked
// 3. the newly constructed object is set as the `this` binding for that function call
// 4. the newly constructed object is returned (unless the function returns its own alternate object).

// We'll skip over step 2, but steps 1, 3, and 4 apply to our current discussion.

function foo(a) {
	this.a = a;
}

var bar = new foo( 2 );
console.log( bar.a );
