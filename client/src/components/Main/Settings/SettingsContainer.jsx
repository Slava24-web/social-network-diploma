import {connect} from "react-redux";
import Settings from "./Settings";

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

let settingsContainer = connect(mapStateToProps)(Settings);

export default settingsContainer;