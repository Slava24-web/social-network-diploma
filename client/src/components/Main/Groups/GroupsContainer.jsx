import {connect} from "react-redux";
import Groups from "./Groups";
import {join, leave, setGroups} from "../../../redux/GroupsReducer";

let mapStateToProps = (state) => {
    return {
        groups: state.groupsPage.groups,
        user: state.user
    }
};

const groupsContainer = connect(mapStateToProps, {
    join,
    leave,
    setGroups
})(Groups);

export default groupsContainer;