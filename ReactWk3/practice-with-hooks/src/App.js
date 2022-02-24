//example of usestate hook

import React, { useState, useEffect } from 'react';

export default function App() {
	const [isOn, setIsOn] = useState(false); //<--destructuring of a boolean array takes value and method that takes the state property that is updated (default value passed in here), whenever we call the value setIsOn, we can pass in a new value

	const [clickCount, setClickCount] = useState(0);

	useEffect(() => {
		document.title = isOn ? 'ON' : 'OFF'; //changing the browser tab title every time to on or off, will fire any time the component is rendered
	});

	return (
		<div>
			<p>{isOn ? 'Yes, it is on' : 'OFF'}</p>
			<p>
				The button has been clicked <b>{clickCount}</b> times.
			</p>
			<button
				onClick={() => {
					setIsOn(!isOn);
					setClickCount(clickCount + 1);
				}}>
				Switch Value
			</button>
		</div>
	);
}
