import {connect} from "react-redux";
import Events from "./Events";

const mapStateToState = (state) => {
    return {
        user: state.user,
        text: state.eventsPage.eventsData.text
    }
}

let eventsContainer = connect(mapStateToState)(Events);

export default eventsContainer;