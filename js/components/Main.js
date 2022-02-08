import React from "react";
import { Provider } from "react-redux";
import store from "../redux/store";

import Search from "./Home/SearchView";
import Landing from "./Home";


const Main = () => (
    <Provider store={store} >  
        <Landing />
    </Provider>
)

export default Main;