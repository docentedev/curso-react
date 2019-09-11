import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import useInputForm from './hooks/useInputForm';

const addActionMaker = () => ({
  type: 'ADD',
  payload: null,
});

function App(props) {
  const dispatch = useDispatch();
  const numero = useSelector(e => e);

  const name = useInputForm(props.name);
  const age = useInputForm(0);
  return (
    <div className="App">
      <input {...name} />
      <input {...age} />
      <br />
      <strong>{name.value}</strong>
      <hr />
      {numero}
      <br />
      <button onClick={() => dispatch(addActionMaker())}>Add</button>
    </div>
  );
}

export default App;
