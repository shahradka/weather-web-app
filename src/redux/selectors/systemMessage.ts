import { MessageState } from "@redux/slices/systemMessageSlice";
import type{ RootState } from "@redux/store";

export const selectSystemMessage = (state: RootState) => ({
       type: state.systemMessage.type,
       message: state.systemMessage.message
} as MessageState);