import React from 'react';
import ReactDOM from 'react-dom';
import InputEmail from './InputEmail';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<InputEmail />, div);
  ReactDOM.unmountComponentAtNode(div);
});
