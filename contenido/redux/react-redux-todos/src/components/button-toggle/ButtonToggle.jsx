import React from 'react';
import './ButtonToggle.css';


const ButtonToggle = ({ todo, uncompletedTodo, completedTodo }) => {
    const { status } = todo;
    return (
        <button
            className={`button-toggle ${status
                ? 'button-toggle--uncompleted'
                : 'button-toggle--completed'}`}
            onClick={() => {
                todo.status ?
                    uncompletedTodo(todo)
                    : completedTodo(todo);
            }}
        >{status
            ? 'Cambiar a incompleta'
            : 'Cambiar a completada'}</button>
    );
}

export default ButtonToggle;