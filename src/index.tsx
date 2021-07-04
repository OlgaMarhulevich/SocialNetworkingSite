import reportWebVitals from './reportWebVitals';
import './index.css';
import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store from "./redux/state";


const renderEntireTree = (state: any) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state}
                     updateNewPostMessage={store.updateNewPostMessage.bind(store)} addPost={store.addPost.bind(store)} removePost={store.removePost.bind(store)}
                     addMessage={store.addMessage.bind(store)} updateNewMessage={store.updateNewMessage.bind(store)}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderEntireTree(store.getter());

store.subscribe(renderEntireTree);

reportWebVitals();
