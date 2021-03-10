import React from 'react';

const InputComponent = ({ placeholder }) => {
    return (
        <div>
            <input className="new-todo" placeholder={placeholder} />
        </div>
    );
};

export default InputComponent;