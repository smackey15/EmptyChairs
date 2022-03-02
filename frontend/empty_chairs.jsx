import React from "react";
import ReactDOM from "react-dom";
// import {signup, login, logout} from "./util/session_api_util"
// import { signup, login, logout } from "./actions/session_actions";
import { fetchRestaurant, fetchRestaurants } from "./util/restaurant_api_util";
import configureStore from "./store/store"
import Root from "./components/root"
import { FaWindowRestore } from "react-icons/fa";


document.addEventListener("DOMContentLoaded", () => {
    // const store = configureStore();

    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
                session: {id: window.currentUser.id}
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root);

    // test
    // window.signup = signup;
    // window.login = login;
    // window.logout = logout;
    window.fetchRestaurant = fetchRestaurant
    window.fetchRestaurants = fetchRestaurants
    window.getState = store.getState;
    window.dispatch = store.dispatch;      
    // test
});