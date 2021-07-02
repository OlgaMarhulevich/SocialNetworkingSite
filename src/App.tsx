import React from 'react';
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

/*  ТИПИЗАЦИЯ ОТДЕЛЬНЫМИ type

type PostsPropsType = {
    id: number,
    message: string,
    likesCount: number
}
type DialogsPropsType = {
    id: number,
    name: string,
    img: string
}
type MessagesPropsType = {
    message: string,
    name: string,
    img: string
}
type FriendsPropsType = {
    name: string,
    img: string
}
type ProfilePagePropsType = {
    posts: Array<PostsPropsType>
}
type DialogsPagePropsType = {
    dialogs: Array<DialogsPropsType>,
    messages: Array<MessagesPropsType>
}
type FriendsPagePropsType = {
    friends: Array<FriendsPropsType>
}
type AppStatePropsType = {
    profilePage: ProfilePagePropsType,
    dialogsPage: DialogsPagePropsType,
    friendsPage: FriendsPagePropsType,
    addPost: any
}*/

type AppPropsType = {
    state: {
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
    },
    addPost: () => void
    removePost: (id: number) => void
    addMessage: (mes: string) => void
    updateNewPostMessage: (postMessage: string) => void
    updateNewMessage: (message: string) => void
}

function App(props: AppPropsType) {
    return (
            <div className={s.appWrapper}>
                <Header/>
                <main>
                    <Navbar friendsPage={props.state.friendsPage}/>
                    <div className={s.content}>
                        <Route path='/profile' render={() => <Profile updateNewPostMessage={props.updateNewPostMessage} addPost={props.addPost} removePost={props.removePost} profilePage={props.state.profilePage}/>}/>
                        <Route path='/dialogs' render={() => <Dialogs
                            dialogsPage={props.state.dialogsPage} addMessage={props.addMessage} updateNewMessage={props.updateNewMessage}/>}/>
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
