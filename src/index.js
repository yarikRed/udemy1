import React from 'react';
import ReactDOM from 'react-dom';

const App = function() {
    const buttonText = () => 'Submit';
    const labelText = () => 'Enter name:';
    return (
        <div>
            <label classname="label" htmlFor="name">{labelText()}</label>
            <input id="name" type="text" />

            <button style={{ backgroundColor: 'blue', color: 'white'}}>
                {buttonText()}
            </button>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));