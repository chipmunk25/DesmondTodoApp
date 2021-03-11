import React from 'react';

const FooterMain = ({ todolist, clearAllHandler, itemCount, selectHandler, selected }) => {

    return (
        <footer className={todolist.length > 0 ? "footer" : "footer hidden"}>
            <span className="todo-count">{itemCount} item left</span>
            <ul className="filters">
                <li>
                    <span onClick={() => selectHandler("all")} className={selected === "all" ? "selected" : ""}>All</span>
                </li>
                <li>
                    <span onClick={() => selectHandler("active")} className={selected === "active" ? "selected" : ""} >Active</span>
                </li>
                <li>
                    <span onClick={() => selectHandler("completed")} className={selected === "completed" ? "selected" : ""} >Completed</span>
                </li>
            </ul>
            <button className="clear-completed" onClick={clearAllHandler}>Clear completed</button>
        </footer>
    );
};

export default FooterMain;