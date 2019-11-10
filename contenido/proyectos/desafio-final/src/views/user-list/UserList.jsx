import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Alert, Table, Card, CardHeader, Modal, ModalHeader, ModalBody, ModalFooter,  CardBody, Container, Row, Col } from 'reactstrap';
import { getAllActionsAsyncCreator as getAll } from '../../store/modules/user/get-all.actions';
import { deleteActionsAsyncCreator } from '../../store/modules/user/delete.actions';

const Tr = ({ deleteAction, e }) => {
    return (
        <tr>
            <td>{e.id}</td>
            <td>{e.name}</td>
            <td>{e.email}</td>
            <td>
                <Link to={`/dashboard/users/view/${e.id}`}>ver</Link>
                <button onClick={deleteAction(e)}>Eliminar</button>
                
                </td>
        </tr>
    )
}



const List = () => {
    const [ todo, setTodo ] = useState('');
    const [ todoList, setTodoList ] = useState([]);

    const handlerChange = (event) => {
        const { value } = event.target;
        setTodo(value);
    }

    const handlerAdd = () => {
        const nList = todoList.map(e => e);
        nList.push(todo);
        setTodoList(nList);
        setTodo('');
    }

    return (
        <div className="list">
            <input value={setTodo} onChange={handlerChange} />
            <button onClick={handlerAdd}>Add</button>
            <ul>
                {todoList.map((t) => (
                    <li>{t}</li>
                ))}
            </ul>
        </div>
    );
};

export default List;
