import React from 'react';
import classNames from "classnames"
const Todolist = ({ toggleHandler, todolist, removeItem, setToggleEdit, CompleteEdit }) => {
    return (
        <div>
            <ul className="todo-list">
                {
                    todolist && todolist.map(item => (
                        <li key={item.id} className={classNames({ editing: item.editing }, { completed: item.completed })}
                            onDoubleClick={() => setToggleEdit(item.id)}>
                            <div className="view" >
                                <input checked={item.completed} className="toggle" type="checkbox" onChange={(e) => toggleHandler(e, item.id)} />
                                <label>{item.title}</label>
                                <button className="destroy" onClick={() => removeItem(item.id)}></button>
                            </div>
                            <input className="edit" onKeyDown={(e) => CompleteEdit(e, item.id)} name="title" defaultValue={item.title} />
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Todolist;