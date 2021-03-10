import React from 'react';

const Todolist = ({ toggleHandler, todolist }) => {
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
                                <button className="destroy"></button>
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