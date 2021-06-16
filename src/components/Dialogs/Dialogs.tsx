import React from "react";
import s from './Dialogs.module.css';

function Dialogs() {
    return (
        <div className={s.dialogs}>
            <div className={s.names}>
                <div className={s.dialog}>
                    Nick
                </div>
                <div className={s.dialog}>
                    David
                </div>
                <div className={s.dialog}>
                    Tom
                </div>
                <div className={s.dialog}>
                    Jerry
                </div>
                <div className={s.dialog}>
                    Anna
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi!</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>Yo</div>
            </div>
        </div>
    )
}

export default Dialogs;
