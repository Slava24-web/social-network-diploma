import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {getStatus, getUserProfile, updateStatus, saveAvatar, saveProfile} from "../../../redux/CoverReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";

const ProfileContainer = (props) => {
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

        // Получение статуса
        props.getStatus(userId);
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
        <Profile {...props}
                 isOwner={!props.match.params.userId}
                 profile={props.profile}
                 status={props.status}
                 updateStatus={props.updateStatus}
                 time={props.time}
                 saveAvatar={props.saveAvatar}
                 saveProfile={props.saveProfile}
        />
    );
}

const mapStateToProps = (state) => {
    return {
        profile: state.profile.profile,
        status: state.profile.status,
        authUserId: state.auth.userId,
        isAuthenticated: state.auth.isAuthenticated,
        time: state.profile.time
    }
}

export default compose(
    connect(mapStateToProps, {
        getUserProfile,
        getStatus,
        updateStatus,
        saveAvatar,
        saveProfile
    }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);