import React, {useEffect} from "react";
import "./css/styles.scss";
import { getTodos } from "./api/todos";

const App = () => {

    useEffect(() => {
        console.log(getTodos());
    }, [])

    return <div>
        Contact App  Assessment!
    </div>
}

export default App;