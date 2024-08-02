import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'

export interface TestState {
  value: number
}

const initialState: TestState = {
  value: 0,
}

export const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    set: (state) => {
      state.value = 1
    },
    unset: (state) => {
      state.value = 0
    },
  },
})

export const { set, unset } = testSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const testValue = (state: RootState) => state.test.value

export default testSlice.reducer