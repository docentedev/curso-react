import { useState } from 'react';

const useInputForm = function (initialState) {
        const [value, setvalue ] = useState(initialState);
        const handlerChange = (event) => {
            setvalue(event.target.value);
        };

        return {
            value,
            onChange: handlerChange,
        }
};

export default useInputForm;