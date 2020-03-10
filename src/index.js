import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = function() {
    
    return (
        <div className="ui container comments">
            <CommentDetail author={faker.name.firstName()} timeAgo={faker.date.past()}/>
            <CommentDetail author={faker.name.firstName()} timeAgo={faker.date.past()}/>
            <CommentDetail author={faker.name.firstName()} timeAgo={faker.date.past()}/>
            <CommentDetail author={faker.name.firstName()} timeAgo={faker.date.past()}/>
            <CommentDetail author={faker.name.firstName()} timeAgo={faker.date.past()}/>
            <CommentDetail author={faker.name.firstName()} timeAgo={faker.date.past()}/>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));