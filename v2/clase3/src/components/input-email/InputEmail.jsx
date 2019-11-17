import React from 'react';
import './InputEmail.css';

/**
 * InputEmail
 * @version v1.0.0
 * 
 * @param {*} props 
 * @param {string} props.value
 * @param {Function} props.onChange
 */
const InputEmail = (props) => {
    const { value, onChange } = props;
    const handlerOnchange = (event) => {
        const { value } = event.target;
        onChange(value);
    };
    return (
        <div className="input-email">
            <input
                placeholder="Ingrese su email"
                value={value}
                onChange={handlerOnchange}
            />
        </div>
    );
};

export default InputEmail;