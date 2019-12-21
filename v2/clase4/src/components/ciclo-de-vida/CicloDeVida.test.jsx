import React from 'react';
import ReactDOM from 'react-dom';
import CicloDeVida from './CicloDeVida';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CicloDeVida />, div);
  ReactDOM.unmountComponentAtNode(div);
});
