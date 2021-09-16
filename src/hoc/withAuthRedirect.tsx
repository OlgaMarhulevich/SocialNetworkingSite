import React, {Component} from "react";
import {Redirect} from "react-router";
import {StateType} from "../redux/redux-store";
import {connect} from "react-redux";

type mapStateToPropsType = { isAuth: boolean }
const mapStateToProps = (state: StateType): mapStateToPropsType => ({isAuth: state.auth.isAuth})

export function withAuthRedirect <T>(Component: React.ComponentType<T>) {

    function AuthRedirectComponent (props: mapStateToPropsType) {
        let {isAuth, ...restProps} = props
        if (!isAuth) return <Redirect to={'/login'}/>
        return <Component {...restProps as T}/>
    }

    const ConnectedAuthRedirectComponent = connect(mapStateToProps, {}) (AuthRedirectComponent)

    return ConnectedAuthRedirectComponent
}