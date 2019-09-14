import React from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap'; 

const CardUser = ({ user }) => (
    <Card>
        <CardHeader>#{user.id} - {user.name}</CardHeader>
        <CardBody>{user.email}</CardBody>
    </Card>
);

export default CardUser;