import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Menu } from "./components/Menu";
import DocumentMeta from 'react-document-meta';

import 'bootstrap/dist/css/bootstrap.min.css';


const meta = {
  charset: 'utf-8',
  name: {
      keywords: 'consulting,engineering,design,development'
  }
}

ReactDOM.render(
  <React.StrictMode>
    <DocumentMeta {...meta} />
    <Menu />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
