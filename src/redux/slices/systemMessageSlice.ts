import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface MessageState {
  message?: string
  type:"Error" | "Success" | "Info"

}

const initialState: MessageState = {
  type:"Info"
}

export const messageSlice = createSlice({
  name: 'system_message',
  initialState,
  reducers: {
    addError:(state, action:PayloadAction<string>) => {
      state.message = action.payload
      state.type = "Error"
    },
    addSuccess: (state, action:PayloadAction<string>) => {
      state.message = action.payload
      state.type = "Success"
    },
    resetMessage: (state) => {
      state.message = undefined
      state.type = "Info"
    },
  },
})

export const actions = messageSlice.actions

export default messageSlice.reducer