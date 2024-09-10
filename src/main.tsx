import React from 'react';
import ReactDOM from 'react-dom/client'; // Importação do client
import App from './App.tsx';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
      <App/>
  </React.StrictMode>
);
