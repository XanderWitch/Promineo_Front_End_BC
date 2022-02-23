import React from 'react';
import Array from './Array';

const { useState } = React;

const ArrayUpdater = () => {
	const [myArray, updateMyArray] = useState([]);
	console.log(myArray);
	const onClick = () => {
		updateMyArray((arr) => [...arr, `${arr.length}`]);
	};
	return [
		<input type='button' onClick={onClick} value='Update' />,
		<div>
			{myArray.map((e) => (
				<div>{e}</div>
			))}
		</div>,
	];
};

export default ArrayUpdater;
