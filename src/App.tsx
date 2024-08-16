import * as React from "react";
import { Provider } from 'react-redux';
import "./css/styles.scss";
import { store } from "./redux/store";
import { Weather } from "@components/pages/weather";

const App = () => {

    return <Provider store={store}>
                <Weather />
        </Provider>
}

export default App;