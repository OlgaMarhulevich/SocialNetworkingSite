import reportWebVitals from './reportWebVitals';
import './index.css';
import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store, {StateType} from "./redux/redux-store";
import {StoreContext} from "./StoreContext";

const renderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <StoreContext.Provider value={store}>
                    <App/>
                    {/*<App state={state} dispatch={store.dispatch.bind(store)} store={store}/>*/}
                </StoreContext.Provider>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderEntireTree(store.getState());

store.subscribe(() => renderEntireTree(store.getState()));

reportWebVitals();
