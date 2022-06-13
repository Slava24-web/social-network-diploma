import Notifications from "./Notifications";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

let notificationsContainer = connect(mapStateToProps)(Notifications);

export default notificationsContainer;