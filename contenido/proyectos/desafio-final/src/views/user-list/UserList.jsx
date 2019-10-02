import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Alert, Table, Card, CardHeader, Modal, ModalHeader, ModalBody, ModalFooter,  CardBody, Container, Row, Col } from 'reactstrap';
import { getAllActionsAsyncCreator as getAll } from '../../store/modules/user/get-all.actions';
import { deleteActionsAsyncCreator } from '../../store/modules/user/delete.actions';


const UserList = (props) => {
    const dispatch = useDispatch();
    const { data, error, success, errorMessage, loading } = useSelector((store) => store.user.getAll);

    const [userDelete, setUserDelete] = useState(null);

    useEffect(() => {
        dispatch(getAll())
    }, []);

    const handlerDelete = () => {
        const id = userDelete.id;
        setUserDelete(null)
        
        dispatch(deleteActionsAsyncCreator(id));
    }

    return (
        <div className="user-list-view">
            <Container>
                <Row>
                    <Col>
                        <Card>
                            <CardHeader>Listado de usuarios</CardHeader>
                            <CardBody>
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Nombre</th>
                                            <th>Email</th>
                                            <th />
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((e, i) => (
                                            <tr key={e.id}>
                                                <td>{e.id}</td>
                                                <td>{e.name}</td>
                                                <td>{e.email}</td>
                                                <td>
                                                    <Link to={`/dashboard/users/view/${e.id}`}>ver</Link>
                                                    <button onClick={() => setUserDelete(e)}>Eliminar</button>
                                                    
                                                    </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>

                                {loading && ('Cargando...')}
                                {error && (<Alert color="danger">{errorMessage}</Alert>)}
                                {success && (<Alert color="success">Todo Ok</Alert>)}
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>

        <Modal isOpen={userDelete !== null} toggle={() => setUserDelete(null)}>
          <ModalHeader toggle={() => setUserDelete(null)}>Eliminar</ModalHeader>
          <ModalBody>
              Esta seguro que desea eliminar {userDelete && userDelete.name}
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={() => setUserDelete(null)}>Cancelar</Button>{' '}
            <Button color="primary" onClick={handlerDelete}>Confirmar</Button>
          </ModalFooter>
        </Modal>

        </div>
    );
};

export default UserList;
