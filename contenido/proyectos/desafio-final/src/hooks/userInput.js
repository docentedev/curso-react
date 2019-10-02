import { useState, useEffect } from 'react';

const useInput = (initialValue = '', type = 'text') => {
    const [value, setValue] = useState(initialValue);

    useEffect(() => {
        setValue(initialValue)
    }, [initialValue]);

    return {
        onChange: (event) => setValue(event.target.value),
        value,
        type,
    }
}

export default useInput;