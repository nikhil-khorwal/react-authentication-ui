import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, useRoutes } from "react-router-dom"
import Routes from "./core/routes/routes"

const App = () => {
  const routes = useRoutes(Routes)
  return (<Fragment>{routes}</Fragment>)
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);



