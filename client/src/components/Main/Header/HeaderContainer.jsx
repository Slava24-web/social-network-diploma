import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../../redux/auth/action";

const HeaderContainer = (props) => {
    return <Header {...props} profile={props.profile} />
}

// Сюда приходят данные из редьюсера
const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    login: state.auth.user.name,
    profile: state.profile.profile
});

let headerContainer = connect(mapStateToProps, {
    logout
})(HeaderContainer);

export default headerContainer;