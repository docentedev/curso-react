import React, { Fragment } from 'react';
import {
    Col, Form,
    FormGroup, Label, Input,
    Button,
} from 'reactstrap';

import useInputForm from '../../hooks/useInputForm'

const Login = () => {
    const email = useInputForm('', 'email');
    const password = useInputForm('', 'password');
    return (
        <Fragment>
            <h2>Sign In</h2>
            <Form className="form">
                <Col>
                    <FormGroup>
                        <Label>Email</Label>
                        <Input
                            {...email}
                            placeholder="myemail@email.com"
                        />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input
                            {...password}
                            placeholder="********"
                        />
                    </FormGroup>
                </Col>
                <Button>Submit</Button>
            </Form>
        </Fragment>

    );
};

export default Login;