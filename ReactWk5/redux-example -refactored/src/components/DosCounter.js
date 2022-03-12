import React from 'react';
import CardBody from './CardBody';
import { connect } from 'react-redux';
import { incrementDosCounter, decrementDosCounter } from '../redux/actions';

const DosCounter = ({ dosCount, dosIncrement, dosDecrement }) => {
	return (
		<div className='card text-center'>
			<div className='card-header bg-primary text-white'>
				Dos Click Counter! Count by Twos
			</div>
			<CardBody
				count={dosCount}
				handleIncrement={dosIncrement}
				handleDecrement={dosDecrement}
			/>
		</div>
	);
};

//should return function(s)

const mapDispatchToProps = (dispatch) => {
	return {
		dosIncrement: () => dispatch(incrementDosCounter()),
		dosDecrement: () => dispatch(decrementDosCounter()),
	};
};

const mapStateToProps = (state) => ({
	dosCount: state.dosCounterReducer.dosCount,
});

//connect component to redux with connect()
//connect is an HOC so returns another component. Connect takes up to 4 optional arguments/functions: 1. mapStateToProps (takes single argument - the state and converts it to props - can use any name but this will be clearer), 2. mapDispatchToProps (passes the dispatch function as props, convert dispatch into custom functions and pass them in)

export default connect(mapStateToProps, mapDispatchToProps)(DosCounter);

//to send updated state
