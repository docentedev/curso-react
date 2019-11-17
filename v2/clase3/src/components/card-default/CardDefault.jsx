import React, { useState } from 'react';
import './CardDefault.css';

/**
 * CardDefault
 * @version v1.0.0
 * 
 * @param {*} props 
 */
const CardDefault = (props) => {
    const [title, setTitle] = useState(props.title);
    const [email, setEmail] = useState('');

    const handlerEmail = e => setEmail(e.target.value);
    const handlerButton = () => setTitle('valor nuevo');

    return (
        <div className="card-default">
            <h1>{title}</h1>
            {email}<br />
            <button onClick={handlerButton}>cambiar valor</button>
            <input value={email} onChange={handlerEmail} />
        </div> 
    );
};

export default CardDefault;