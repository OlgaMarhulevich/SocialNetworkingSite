import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import {DialogsMessages} from "./DialogsMessages/DialogsMessages";
import {Route} from "react-router";

type DialogsPropsType = {
    dialogsPage: {
        dialogs: {
            id: number,
            name: string,
            img: string,
            messages: {
                message: string,
                name: string,
                img: string
            }[]
        }[],
        newMessage: string
    },
    dispatch: (action: Object) => void
}

function DialogsPage(props: DialogsPropsType) {

    const dialogsElements = props.dialogsPage.dialogs.map(dialog =>
        <DialogItem img={dialog.img} id={dialog.id} name={dialog.name}/>)

    return (
        <div className={s.dialogPage}>
            <div className={s.dialogName}>
                {dialogsElements}
            </div>

            <div >

                <Route path='/dialogs/:id' render={(prop) => {
                    const id = prop.match.params.id
                    const dialog = props.dialogsPage.dialogs.find(d => d.id === +id)
                    return (
                        dialog && <DialogsMessages dispatch={props.dispatch} dialog={dialog}
                                         newMessage={props.dialogsPage.newMessage}/>
                    )
                }
                }/>


            </div>

        </div>
    )
}

export default DialogsPage;
