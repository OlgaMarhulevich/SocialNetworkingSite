import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {addMessage, addPost, removePost, updateNewMessage, updateNewPostMessage} from "./redux/state";


export const renderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state}
                     updateNewPostMessage={updateNewPostMessage} addPost={addPost} removePost={removePost}
                     addMessage={addMessage} updateNewMessage={updateNewMessage}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}