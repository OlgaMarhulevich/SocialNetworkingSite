import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import {DialogsMessages} from "./DialogsMessages/DialogsMessages";
import {Route} from "react-router";
import {DialogType} from "../../entities/entities";

type DialogsPropsType = {
    dialogs: DialogType[]
    addMessage: (id: number) => void
    changeNewMessage: (newMessage: string, id: number) => void
}

function Dialogs(props: DialogsPropsType) {

    const dialogsElements = props.dialogs.map(dialog =>
        <DialogItem key={dialog.id} img={dialog.img} id={dialog.id} name={dialog.name}/>)

    return (
        <div className={s.dialogPage}>
            <div className={s.dialogsColumn}>
                {dialogsElements}
            </div>

            <div className={s.messagesColumn}>

                <Route path='/dialogs/:dialogID' render={(prop) => {
                    const dialogID = prop.match.params.dialogID;
                    const dialog = props.dialogs.find(d => d.id === +dialogID);
                    return (
                        dialog && <DialogsMessages
                            dialog={dialog}
                            addMessage={(id) => props.addMessage(id)}
                            changeNewMessage={(newMessage, id) => props.changeNewMessage(newMessage, id)}/>
                    )
                }
                }/>
            </div>
        </div>
    )
}

export default Dialogs;
