import { useState } from 'react';

const useInputForm = (initialState = {}) => {
    const [ value, setValue ] = useState(initialState.value || '');
    const handlerChange = (event) => setValue(event.target.value);

    return {
        value,
        type: initialState.type || 'text',
        onChange: handlerChange,
    };
};

export default useInputForm;