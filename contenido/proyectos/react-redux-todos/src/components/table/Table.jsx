import React from 'react';
import { ButtonToggle, Tr } from '..';
import './Table.css';

const Table = ({ todos, removeTodo, uncompletedTodo, completedTodo }) => {
    return (
        <table className="table">
            <tbody>
                {todos.map(todo => (
                    <Tr key={todo.id}>
                        <td>{todo.id}</td>
                        <td>{todo.name}</td>
                        <td>{todo.status ? 'completada' : 'por completar'}</td>
                        <td>
                            <button onClick={() => removeTodo(todo)}>Remover</button>
                        </td>
                        <td>
                            <ButtonToggle
                                todo={todo}
                                completedTodo={completedTodo}
                                uncompletedTodo={uncompletedTodo}
                            />
                        </td>
                    </Tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;