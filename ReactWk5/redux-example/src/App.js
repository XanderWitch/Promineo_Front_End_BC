import React from 'react';
import Counter from './components/Counter';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

//always create initialState so it won't be null

const initialState = {
	count: 0,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return {
				count: state.count + 1,
			};
		case 'DECREMENT':
			return {
				count: state.count - 1,
			};

		default:
			return state;
	}
};

const store = createStore(reducer);

function App() {
	return (
		//all components exist inside the Provider Component in a redux app; it passes down the information for the Store to each child component through properties
		<Provider store={store}>
			<Counter />
		</Provider>
	);
}

export default App;
