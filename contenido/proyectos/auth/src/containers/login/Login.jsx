import React from 'react';
import { Input, Form, FormGroup, Label, Button, Alert } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import useInputForm from '../../hooks/useInputForm';
import { loginAsyncAction } from '../../store/modules/auth/login.actions';

const Login = () => {
    const dispatch = useDispatch();
    const username = useInputForm();
    const password = useInputForm({ type: 'password' });

    const loginStore = useSelector(store => store.auth.login);

    const handlerSubmit = (event) => {
        event.preventDefault();
        dispatch(loginAsyncAction({
            username: username.value,
            password: password.value,
        }));
    }

    const disabledButton = () => {
        return loginStore.loading || username.value === '' || password.value === '';
    }
    return (
        <div>
            <Form onSubmit={handlerSubmit} >
                <FormGroup>
                    <Label>Nombre de Usuario</Label>
                    <Input {...username} />
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
            {loginStore.success && (
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