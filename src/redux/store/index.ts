import { configureStore } from '@reduxjs/toolkit'
import forecast from '../slices/forecastSlice'
import systemMessage from '../slices/systemMessageSlice'

export const store = configureStore({
    reducer: {
        forecast,
        systemMessage
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch