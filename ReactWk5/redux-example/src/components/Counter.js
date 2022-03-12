import React from 'react';
import CardBody from './CardBody';
import { connect } from 'react-redux';

const Counter = ({ count, dispatch }) => {
	const handleIncrement = () => {
		//dispatch actions through dispatch function thru props
		dispatch({ type: 'INCREMENT' }); //coming from redux, dispatches actions <--this is destructured. Type is a required prop for dispatch.
	};
	const handleDecrement = () => {
		dispatch({ type: 'DECREMENT' });
	};
	return (
		<div className='card text-center'>
			<div className='card-header bg-primary text-white'>
				Click Counter!
			</div>
			<CardBody
				count={count}
				handleIncrement={handleIncrement}
				handleDecrement={handleDecrement}
			/>
		</div>
	);
};

const mapStateToProps = (state) => ({
	count: state.count,
});

//connect component to redux with connect()
//connect is an HOC so returns another component. Connect takes up to 4 optional arguments/functions: 1. mapStateToProps (takes single argument - the state and converts it to props - can use any name but this will be clearer)

// const connectCounter = connect();

//returns the Counter component connected/controlled by redux
// const ReduxCounter = connectCounter(Counter);

//in a single line =>

export default connect(mapStateToProps)(Counter);

//to send updated state
