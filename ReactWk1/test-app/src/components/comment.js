import React from 'react';

//have access to Like and Reply from within comment function
import ReplyButton from './reply-button';
import LikeButton from './like-button';

let e = React.createElement;

//React.Component comes with react. Whenever we create a new class, call it what you want and then extend React.Component with it
export default class Comment extends React.Component {
    //Render is where we define what the component will look like
    render() {

        //JSX Version
        return (
            <div className="card w-75">
                <div className="card-header bg-success text-white">
                    Username and Time
                </div>
                <div className="card-body">
                    Comment Content
                </div>
                <div className="card-footer">
                    <LikeButton />
                    <ReplyButton />
                </div>
            </ div>
        );
    }
}
//regular React version
//         return e('div',
//             { class: 'card w-75' }, //next argument is the children of this element, in this case another div
//             e('div',
//                 { class: 'card-header bg-success text-white' }, 'Username and Time'),
//             e('div',
//                 { class: 'card-body' },
//                 'Comment Content'),
//             e('div',
//                 { class: 'card-footer' },
//                 e(LikeButton, {}, null),
//                 e('span', {}, ' '), //empty space
//                 e(ReplyButton, {}, null)
//             )
//         );
//     }
// }