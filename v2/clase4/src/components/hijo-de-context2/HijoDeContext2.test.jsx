import React from 'react';
import ReactDOM from 'react-dom';
import HijoDeContext2 from './HijoDeContext2';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HijoDeContext2 />, div);
  ReactDOM.unmountComponentAtNode(div);
});
