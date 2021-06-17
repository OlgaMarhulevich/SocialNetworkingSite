import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogsData = [
    {id: 1, name: 'Nick'},
    {id: 2, name: 'David'},
    {id: 3, name: 'Anna'},
]
let messagesData = [
    {message: 'Hi!'},
    {message: 'How are you?'},
    {message: 'Yo'},
]
let postsData = [
    {id: 1, message: 'Hi!', likesCount: 25},
    {id: 2, message: 'How are you?', likesCount: 15},
]

ReactDOM.render(
    <React.StrictMode>
        <App dialogsData={dialogsData} messagesData={messagesData} postsData={postsData}/>
    </React.StrictMode>,
    document.getElementById('root')
);
reportWebVitals();
