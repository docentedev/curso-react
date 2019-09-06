import React, { Fragment, useState } from 'react';
import { makeTodo } from '../../utils';

const TodoForm = ({ counter, addTodo }) => {
    // utilizacion de hook para variable local
    const [todoName, setTodoName] = useState('');
    return (
        <Fragment>
            <label>Nombre</label>
            <div>
                <input
                    value={todoName}
                    onChange={(event) => setTodoName(event.target.value)}
                />
            </div>
            <button
                onClick={() => {
                    // ejecutamos la accion pasada por props
                    addTodo(makeTodo(counter, todoName));
                    // cambiamos la variable local a vacia
                    setTodoName('');
                }}
                // si el name esta vacio, el button esta disabled
                disabled={todoName === ''}
            >
                Agregar tarea
            </button>
        </Fragment>
    );
}

export default TodoForm;