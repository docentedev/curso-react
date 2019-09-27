import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alert, Table, Button, Input } from 'reactstrap';
import { usersGetListAsyncAction } from '../../store/modules/users/users.actions';

const Users = () => {
    const dispatch = useDispatch();
    const users = useSelector(store => store.users.users);

    const [idSelected, setIdSelected] = useState();
    const [name, setName] = useState();
    const [email, setEmail] = useState();

    useEffect(() => {
        dispatch(usersGetListAsyncAction());
    }, [dispatch]);

    return (
        <div>
            <h1>Usuarios</h1>
            <Table hover>
                <tbody>
                    {users.data.map(user => user.id === idSelected ? (() => {
                        return (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td><Input value={name} onChange={(event) => setName(event.target.value)} /></td>
                                <td><Input value={email} type={'email'} onChange={(event) => setEmail(event.target.value)} /></td>
                                <td><Button
                                    color="success"
                                    onClick={() => {
                                        setIdSelected(0);
                                        console.log(user.id, name, email);
                                    }}
                                    disabled={name === '' || email === ''}
                                >Guardar</Button></td>
                            </tr>
                        )
                    })() : (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td><Button color="info" onClick={() => {
                                    setEmail(user.email);
                                    setName(user.name);
                                    setIdSelected(user.id);
                                }}>Editar</Button></td>
                            </tr>
                        ))}
                </tbody>
            </Table>
            {users.error && (
                <Alert className="mt-4" color="danger">
                    {users.errorMessage}
                </Alert>
            )}
        </div>
    );
};

export default Users;