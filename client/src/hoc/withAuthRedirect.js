import React from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

const mapStateToPropsForRedirect = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
}

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuthenticated) return <Redirect to='/login'/>
            return <Component {...this.props} />
        }
    }

    let authRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);
    return authRedirectComponent;
}
