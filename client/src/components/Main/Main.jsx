import React from 'react';
import Home from './Home/Home';
import Footer from './Footer/Footer';
import {Route, Switch} from "react-router-dom";
import {withSuspense} from "../../hoc/withSuspense";
import ActivityContainer from "./Activity/ActivityContainer";
import ProfileContainer from "./Profile/ProfileContainer";
import HeaderContainer from "./Header/HeaderContainer";
import MembersContainer from "./Members/MembersContainer";
import Calls from "./Calls";
import Room from "./Calls/Room";
const NotificationsContainer = React.lazy(() => import('./Notifications/NotificationsContainer'));
const EventsContainer = React.lazy(() => import('./Events/EventsContainer'));
const GroupsContainer = React.lazy(() => import('./Groups/GroupsContainer'));
const SettingsContainer = React.lazy(() => import('./Settings/SettingsContainer'));
const MessagesContainer = React.lazy(() => import('./Messages/MessagesContainer'));
const Register = React.lazy(() => import('./../Auth/Register/Register'));
const Login = React.lazy(() => import('./../Auth/Login/Login'));

const Main = ({setVisibleMenuHandler}) => {
    return (
        <div className="main">
            <HeaderContainer setVisibleMenuHandler={setVisibleMenuHandler}/>
            <div className="mainContent">
                <Switch>
                    <Route path='/home' render={() => <Home/>}/>
                    <Route path='/activity' render={() => <ActivityContainer/>}/>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/messages' render={withSuspense(MessagesContainer)}/>
                    <Route exact path='/calls' render={() => <Calls/>}/>
                    <Route exact path='/room/:id' render={() => <Room/>}/>
                    <Route path='/events' render={withSuspense(EventsContainer)}/>
                    <Route path='/groups' render={withSuspense(GroupsContainer)}/>
                    <Route path='/settings' render={withSuspense(SettingsContainer)}/>
                    <Route path='/login' render={withSuspense(Login)}/>
                    <Route path='/register' render={withSuspense(Register)}/>
                    <Route exact path='/' render={() => <Home/>}/>
                </Switch>
            </div>
            <Footer/>
        </div>
    );
}

export default Main;