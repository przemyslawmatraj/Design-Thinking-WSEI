import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.scss';
import App from './views/App';

ReactDOM.render(
  <React.StrictMode>
    <div style={{ overflowX: 'hidden' }}>
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
