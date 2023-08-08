import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./styles/imports.scss";
import { BrowserRouter } from 'react-router-dom';
import { UserContext } from './components/contexts/UserContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
