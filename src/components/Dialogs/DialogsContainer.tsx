import React from "react";
import {Store} from "redux";
import Dialogs from "./Dialogs";
import {StateType} from "../../redux/redux-store";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogs-reducer";
import {StoreContext} from "../../StoreContext";

type DialogsContainerPropsType = {
    /*store: Store*/
}

function DialogsContainer(props: DialogsContainerPropsType) {

    return (
        <StoreContext.Consumer>
            {store => {
                const state = store.getState() as StateType

                const addMessageCallback = (id: number) => {
                    store.dispatch(addMessageActionCreator(id));
                }
                const changeNewMessageCallback = (newMessage: string, id: number) => {
                    store.dispatch(updateNewMessageActionCreator(newMessage, id));
                }
                return (
                    <Dialogs
                        dialogs={state.dialogsPage.dialogs}
                        addMessage={(id) => addMessageCallback(id)}
                        changeNewMessage={(newMessage, id) => changeNewMessageCallback(newMessage, id)}/>
                )
            }}
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;
