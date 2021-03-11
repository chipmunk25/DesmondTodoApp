import React from 'react';

const InputComponent = ({ placeholder, onKeyDown }) => {
    return (
        <div>
            <input className="new-todo" placeholder={placeholder} onKeyDown={onKeyDown} />
        </div>
    );
};

export default InputComponent;