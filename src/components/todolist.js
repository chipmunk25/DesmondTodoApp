import React from 'react';

const Todolist = ({ toggleHandler, todolist, removeItem }) => {
    console.log(todolist)
    return (
        <div>
            <ul className="todo-list">
                {
                    todolist && todolist.map(item => (
                        <li key={item.id} className={item.completed ? "completed" : ""}>
                            <div className="view">
                                <input checked={item.completed} className="toggle" type="checkbox" onChange={(e) => toggleHandler(e, item.id)} />
                                <label>{item.title}</label>
                                <button className="destroy" onClick={() => removeItem(item.id)}></button>
                            </div>
                            <input className="edit" name="title" defaultValue={item.title} />
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Todolist;