import React from 'react';
import Todolist from "../../components/todolist"
const MainBody = ({ toggleAllHandler, toggleHandler, todolist }) => {

    return (
        <section className="main">
            <input id="toggle-all" className="toggle-all" type="checkbox" onChange={toggleAllHandler} />
            <label htmlFor="toggle-all">Mark all as complete</label>
            <Todolist toggleHandler={toggleHandler} todolist={todolist} />
        </section>
    );
};

export default MainBody;