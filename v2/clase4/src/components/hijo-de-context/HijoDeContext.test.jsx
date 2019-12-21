import React from 'react';
import ReactDOM from 'react-dom';
import HijoDeContext from './HijoDeContext';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HijoDeContext />, div);
  ReactDOM.unmountComponentAtNode(div);
});
