import React from 'react';

const FooterMain = ({ todolist, ClearAllHandler, itemCount, selectHandler, selected }) => {

    return (
        <footer className={todolist.length > 0 ? "footer" : "footer hidden"}>
            <span className="todo-count">{itemCount} item left</span>
            <ul className="filters">
                <li>
                    <a onClick={() => selectHandler("all")} className={selected === "all" ? "selected" : ""}>All</a>
                </li>
                <li>
                    <a onClick={() => selectHandler("active")} className={selected === "active" ? "selected" : ""} >Active</a>
                </li>
                <li>
                    <a onClick={() => selectHandler("completed")} className={selected === "completed" ? "selected" : ""} >Completed</a>
                </li>
            </ul>
            <button className="clear-completed" onClick={ClearAllHandler}>Clear completed</button>
        </footer>
    );
};

export default FooterMain;