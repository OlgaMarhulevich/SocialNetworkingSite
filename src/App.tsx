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
    dialogsData: {
        id: number,
        name: string
    }[],
    messagesData: {
        message: string
    }[],
    postsData: {
        id: number,
        message: string,
        likesCount: number
    }[]
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className={s.appWrapper}>
                <Header/>
                <main>
                    <Navbar/>
                    <div className={s.content}>
                        <Route path='/profile' render={ () => <Profile postsData={props.postsData}/> }/>
                        <Route path='/dialogs' render={ () => <Dialogs
                            dialogsData={props.dialogsData} messagesData={props.messagesData}/> }/>
                        <Route path='/news' component={News}/>
                        <Route path='/music' component={Music}/>
                        <Route path='/settings' component={Settings}/>
                    </div>
                </main>
                <Footer/>
            </div>
        </BrowserRouter>

    );
}

export default App;
