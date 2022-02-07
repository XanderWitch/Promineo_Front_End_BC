import React from 'react';

//React.Component comes with react. Whenever we create a new class, call it what you want and then extend React.Component with it
export default class LikeButton extends React.Component {
    //Render is where we define what the component will look like
    render() {
        //JSX method
        return <button className="btn btn-primary">Like</button>;
        //React method
        //return React.createElement('button', { class: 'btn btn-primary' }, 'Like'); //the first parameter is the type, the second is the properties, and the last is the content.
    }
}