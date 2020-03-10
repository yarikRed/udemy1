import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = function() {
    
    return (
        <div className="ui container comments">
            <CommentDetail 
                author={faker.name.firstName()} 
                timeAgo='Today'
                avatar={faker.image.avatar()}
                text={faker.random.words()}
            />
            <CommentDetail 
                author={faker.name.firstName()} 
                timeAgo='Today'
                avatar={faker.image.avatar()}
                text={faker.random.words()}
            />
            <CommentDetail 
                author={faker.name.firstName()} 
                timeAgo='Today'
                avatar={faker.image.avatar()}
                text={faker.random.words()}
            />
            <CommentDetail 
                author={faker.name.firstName()} 
                timeAgo='Today'
                avatar={faker.image.avatar()}
                text={faker.random.words()}
            />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));