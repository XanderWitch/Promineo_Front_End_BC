//Def 1 - takes another function as a parameter example - functionOne is a higher order function

const functionOne = (func, message) => {
	console.log(message);
	func(message);
};

const functionTwo = (message) => {
	console.log('Message from functionTwo: ' + message);
};

functionOne(functionTwo, 'Message from functioOne');

//def 2 - returns another function - functionThree is a Higher Order Function
functionThree = (message) => {
	return () => {
		console.log(message + ' from functionThree');
	}; //returning anonymous function
};

// const func = functionThree('Message');

// func();

//could also write it as
functionThree('Message')(); //<--calls function three calling another function

//array.map function as a higher order function

let lannisters = ['Cersei', 'Jaime', 'Tyrion'];

// const updateLannisters = (value) => (value += ' Lannister');

// let newLannisters = lannisters.map(updateLannisters); //parameter is another function that performs a map operation on this array
// console.log(newLannisters);

//you can also pass a short form function into it

let newLannisters = lannisters.map((value) => (value += ' Lannister'));
console.log(newLannisters);
