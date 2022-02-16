import React from 'react';
import Post from './post';

let e = React.createElement;

export default class NewsFeed extends React.Component {
    render() {
        let comments = [
            {
                content: 'Hey, Sara!',
                username: 'Tommy',
                date: '12-12-2018'
            },
            {
                content: 'Yo, Tomboy',
                username: 'Sara',
                date: '12-17-2018'
            },
            {
                content: 'Who are you people?',
                username: 'Sami',
                date: '12-19-2018'
            }
        ]
        return (
            <div className="container">
                <Post {...{comments, content: "This is my post content"}}/>      
                <Post {...{content: 'Here is another post!'}} />      
                <Post />      
            </div>
        );
    }
}

//regular React Version
//     render() {
//         return e('div',
//             { class: 'container' },
//             e(Post, {}, null),
//             e(Post, {}, null),
//             e(Post, {}, null)
//         );
//     }
// }