::::slide
# What is `this`?

Francesco Bedussi

Code samples and concepts are from [You Don't Know JS: this & Object Prototypes](https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/), [chapter 1](https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch1.md) and [2](https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch2.md), errors are mine :-)
::::

::::slide
:::slide
## `this` isn't
- itself
````
function foo(num) {
	console.log( "foo: " + num );

	// keep track of how many times `foo` is called
	this.count++;
}

foo.count = 0;

var i;

for (i=0; i<10; i++) {
	if (i > 5) {
		foo( i );
	}
}
// foo: 6
// foo: 7
// foo: 8
// foo: 9

// how many times was `foo` called?
console.log( foo.count ); // 0 -- WTF?
````
:::

:::slide
- its scope
````
function foo() {
	var a = 2;
	this.bar();
}

function bar() {
	console.log( this.a );
}

foo(); //undefined
````

`this` is not an author-time binding
:::
::::

::::slide
## `this` is
`this` is a runtime binding, it depends on the call-site: the location in code where a function is called, not where it's declared.
::::
::::slide
## 1. Default binding
If no other rules apply `this` refers to the global object (e.g. `window`) in non `strict-mode`, while is `undefined` in `strict-mode`.
````
function foo() {
	console.log( this.a );
}

a = 2;

foo(); // 2
````
::::

::::slide
:::slide
## 2. Implicit binding
If a function is called as an object method, `this` refers to that object. 
````
function foo() {
	console.log( this.a );
}

var obj = {
	a: 2,
	foo: foo
};

obj.foo(); // 2
````
:::

:::slide
### Alert: implicitly lost
If the function is not called but simply passed, when it will be called the `this` reference is lost:
````
function foo() {
	console.log( this.a );
}

var obj = {
	a: 2,
	foo: foo
};

var bar = obj.foo; // function reference/alias!

var a = "oops, global"; // `a` also property on global object

bar(); // "oops, global"
````
:::

:::slide
Or the more common:
````
function foo() {
	console.log( this.a );
}

var obj = {
	a: 2,
	foo: foo
};

var a = "oops, global"; // `a` also property on global object

setTimeout( obj.foo, 100 ); // "oops, global"
````

:::
::::

::::slide
:::slide
## 3. Explicit binding
It is possible to explicitly bind `this` to a specific context using `.call()` or `.apply()` methods that are available to every JS function.
````
function foo() {
	console.log( this.a );
}

var obj = {
	a: 2
};

foo.call( obj ); // 2
````
:::

:::slide
### Hard binding
`.call()` or `.apply()` provide a temporary binding, to get a permanent one, use `.bind`, that returns a new function with `this` permanently binded to the `.bind` argument:
````
function foo() {
	console.log( this.a );
}

var obj = {
	a: 2,
	foo: foo
};

var a = "oops, global"; // `a` also property on global object

setTimeout( foo.bind(obj), 100 ); // 2
````
:::

:::slide
### API Call "Contexts"

Many libraries' functions, and many new built-in functions in JS, provide an optional parameter, usually called "context", which acts as a work-around for not having to use bind(..):
````
function foo(el) {
	console.log( el, this.id );
}

var obj = {
	id: "awesome"
};

// use `obj` as `this` for `foo(..)` calls
[1, 2, 3].forEach( foo, obj ); // 1 awesome  2 awesome  3 awesome
````
:::
::::

::::slide
:::slide
## 4. `new` Binding
When a function is invoked with `new` in front of it (constructor call), 4 thing happen:
1. An empty object is created and referenced by `this` variable, inheriting the prototype of the function
2. Properties and methods are added to the object referenced by `this`
3. the newly created object referenced by `this` is returned at the end implicitly (unless the function returns its own alternate object).
:::

:::slide
````
function foo(a) {
	this.a = a;
}

var bar = new foo( 2 );
console.log( bar.a ); // 2
````
:::
::::

::::slide
## Order of rules
All you need to do is find the call-site and inspect it to see which rule applies. But, what if the call-site has multiple eligible rules? The order of precedence to these rules (from lowest to highest priority) is:
1. Default binding
2. Implicit binding
3. Explicit binding
4. `new` Binding
::::

::::slide
## Arrow functions
Arrow functions don't obey to these 4 rule, but adopt the `this` binding from the enclosing (function or global) scope.
The most common use-case is in the use of callbacks, such as event handlers or timers:
````
function foo() {
	setTimeout(() => {
		// `this` here is lexically adopted from `foo()`
		console.log( this.a );
	},100);
}

var obj = {
	a: 2
};

foo.call( obj ); // 2
````
::::