import {sendMessage} from "../../../redux/MessagesReducer";
import Messages from "./Messages";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogs: state.messagesPage.dialogs,
        messages: state.messagesPage.messages,
        newMessageText: state.messagesPage.newMessageText,
        user: state.user
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (messageBody) => {
            dispatch(sendMessage(messageBody));
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
    // Результат от первой функции придёт во вторую функцию (снизу-вверх)
)(Messages);