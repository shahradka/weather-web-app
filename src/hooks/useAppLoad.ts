import { MESSAGE_LOAD_NAME } from "../constants/environments";
import { useCallback, useEffect, useState } from "react"

const useAppLoad = () => {    
    const [load, setLoad] = useState<string | undefined>();
    const setLoadApp = useCallback((event: {data:Record<string, string>}) => {
        const dataObj= event.data;
        const isKeyExists = Object.keys(dataObj).find(key => key === MESSAGE_LOAD_NAME);

        if(isKeyExists)
            setLoad(dataObj[isKeyExists]);
    }, [])

    useEffect(() => {
        window.addEventListener('message', setLoadApp);
        return () => window.removeEventListener('message', setLoadApp);
    }, [])

    return {
        loadApp:load === "1"? true : false
    }
}

export {useAppLoad};