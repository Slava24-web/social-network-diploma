import React from "react";
import {addComment, addPost, deletePost} from "../../../redux/posts/ActivityReducer";
import Activity from "./Activity";
import {connect} from "react-redux";
import {compose} from "redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {getNewPostText, getTwits, getUser} from "../../../redux/Selectors/ActivitySelectors";
import {getUserProfile} from "../../../redux/CoverReducer";
import {withRouter} from "react-router-dom";

const ActivityContainer = (props) => {
    const refreshProfile = () => {
        let userId = props.match.params.userId;
        if (!userId) {
            userId = props.authUserId;
            if (!userId) {
                // Программный редирект
                props.history.push("/login");
            }
        }
        // Вернётся data и вызовется setProfile(data), изменив state
        // Будущий profile
        props.getUserProfile(userId);
    }

    // Вызов при вмонтировании (componentDidMount)
    React.useEffect(() => {
        refreshProfile();
    }, []);

    // Вызов при обновлении (componentDidUpdate)
    React.useEffect(() => {
        refreshProfile();
    }, [props.match.params.userId]);

    return (
        <Activity {...props}
                  twits={props.twits}
                  profile={props.profile}
                  onAddPost={props.onAddPost}
                  newPostText={props.newPostText}
                  isAuthenticated={props.isAuthenticated}
        />
    );
}

const mapStateToProps = (state) => {
    return {
        twits: getTwits(state),
        newPostText: getNewPostText(state),
        user: getUser(state),
        profile: {},
        authUserId: state.auth.user.id,
        isAuthenticated: state.auth.isAuthenticated
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddPost: (twitBody) => {
            dispatch(addPost(twitBody));
        },
        getUserProfile,
        deletePost: (twitId) => {
            dispatch(deletePost(twitId));
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    withAuthRedirect
)(ActivityContainer);