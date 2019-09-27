import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input, Button, Form, FormGroup, Label, Card, Container, Col, Row, CardHeader, CardBody } from 'reactstrap';
import useInput from '../../hooks/userInput';
import { loginActionsAsyncCreator as loginAction } from '../../store/modules/auth/login.actions';

const Login = (props) => {
    const dispatch = useDispatch();
    const jwt = useSelector(store => store.auth.login.data);
    const email = useInput('', 'email');
    const password = useInput('', 'password');

    const buttonIsDisabled = () => password.value === '' || email.value === '';

    useEffect(() => {
        if (jwt !== null) {
            props.history.push('dashboard/users')
        }
    }, [jwt])

    return (
        <Container className="mt-4">
            <Row>
                <Col sm={{ size: 4, offset: 4}}>
                    <Card>
                        <CardHeader>Inicio de sesión</CardHeader>
                        <CardBody>
                            <Form>
                                <pre className="text-left">
                                </pre>
                                <FormGroup>
                                    <Label>Email</Label>
                                    <Input {...email} />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Contraseña</Label>
                                    <Input {...password} />
                                </FormGroup>
                                <Button
                                    disabled={buttonIsDisabled()}
                                    onClick={() => dispatch(loginAction(email.value, password.value))}
                                >Iniciar Sesión</Button>
                            </Form></CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>

    );
}

export default Login;