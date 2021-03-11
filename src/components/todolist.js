import React from 'react';
import classNames from "classnames"
const Todolist = ({ toggleCheckHandler, todolist, removeItemHandler, toggleEditHandler, completeEditHandler }) => {
    return (
        <div>
            <ul className="todo-list">
                {
                    todolist && todolist.map(item => (
                        <li key={item.id} className={classNames({ editing: item.editing }, { completed: item.completed })}
                            onDoubleClick={() => toggleEditHandler(item.id)}>
                            <div className="view" >
                                <input checked={item.completed} className="toggle" type="checkbox" onChange={(e) => toggleCheckHandler(e, item.id)} />
                                <label>{item.title}</label>
                                <button className="destroy" onClick={() => removeItemHandler(item.id)}></button>
                            </div>
                            <input className="edit" onKeyDown={(e) => completeEditHandler(e, item.id)} name="title" defaultValue={item.title} />
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Todolist;