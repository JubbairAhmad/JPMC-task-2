import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

res.header('Access-Control-Allow-Origin', '*');

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
