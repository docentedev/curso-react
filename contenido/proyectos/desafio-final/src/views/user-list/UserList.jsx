import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alert, Table, Card, CardHeader, CardBody, Container, Row, Col } from 'reactstrap';
import { getAllActionsAsyncCreator as getAll } from '../../store/modules/user/get-all.actions';

const UserList = (props) => {
    const dispatch = useDispatch();
    const { data, error, success, errorMessage, loading } = useSelector((store) => store.user.getAll);

    useEffect(() => {
        dispatch(getAll())
    }, []);

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
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((e, i) => (
                                            <tr key={e.id}>
                                                <td>{e.id}</td>
                                                <td>{e.name}</td>
                                                <td>{e.email}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>

                                {loading && ('Cargando...')}
                                {error && (<Alert color="danger">{errorMessage}</Alert>)}
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default UserList;
