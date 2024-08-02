import { configureStore } from '@reduxjs/toolkit'
import test from '../slices/testSlice'

export const store = configureStore({
    reducer: {
        test
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch