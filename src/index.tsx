import reportWebVitals from './reportWebVitals';
import './index.css';
import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store from "./redux/redux-store";

type StateType = {
    profilePage: {
        posts: {
            id: number,
                message: string,
                likesCount: number
        }[],
            newPostMessage: string
    },
    dialogsPage: {
        dialogs: {
            id: number,
                name: string,
                img: string
        }[],
            messages: {
            message: string,
                name: string,
                img: string
        }[],
            newMessage: string
    },
    friendsPage: {
        friends:
        {
            id: number
            name: string,
                img: string
        }[]
    }
}

const renderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} dispatch={store.dispatch.bind(store)} />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderEntireTree(store.getState());

store.subscribe(() => renderEntireTree(store.getState()));

reportWebVitals();
