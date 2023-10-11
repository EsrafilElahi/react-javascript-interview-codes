// bind : The bind() method creates a new function and when that new function is called it set this keyword to the first argument which is passed to the bind method, and if any other sequences of arguments preceding the first argument are passed to the bind method then they are passed as an argument to the new function when the new function is called.

let nameObj = { 
	name: "Tony"
} 

let PrintName = { 
	name: "steve", 
	sayHi: function () { 

		// Here "this" points to nameObj 
		console.log(this.name); 
	} 
} 

let HiFun = PrintName.sayHi.bind(nameObj); 
HiFun();



// call : The call() method calls the function directly and sets this to the first argument passed to the call method and if any other sequences of arguments preceding the first argument are passed to the call method then they are passed as an argument to the function.

let nameObj = { 
	name: "Tony"
} 

let PrintName = { 
	name: "steve", 
	sayHi: function (age) { 
		console.log(this.name + " age is " + age); 
	} 
} 

PrintName.sayHi.call(nameObj, 42);



// apply : The apply() method calls the function directly and sets this to the first argument passed to the apply method and if any other arguments provided as an array are passed to the call method then they are passed as an argument to the function.

let nameObj = { 
	name: "Tony"
} 

let PrintName = { 
	name: "steve", 
	sayHi: function (...age) { 
		console.log(this.name + " age is " + age); 
	} 
} 
PrintName.sayHi.apply(nameObj, [42]);
