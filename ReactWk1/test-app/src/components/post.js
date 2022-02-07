import React from 'react';
import ReplyButton from './reply-button';
import LikeButton from './like-button';
import Comment from './comment';

let e = React.createElement;

export default class Post extends React.Component {
    //Render is where we define what the component will look like

    //JSX Version
    render() {
    
        return (
            <div className="card w-75">
                <div className="card-header bg-primary text-white">
                    Username and Time
                </div>
                <div className="card-body">
                    This is a post.
                </div>
                <div className="card-footer">
                    <LikeButton />
                    <ReplyButton />
                    <Comment />
                    <Comment />
                    <Comment />
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