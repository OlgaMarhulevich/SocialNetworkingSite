import React from "react";
import Dialogs from "./Dialogs";
import {ActionType, StateType} from "../../redux/redux-store";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";

const mapStateToProps = (state: StateType) => {
    return {
        dialogs: state.dialogsPage.dialogs
    }
}
const mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    return {
        addMessage: (id: number) => dispatch(addMessageActionCreator(id)),
        changeNewMessage: (newMessage: string, id: number) => dispatch(updateNewMessageActionCreator(newMessage, id))
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs)

export default DialogsContainer;
