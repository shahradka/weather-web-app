import moment from 'moment';
import { useState } from 'react';

export const useLastUpdateTime = () => {

    let _interval: string | number | NodeJS.Timeout | undefined;
    const [lastUpdateFromNow, setLastUpdateFromNow] = useState<string>()

    const setLastUpdate =  () => {
        sessionStorage.setItem("lastUpdateTime", new Date().toString())
        setLastUpdateFromNow(moment(sessionStorage.getItem("lastUpdateTime")).fromNow());

        _interval = setInterval(() => {
            if(sessionStorage.getItem("lastUpdateTime"))
                setLastUpdateFromNow(moment(sessionStorage.getItem("lastUpdateTime")).fromNow());
        }, 500)
    }


    const resetLastUpdate = () => {
        sessionStorage.removeItem("lastUpdateTime");
        setLastUpdateFromNow(undefined)

        if(_interval)
        {
            clearInterval(_interval);
        }
    }

    return {
        resetLastUpdate,
        setLastUpdate,
        lastUpdateFromNow
    }

}