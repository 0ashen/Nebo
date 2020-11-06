import React from 'react';
import ReactDOM from 'react-dom';
import './assets/scss/index.scss';
import {App} from './App/App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

if (process.env.NODE_ENV === 'development') {
    const link = document.createElement('link');
    link.setAttribute('rel', 'icon');
    link.setAttribute('href', 'favs/dev-favicon.ico');
    document.querySelector('head')?.appendChild(link);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
