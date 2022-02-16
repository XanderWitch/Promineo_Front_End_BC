import React from 'react';
import ReplyButton from './reply-button';
import LikeButton from './like-button';
import Comment from './comment';

let e = React.createElement;

export default class Post extends React.Component {
    //Set up the state
    constructor(props) {
        super(props);
        this.state = {
            // what properties we want available in the state
            comments: props.comments,
            content: props.content,
        };
    }

    //JSX Version
    render() {
        // setTimeout(() => this.setState(x => ({count: x.count + 1}), () => console.log(this.state.count)), 2000);
        // // Let's pass props in as an object
        // let commentOne = {
        //     content: 'Hey, Sara!',
        //     username: 'Tommy',
        //     date: '12-12-2018'
        // };

        // let commentTwo = {
        //     content: 'Yo, Tomboy',
        //     username: 'Sara',
        //     date: '12-17-2018'
        // };

        // let commentThree = {
        //     content: 'Who are you people?',
        //     username: 'Sami',
        //     date: '12-19-2018'
        // };

        // passing in comments dynamically through state

        // let comments = [];
        let comments;
        if (this.state.comments) {
            // for (let comment of this.state.comments) {
            //     comments.push(<Comment {...comment} />); //pass in as a JSX element
            // }
            comments = this.state.comments.map((comment, index) => <Comment key={index} {...comment} />);
            //map method will take each comment inside this.state.comments, create a JSX element/component with comment and index as components and push them to the array.
        }

        return (
            <div className="card w-75">
                <div className="card-header bg-primary text-white">
                    Username and Time
                </div>
                <div className="card-body">
                    {this.state.content}
                </div>
                <div className="card-footer">
                    <LikeButton />
                    <ReplyButton />
                    {/* adding an attribute, data passed in like attributes for HTML elements, in key-value pairs, can name them whatever you want. */}
                    {/* <Comment content="This is my post."/> 
                    <Comment content="This is another post!"/>
                    <Comment content="More posts from us."/> */}
                    {/* Passing props in as an object below. Three dots are the spread operator. Allows us to pass props in without overriding anything that already exists in the prop object*/}
                    {/* <Comment {...commentOne} />
                    <Comment {...commentTwo} />
                    <Comment {...commentThree}/> */}

                    {/* Add each element of the array  */}
                    {comments}

                </div>
            </div>
        );
    }
}

    //Regular React Version
//     render() {
//         return e('div',
//             { class: 'card w-75' }, //next argument is the children of this element, in this case another div
//             e('div',
//                 { class: 'card-header bg-success text-white' }, 'Username and Time'),
//             e('div',
//                 { class: 'card-body' },
//                 'Post Content'),
//             e('div',
//                 { class: 'card-footer' },
//                 e(LikeButton, {}, null),
//                 e('span', {}, ' '), //empty space
//                 e(ReplyButton, {}, null),
//                 e('br', {}, null), //break line
//                 e(Comment, {}, null),
//                 e(Comment, {}, null)
//             )
//         );
//     }
// }