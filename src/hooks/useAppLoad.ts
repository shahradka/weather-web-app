import { MESSAGE_LOAD_NAME } from "../constants/environments";
import { useCallback, useEffect, useState } from "react"

const useAppLoad = () => {    
    const [load, setLoad] = useState<string | undefined>();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const setLoadApp = useCallback((event: any) => {
        if(event.data[MESSAGE_LOAD_NAME || ""] !== undefined)
            setLoad(event.data[MESSAGE_LOAD_NAME || ""])
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