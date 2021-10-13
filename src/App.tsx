import React from 'react';
import {Route, withRouter} from "react-router";
import s from "./App.module.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializedApp} from "./redux/reducers/app-reducer";
import {AppStateType} from "./redux/redux-store";
import {Preloader} from "./common/preloader/Preloader";

type AppPropsType = {
    initializedApp: () => void
    isInitialized: boolean
}

class App extends React.Component<AppPropsType> {
    componentDidMount() {
        this.props.initializedApp()
    }

    render() {
        return this.props.isInitialized ?
            <div className={s.appWrapper}>
                <HeaderContainer/>
                <main>
                    <Navbar/>
                    <div className={s.content}>
                            <Route path='/dialogs' component={DialogsContainer}/>
                            <Route path='/users' component={UsersContainer}/>
                            <Route path='/news' component={News}/>
                            <Route path='/music' component={Music}/>
                            <Route path='/settings' component={Settings}/>
                            <Route path='/login' component={Login}/>
                            <Route path='/profile/:userID?' component={ProfileContainer}/>
                            
                            <Route exact path='/SocialNetworkingSite' component={ProfileContainer}/>
                            <Route exact path='/' component={ProfileContainer}/>
                    </div>
                </main>
                <Footer/>
            </div>
            :
            <Preloader/>
    }
}

export default compose<React.ComponentType>(
    withRouter,
    connect((state: AppStateType) => ({isInitialized: state.app.isInitialized}), {initializedApp}))(App);
