import React from 'react';
import './App.css';

function App() {
	return (
		<div className='App'>
			<Person name='Janell' age='49' />
			<Person name='Alan' age='50' />
		</div>
	);
}

const Person = (props) => {
	//destructure props
	const { name, age } = props;
	return (
		<div>
			<h1>{name}</h1>
			<h2>Age: {age}</h2>
		</div>
	);
};

export default App;
