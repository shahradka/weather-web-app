import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { selectSystemMessage } from "@redux/selectors/systemMessage";
import {actions} from "@redux/slices/systemMessageSlice"

const useSystemMessage = () => {

    const dispatch = useAppDispatch();

    const {type, message} = useAppSelector(selectSystemMessage);

    return {
        dispatchAddErrorMessage: (message:string) => dispatch(actions.addError(message)), 
        dispatchAddSuccessMessage: (message:string) => dispatch(actions.addSuccess(message)), 
        dispatchResetMessage: () => dispatch(actions.resetMessage()), 
        systemMessage: {message, type}
    }

}

export {useSystemMessage};