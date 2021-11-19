import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import BmiApp from './BmiApp';
import BmiAppFunction from './BmiAppFunctional';
import {Header, Footer} from './banners'

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <BmiAppFunction />
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
