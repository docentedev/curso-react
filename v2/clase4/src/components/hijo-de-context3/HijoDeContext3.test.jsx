import React from 'react';
import ReactDOM from 'react-dom';
import HijoDeContext3 from './HijoDeContext3';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HijoDeContext3 />, div);
  ReactDOM.unmountComponentAtNode(div);
});
