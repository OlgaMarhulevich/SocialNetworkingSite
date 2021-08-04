import React from "react";
import {Store} from "redux";
import Dialogs from "./Dialogs";
import {StateType} from "../../redux/redux-store";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogs-reducer";

type DialogsContainerPropsType = {
    store: Store
}

function DialogsContainer(props: DialogsContainerPropsType) {
    const state = props.store.getState() as StateType

    const addMessageCallback = (id: number) => {
        props.store.dispatch(addMessageActionCreator(id));
    }
    const changeNewMessageCallback = (newMessage: string, id: number) => {
        props.store.dispatch(updateNewMessageActionCreator(newMessage, id));
    }

    return <Dialogs
        dialogs={state.dialogsPage.dialogs}
        addMessage={(id) => addMessageCallback(id)}
        changeNewMessage={(newMessage, id) => changeNewMessageCallback(newMessage, id)}/>
}

export default DialogsContainer;
