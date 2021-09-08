import React from "react";
import Dialogs from "./Dialogs";
import {StateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {addMessage, changeNewMessage} from "../../redux/dialogs-reducer";

const mapStateToProps = (state: StateType) => {
    return {
        dialogs: state.dialogs.dialogs,
        isAuth: state.auth.isAuth
    }
}

const DialogsContainer = connect(mapStateToProps, {
    addMessage,
    changeNewMessage,
}) (Dialogs)

export default DialogsContainer;
