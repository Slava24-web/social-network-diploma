import React, {useEffect, useState} from 'react';
import './css/App.css';
import Main from './components/Main/Main';
import MenuContainer from "./components/Menu/MenuContainer";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/AppReducer";
import {BrowserRouter, withRouter} from "react-router-dom";
import Preloader from "./components/Main/Common/Preloader/Preloader";
import store, {persistor} from "./redux/redux-store";
import {PersistGate} from 'redux-persist/es/integration/react';
import jwtDecode from "jwt-decode";
import setAuthToken from "./Utils/Helpers/setAuthToken";
import {setCurrentUser} from "./redux/auth/reducer";
import {logout} from "./redux/auth/action";

const App = (props) => {
    const [isVisibleMenu, setVisibleMenu] = useState(false);

    const catchAllUnhandledErrors = (reason, promise) => {
        alert("Some error occured");
    }

    const setVisibleMenuHandler = () => {
        setVisibleMenu(!isVisibleMenu);
    }

    const setUnvisibleMenuHandler = () => {
        setVisibleMenu(false);
    }

    useEffect(() => {
        props.initializeApp();
        // window.addEventListener("unhandledrejection", catchAllUnhandledErrors);
        //
        // return () => {
        //     window.removeEventListener("unhandledrejection", catchAllUnhandledErrors);
        // }
    }, []);

    if (localStorage.access_token) {
        const {access_token} = localStorage;
        setAuthToken(access_token);
        const decoded = jwtDecode(access_token);
        store.dispatch(setCurrentUser(decoded));
        const currentTime = Date.now() / 1000;

        if (decoded.exp < currentTime) {
            store.dispatch(logout());
            window.location.href = '/login';
        }
    }

    return (
        !props.initialized
            ? <Preloader/>
            : <div className={`${isVisibleMenu ? 'app-wrapper' : 'app-wrapper_'}`}>
                {isVisibleMenu && <MenuContainer setUnvisibleMenuHandler={setUnvisibleMenuHandler} isVisibleMenu={isVisibleMenu}/>}
                <Main setVisibleMenuHandler={setVisibleMenuHandler} isVisibleMenu={isVisibleMenu}/>
            </div>
    );
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

// Главный компонент приложения
const SocialNetworkApp = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                {/*<PersistGate persistor={persistor}>*/}
                    <AppContainer/>
                {/*</PersistGate>*/}
            </Provider>
        </BrowserRouter>
    );
}

export default SocialNetworkApp;