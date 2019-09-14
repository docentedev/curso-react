import { useState } from 'react';

const useInputForm = (initialState, type='text') => {
    const [value, setValue] = useState(initialState);

    const handlerChange = (event) => {
        setValue(event.target.value);
    }
    return {
        value,
        onChange: handlerChange,
        type,
    }
}

export default useInputForm;