import * as React from "react";
import { Provider } from 'react-redux';
import "./css/styles.scss";
import { store } from "./redux/store";
import {Test} from "@components/atoms/test";

const App = () => {

    return <Provider store={store}>
                <div>
                    Contact App  Assessment!
                    <Test />
                </div>    
        </Provider>
}

export default App;