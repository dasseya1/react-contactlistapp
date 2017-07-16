import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let contacts = [
    {name: "Cassio Zen", email: "cassiozen@gmail.com"},
    {name: "Dan Abramov", email: "danabramov@gmail.com"},
    {name: "Pete Hunt", email: "petehunt@gmail.com"},
    {name: "Paul O'Shannessy", email: "pauloshannessy@gmail.com"}
];

ReactDOM.render(<App contacts={contacts} />, document.getElementById('root'));
registerServiceWorker();
