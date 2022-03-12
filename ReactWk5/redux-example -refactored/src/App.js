import React from 'react';
import Counter from './components/Counter';
import DosCounter from './components/DosCounter';
import { Provider } from 'react-redux';
import { store } from './redux/store';

//always create initialState so it won't be null

function App() {
	return (
		//all components exist inside the Provider Component in a redux app; it passes down the information for the Store to each child component through properties
		<Provider store={store}>
			<Counter />
			<DosCounter />
		</Provider>
	);
}

export default App;
