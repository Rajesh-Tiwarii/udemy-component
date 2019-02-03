import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail'
import ApproveDecline from './ApproveDecline';

const App = () => {



    return (
        <div className="ui container comments" >
            <br />
            <ApproveDecline>
                <CommentDetail
                    author="alex"
                    timeago="Today, at 02:00PM"
                    comment="good post"
                    avatar={faker.image.avatar()} />
            </ApproveDecline>
            <ApproveDecline>
                <CommentDetail
                    author="john"
                    timeago="Today, at 02:00PM"
                    comment="Nice post"
                    avatar={faker.image.avatar()} />
            </ApproveDecline>
            <ApproveDecline>
                <CommentDetail
                    author="jane"
                    timeago="Today, at 10:00PM"
                    comment="vgood post"
                    avatar={faker.image.avatar()} />
            </ApproveDecline>
        </div>

    );
}

ReactDOM.render(<App />, document.querySelector('#root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
