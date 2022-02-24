import React, { useState } from 'react';

export const NewRoomForm = (props) => {
	const [name, setName] = useState('');
	const [area, setArea] = useState(undefined); //undefined because it's a number, needs to be validated

	//number validation for area
	const handleAreaInput = (event) => {
		const int = parseInt(event.target.value, 10);
		setArea(int >= 0 ? int : '');
	};

	//define onSubmit
	const onSubmit = (event) => {
		event.preventDefault();
		if (name && area) {
			props.addNewRoom({ name, area });
			setName(''); //reset value
			setArea(''); //reset value
		} else {
			console.log('invalid input');
		}
	};

	return (
		<div>
			<h4>Add a new room</h4>
			<form onSubmit={onSubmit}>
				<input
					type='text'
					placeholder='Room Name'
					onChange={(event) => setName(event.target.value)}
					value={name}
				/>
				<input
					type='text'
					placeholder='Room Area'
					onChange={handleAreaInput}
					value={area}
				/>
				<button type='submit'>Add Room</button>
			</form>
		</div>
	);
};
