import React from "react";
import Dialogs from "./Dialogs";
import {StateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {addMessage, changeNewMessage} from "../../redux/dialogs-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state: StateType) => {
    return {
        dialogs: state.dialogs.dialogs,
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        addMessage,
        changeNewMessage,
    }),
    withAuthRedirect
)(Dialogs)
