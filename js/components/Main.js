import React from "react";
import { Provider } from "react-redux";
import store from "../redux/store";

import { BrowserRouter as Router,
    Switch,
    Route
 } from "react-router-dom";

import Landing from "./Home";


const Main = () => (
    <Provider store={store} > 
        <Landing />
    </Provider>
)

export default Main;