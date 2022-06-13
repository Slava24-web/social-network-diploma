import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import activityReducer from "./posts/ActivityReducer";
import messagesReducer from "./MessagesReducer";
import menuReducer from "./MenuReducer";
import eventsReducer from "./EventsReducer";
import groupsReducer from "./GroupsReducer";
import membersReducer from "./MembersReducer";
import coverReducer from "./CoverReducer";
import authReducer from "./auth/reducer";
import thunkMiddleWare from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import appReducer from "./AppReducer";
import chatReducer from "./ChatReducer";
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import {persistStore, persistReducer} from 'redux-persist';

let reducers = combineReducers({
        activityPage: activityReducer,
        messagesPage: messagesReducer,
        menu: menuReducer,
        eventsPage: eventsReducer,
        groupsPage: groupsReducer,
        profile: coverReducer,
        membersPage: membersReducer,
        auth: authReducer,
        form: formReducer,
        app: appReducer,
        chat: chatReducer
    }
);

// Настройка Persist
const reduxPersistConfig = {
        key: 'application',
        storage: storage,
        stateReconciler: autoMergeLevel2
};

const pReducers = persistReducer(reduxPersistConfig, reducers);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(pReducers, composeEnhancers(applyMiddleware(thunkMiddleWare)));
export let persistor = persistStore(store);

// let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

window.__store__ = store;

export default store;