import React from 'react';
import Todolist from "../../components/todolist"
const MainBody = ({ toggleAllHandler, toggleHandler, todolist, removeItem, setToggleEdit, CompleteEdit }) => {

    return (
        <section className="main">
            <input id="toggle-all" className="toggle-all" type="checkbox" onChange={toggleAllHandler} />
            <label htmlFor="toggle-all">Mark all as complete</label>
            <Todolist
                toggleHandler={toggleHandler}
                todolist={todolist}
                removeItem={removeItem}
                setToggleEdit={setToggleEdit}
                CompleteEdit={CompleteEdit}
            />
        </section>
    );
};

export default MainBody;