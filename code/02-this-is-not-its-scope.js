//this is not its scope

function foo() {
	var a = 2;
	this.bar();
}

bar = function() {
	console.log( this.a );
}

foo();