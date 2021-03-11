import React from 'react';
import Title from "../../components/title"
import InputComponent from "../../components/input"
const Header = ({ addNewItemHandler }) => {
    return (
        <header className="header">
            <Title title="todos" />
            <InputComponent placeholder="What needs to be done?" onKeyDown={addNewItemHandler} />
        </header>
    );
};

export default Header;