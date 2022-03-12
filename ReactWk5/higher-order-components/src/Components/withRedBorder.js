import React from 'react';

const withRedBorder = (WrappedComponent) => {
	return class extends React.Component {
		render() {
			return (
				<div style={{ border: '5px red solid' }}>
					<WrappedComponent />
				</div>
			);
		}
	};
};

export default withRedBorder;
