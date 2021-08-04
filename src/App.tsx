import React from 'react';
import {Route} from "react-router";
import s from "./App.module.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import DialogsPage from "./components/Dialogs/DialogsPage";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {ActionType, StateType} from "./redux/redux-store";

type AppPropsType = {
    state: StateType,
    dispatch: (action: ActionType) => void
}

function App(props: AppPropsType) {
    return (
            <div className={s.appWrapper}>
                <Header/>
                <main>
                    <Navbar friendsPage={props.state.friendsPage}/>
                    <div className={s.content}>
                        <Route path='/profile' render={() =>
                            <Profile profilePage={props.state.profilePage} dispatch={props.dispatch}/>}/>
                        
                        <Route path='/dialogs' render={() =>
                            <DialogsPage
                                dialogsPage={props.state.dialogsPage} dispatch={props.dispatch}/>}/>
                        
                        <Route path='/news' component={News}/>
                        <Route path='/music' component={Music}/>
                        <Route path='/settings' component={Settings}/>
                    </div>
                </main>
                <Footer/>
            </div>
    );
}

export default App;
