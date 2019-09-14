import React, { useEffect } from 'react';
import { Row, Col } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import * as userActions from '../../store/modules/user/actions';

import CardUser from '../../components/card-user/CardUser';

const Users = () => {
    const dispatch = useDispatch();
    const users = useSelector(store => {
        return store.user.userGetAll;
    });

    useEffect(() => {
        dispatch(userActions.userGellAllAsyncActionCreator());
    }, [dispatch]);


    return (
        <Row>
            <Col md={12}>
                <section className="card-columns">
                {users.data.map(user => (
                    <CardUser user={user} key={user.id} />
                ))}
                </section>
            </Col>
            <Col md={12}>{users.loading ? 'Cargando...' : ''}</Col>
        </Row>
    );
}

export default Users;