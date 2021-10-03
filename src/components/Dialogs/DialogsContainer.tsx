import React from "react";
import Dialogs from "./Dialogs";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {addMessage} from "../../redux/reducers/dialogs-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {getDialogs} from "../../redux/selectors";

const mapStateToProps = (state: AppStateType) => {
    return {
        dialogs: getDialogs(state),
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        addMessage,
    }),
    withAuthRedirect
)(Dialogs)
