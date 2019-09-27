import React from 'react';
import { Redirect } from 'react-router-dom';
import { Input, Form, FormGroup, Label, Button, Alert } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import useInputForm from '../../hooks/useInputForm';
import { loginAsyncAction } from '../../store/modules/auth/login.actions';

const Login = (props) => {
    const dispatch = useDispatch();
    const email = useInputForm({ type: 'email' });
    const password = useInputForm({ type: 'password' });

    const loginStore = useSelector(store => store.auth.login);

    const handlerSubmit = (event) => {
        event.preventDefault();
        dispatch(loginAsyncAction({
            email: email.value,
            password: password.value,
        }));
    }

    const disabledButton = () => {
        return loginStore.loading || email.value === '' || password.value === '';
    }

    // If token exist, redirect to secure dashboard
    if (loginStore.data && loginStore.data.token) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div>
            <Form onSubmit={handlerSubmit} >
                <FormGroup>
                    <Label>Email</Label>
                    <Input {...email} />
                </FormGroup>
                <FormGroup>
                    <Label>Contraseña</Label>
                    <Input {...password} />
                </FormGroup>
                <Button disabled={disabledButton()} className={`ld-ext-right running`}>Iniciar Sesión</Button>
            </Form>
            {loginStore.error && (
                <Alert className="mt-4" color="danger">
                    {loginStore.errorMessage}
                </Alert>
            )}

            {(loginStore.success || loginStore.existToken) && (
                <Alert className="mt-4" color="success" style={{
                    overflowWrap: 'break-word',
                }}>
                    {loginStore.data.token}
                    <hr/>
                    {JSON.stringify(loginStore.data.tokenDecode, null, 2)}
                </Alert>
            )}
        </div>
    );
};

export default Login;