import React, { useEffect } from 'react';

import { FaArrowLeft } from 'react-icons/fa';

import {  Card, CardBody, CardHeader, CardFooter, Button, Container, Col, Row } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getActionsAsyncCreator } from '../../store/modules/user/get.actions';
import { updateActionsAsyncCreator } from '../../store/modules/user/update.actions';

import ModalUserUpdate from '../../components/modal-user-update/ModalUserUpdate';

const UserDetail = (props) => {
    const dispatch = useDispatch();
    const userData = useSelector(store => store.user.get);
    useEffect(() => {
        dispatch(getActionsAsyncCreator(props.match.params.id))
    }, [props, dispatch]);

    const handlerBack = () => {
        props.history.push('/dashboard/users')
    };


    const updateAction = (data, id, toggle) => {
        dispatch(updateActionsAsyncCreator(data, id));
        toggle(props.history);
    }

    const { data } = userData;
    return data && (<div>
        <div>
            <Container>
                <Row>
                    <Col>
                        <Card>
                            <CardHeader>{data.name}</CardHeader>
                            <CardBody>
                                <Row>
                                    <Col xs="12" sm="4">{data.id}</Col>
                                    <Col xs="12" sm="4">{data.name}</Col>
                                    <Col xs="12" sm="4">{data.email}</Col>
                                </Row>
                            </CardBody>
                            <CardFooter>
                                <Button onClick={handlerBack}><FaArrowLeft /> Volver</Button>
                                <ModalUserUpdate updateAction={updateAction} user={data} buttonLabel="actualizar" className="" />
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>
            </Container>
            
        </div>
    </div>);
};

export default UserDetail;