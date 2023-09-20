import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux'
import { store } from "./redux/Store";
import { BrowserRouter } from "react-router-dom";
import App from './App';
import { Toaster } from 'react-hot-toast';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Provider store={store}>
    <App />   
    <Toaster/>
    
  </Provider>
</BrowserRouter>
    
 
);


