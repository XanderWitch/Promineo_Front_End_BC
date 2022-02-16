import React from 'react';

//React.Component comes with react. Whenever we create a new class, call it what you want and then extend React.Component with it
export default class LikeButton extends React.Component {
    //Render is where we define what the component will look like
    render() {

        //JSX Version
        return <button className="btn btn-primary">Reply</button>;
    
        //regular react version
        // return React.createElement('button', { class: 'btn btn-primary' }, 'Reply'); //last thing is content.
    }
}