import { useAppSelector, useAppDispatch } from '@redux/hooks'
import { set, unset } from '@redux/slices/testSlice';
import { RootState } from "@redux/store";
import React from 'react';

const Test = () => {
    const value = useAppSelector((state:RootState) => state.test.value);
    const dispatch = useAppDispatch();

    console.log("value", value)

    const handleClick = () => {
        if(value === 1)
            dispatch(unset());
        else
            dispatch(set())
    }
    return <button onClick={handleClick}>click me to {value === 1? 'unset' : 'set'}</button>

}

export default Test;