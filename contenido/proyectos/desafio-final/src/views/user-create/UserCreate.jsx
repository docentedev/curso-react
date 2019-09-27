import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveActionsAsyncCreator } from '../../store/modules/user/create.actions';

import {
    Form,
    FormGroup,
    Button,
    Label,
    Input,
    Container, Row, Col, Card, CardHeader, CardFooter, CardBody } from 'reactstrap';
import './UserCreate.css';
import useFormInput from '../../hooks/userInput';
import makeInput from '../../utils/makeInput';

const UserCreate = () => {
    const dispatch = useDispatch();
    const name = useFormInput();
    const email = useFormInput('', 'email');
    const password = useFormInput('', 'password');
    const passwordConfirm = useFormInput('', 'password');

    const inputs = [
        makeInput(name, 'Nombre usuario'),
        makeInput(email, 'Email'),
        makeInput(password, 'Contraseña'),
        makeInput(passwordConfirm, 'Confirmar Contraseña'),
    ];

    const saveUser = () => {
        const user = {
            name: name.value,
            email: email.value,
            password: password.value,
        }
        dispatch(saveActionsAsyncCreator(user));
    };

    const validPassword = (input) => {
        if (input.type === 'password') {
            const condition = input.value === input.value && input.value !== '';
            return condition ? ({ valid: true}) : ({invalid: true});
        }
        return '';
    };

    const isValidForm = () => {
        const { n, e, p, pc } = {
            n: name.value,
            e: email.value,
            p: password.value,
            pc: passwordConfirm.value,
        }
        return n === '' || e === '' || p === '' || pc === '' || p !== pc;
    }

    return (
        <div className="user-create">
            <Container>
                <Row>
                    <Col>
                        <Card>
                            <CardHeader>Nuevo Usuario</CardHeader>
                            <CardBody>
                                <Form>
                                    {inputs.map((data, i) => (
                                        <FormGroup key={i}>
                                            <Label>{data.label}</Label>
                                            <Input {...data.input} {...validPassword(data.input)}/>
                                        </FormGroup>
                                    ))}
                                    <Button onClick={(saveUser)} disabled={isValidForm()}>Guardar</Button>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default UserCreate;