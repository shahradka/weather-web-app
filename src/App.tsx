import * as React from "react";
import { Provider } from 'react-redux';
import "./css/styles.scss";
import { store } from "./redux/store";
import { Weather } from "@components/pages/weather";
import { ToastContainer } from "react-toastify";

const App = () => {

    return <Provider store={store}>
                <ToastContainer />
                <Weather />
        </Provider>
}

export default App;