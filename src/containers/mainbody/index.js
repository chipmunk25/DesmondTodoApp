import React from 'react';
import Todolist from "../../components/todolist"
const MainBody = (props) => {

    return (
        <section className="main">
            <input id="toggle-all" className="toggle-all" type="checkbox" onChange={props.toggleAllCheckHandler} />
            <label htmlFor="toggle-all">Mark all as complete</label>
            <Todolist
                {...props}
            />
        </section>
    );
};

export default MainBody;