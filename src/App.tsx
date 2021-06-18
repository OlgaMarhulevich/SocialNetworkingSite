import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {Route} from "react-router";
import s from "./App.module.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

type AppPropsType = {
    state: {
        profilePage: {
            posts: {
                id: number,
                message: string,
                likesCount: number
            }[]
        }
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
            }[]
        },
        friendsPage: {
            friends:
                {
                    name: string,
                    img: string
                }[]
        }
    }
}

function App(props: AppPropsType) {
    return (
            <div className={s.appWrapper}>
                <Header/>
                <main>
                    <Navbar friendsPage={props.state.friendsPage}/>
                    <div className={s.content}>
                        <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage}/>}/>
                        <Route path='/dialogs' render={() => <Dialogs
                            dialogsPage={props.state.dialogsPage}/>}/>
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
