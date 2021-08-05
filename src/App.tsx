import React from 'react';
import {Route} from "react-router";
import s from "./App.module.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {ActionType, StateType} from "./redux/redux-store";
import {Store} from "redux";

type AppPropsType = {
    /*store: Store
    state: StateType
    dispatch: (action: ActionType) => void*/
}

function App(props: AppPropsType) {
    return (
            <div className={s.appWrapper}>
                <Header/>
                <main>
                    <Navbar />
                    <div className={s.content}>
                        <Route path='/profile' render={() =>
                            <Profile /*store={props.store}*//>}/>
                        
                        <Route path='/dialogs' render={() =>
                            <DialogsContainer /*store={props.store}*//>}/>
                        
                        <Route path='/news' component={News}/>
                        <Route path='/music' component={Music}/>
                        <Route path='/settings' component={Settings}/>
                    </div>
                </main>
                <Footer/>
            </div>
    )
}

export default App;
