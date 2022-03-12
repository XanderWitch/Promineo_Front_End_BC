//index.js files automatically imported, so it may save a little time
//you can just mention the folder name

//create some Action Types

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const DOS_INCREMENT = 'DOS_INCREMENT';
export const DOS_DECREMENT = 'DOS_DECREMENT';

//create some Action Creators - functions that return Action Types

export const incrementCounter = () => ({
	type: INCREMENT,
});

export const decrementCounter = () => ({
	type: DECREMENT,
});

export const incrementDosCounter = () => ({ type: DOS_INCREMENT });
export const decrementDosCounter = () => ({ type: DOS_DECREMENT });
