import { configureStore } from '@reduxjs/toolkit'
import forecast from '../slices/forecastSlice'

export const store = configureStore({
    reducer: {
        forecast,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch