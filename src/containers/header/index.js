import React from 'react';
import Title from "../../components/title"
import InputComponent from "../../components/input"
const Header = () => {
    return ( 
        <header className="header">
              <Title title ="todos" />
            <InputComponent placeholder="What needs to be done?" />
        </header>
    );
};

export default Header;