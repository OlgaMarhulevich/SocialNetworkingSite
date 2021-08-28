import React from 'react';
import {Route} from "react-router";
import s from "./App.module.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from './components/Users/UsersContainer';

function App() {
    return (
            <div className={s.appWrapper}>
                <Header/>
                <main>
                    <Navbar />
                    <div className={s.content}>
                        <Route path='/profile' render={() =>
                            <ProfileContainer />}/>
                        
                        <Route path='/dialogs' render={() =>
                            <DialogsContainer />}/>

                        <Route path='/users' render={() =>
                            <UsersContainer/>}/>

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
