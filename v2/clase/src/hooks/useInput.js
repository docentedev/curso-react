import { useState } from 'react';

const useInput = (initialValue) => {
    const [v, setV] = useState(initialValue);

    const onChange = (event) => {
        const { value } = event.target;
        setV(value);
    }
    return {
        value: v,
        onChange,
    };
}

export default useInput;