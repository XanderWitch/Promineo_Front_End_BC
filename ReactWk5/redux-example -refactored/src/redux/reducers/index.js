//used to combine the reducers together and export to store

import { combineReducers } from 'redux';
import CounterReducer from './counter';
import dosCounterReducer from './dosCounter';

export default combineReducers({
	CounterReducer,
	dosCounterReducer,
});

//we do this because the store can only take one reducer
