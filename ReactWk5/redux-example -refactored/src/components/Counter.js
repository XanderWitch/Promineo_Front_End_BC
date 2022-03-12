import React from 'react';
import CardBody from './CardBody';
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter } from '../redux/actions';

const Counter = ({ count, increment, decrement }) => {
	return (
		<div className='card text-center'>
			<div className='card-header bg-primary text-white'>
				Click Counter!
			</div>
			<CardBody
				count={count}
				handleIncrement={increment}
				handleDecrement={decrement}
			/>
		</div>
	);
};

//should return function(s)

const mapDispatchToProps = (dispatch) => {
	return {
		increment: () => dispatch(incrementCounter()),
		decrement: () => dispatch(decrementCounter()),
	};
};

const mapStateToProps = (state) => ({
	count: state.CounterReducer.count,
});

//connect component to redux with connect()
//connect is an HOC so returns another component. Connect takes up to 4 optional arguments/functions: 1. mapStateToProps (takes single argument - the state and converts it to props - can use any name but this will be clearer), 2. mapDispatchToProps (passes the dispatch function as props, convert dispatch into custom functions and pass them in)

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

//to send updated state
