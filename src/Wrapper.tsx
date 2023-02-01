import React from "react";
import { Provider } from "react-redux";
import { store } from "./state/redux/store";
import { RouterProvider } from "react-router-dom";
import router from './pages/routes';

function Wrapper() {
    return (
        <Provider store={store}>
            <RouterProvider router ={router}/>
        </Provider>
    );
}

export default Wrapper;
