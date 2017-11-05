//API Call "Contexts"
//Many libraries' functions, and many new built-in functions in JS, provide an optional parameter, usually called "context", which acts as a work-around for not having to use bind(..):

function foo(el) {
	console.log( el, this.id );
}

var obj = {
	id: "awesome"
};

// use `obj` as `this` for `foo(..)` calls
[1, 2, 3].forEach( foo, obj );
