import React from "react";
import s from './DialogsPage.module.css';
import DialogItem from "./DialogItem/DialogItem";
import {DialogsMessages} from "./DialogsMessages/DialogsMessages";
import {Route} from "react-router";
import {ActionType} from "../../redux/redux-store";
import {initialDialogsStateType} from "../../redux/dialogs-reducer";

type DialogsPropsType = {
    dialogsPage: initialDialogsStateType
    dispatch: (action: ActionType) => void
}

function DialogsPage(props: DialogsPropsType) {

    const dialogsElements = props.dialogsPage.dialogs.map(dialog =>
        <DialogItem img={dialog.img} id={dialog.id} name={dialog.name}/>)

    return (
        <div className={s.dialogPage}>
            <div className={s.dialogsColumn}>
                {dialogsElements}
            </div>

            <div className={s.messagesColumn}>

                <Route path='/dialogs/:id' render={(prop) => {
                    const id = prop.match.params.id;
                    const dialog = props.dialogsPage.dialogs.find(d => d.id === +id);
                    return (
                        dialog && <DialogsMessages dispatch={props.dispatch} dialog={dialog}/>
                    )
                }
                }/>


            </div>

        </div>
    )
}

export default DialogsPage;
