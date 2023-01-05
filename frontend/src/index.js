import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,

} from "react-router-dom";
import App from './App';
import UserState from './context/user/UserState';
import ProductState from './context/product/ProductState';
import reportWebVitals from './reportWebVitals';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { IconContext } from 'react-icons/lib';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <IconContext.Provider value={{ color: "blue", className: "global-class-name" }}>
      <ProSidebarProvider>
      <UserState>
      <ProductState>
        <Router>
          <App />
        </Router>
        </ProductState>
        </UserState>
      </ProSidebarProvider>
    </IconContext.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
