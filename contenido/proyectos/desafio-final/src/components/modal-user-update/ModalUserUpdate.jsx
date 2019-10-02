/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, FormGroup } from 'reactstrap';
import useInput from '../../hooks/userInput';

/**
 * 
 * @param {*} props 
 * @param {string} props.buttonLabel
 * @param {string} props.className
 * @param {*} props.user
 * @param {Function} props.updateAction
 */
const ModalUserUpdate = (props) => {

    const [modal, setModal] = useState(false);
    const name = useInput(props.user.name);
    const email = useInput(props.user.email, 'email');
    const password = useInput('', 'password');

    const toggle = (history) =>  {
      setModal(!modal);
    };

    const update = () => {
      const userId = props.user.id;
      const userUpdate = {
        name: name.value,
        email: email.value,
        password: password.value,
      }
      props.updateAction(userUpdate, userId, toggle);
    }
  
    return (
      <div>
        <Button color="warning" onClick={toggle}>{props.buttonLabel}</Button>
        <Modal isOpen={modal} toggle={toggle} className={props.className}>
          <ModalHeader toggle={toggle}>Actualziar</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label>Nombre</Label>
              <Input {...name} />
            </FormGroup>
            <FormGroup>
              <Label>Email</Label>
              <Input {...email} />
            </FormGroup>
            <FormGroup>
              <Label>Contraseña</Label>
              <Input {...password} />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={toggle}>Cancelar</Button>{' '}
            <Button color="primary" onClick={update}>Guardar</Button>
          </ModalFooter>
        </Modal>
      </div>
    );

}

export default ModalUserUpdate;