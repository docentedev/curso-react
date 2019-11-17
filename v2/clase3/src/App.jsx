import React, { useState, useEffect } from 'react';
import './App.css';
import CardDefault from './components/card-default/CardDefault';
import InputEmail from './components/input-email/InputEmail';
import InputPassword from './components/input-password/InputPassword';

import useInput from './hooks/useInput';

function App() {
  const [mostrar, setMostrar] = useState(false);
 
  const objInput = useInput('');

  const [email, setEmail] = useState('');
  const [emailConfirm, setEmailConfirm] = useState('');
  const [password, setPassword] = useState('');
  
  useEffect(() => {
    console.log('cambio email' + email);
  }, [email]);

  const handlerToggle = () => {
    setMostrar(!mostrar);
  }
  return (
    <div className="App">
      <form action="">
        <CardDefault title="Hola mundo" />
        <InputEmail value={email} onChange={setEmail} />
        <InputEmail value={emailConfirm} onChange={setEmailConfirm} />
        <InputPassword e={password} x={setPassword} />

        <input {...objInput} />
        
        {mostrar && (<div>Saludar</div>)}
        {objInput.value}
      {password}
      </form>
      <button onClick={handlerToggle}>Mostrar/Ocultar</button>
    </div>
  );
}

export default App;
