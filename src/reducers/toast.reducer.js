import { ipfsActions, toastActions } from '../actions';

export const initialState = {
    toasts: [],
};

var counter = 0;
export default function toatsReducer(state = initialState, action) {
    switch (action.type) {
        case ipfsActions.FORK_PROJECT_SUCCESS:
        case ipfsActions.FORK_PROJECT_FAIL:
            counter += 1;
            const toast = {
                id: counter,
                type: action.type
            }
            return {
                ...state,
                toasts: state.toasts.concat(toast)
            }
        case toastActions.TOAST_DISMISSED:
            return {
                ...state,
                toasts: state.toasts.filter(toast => action.data !== toast.id),

            }
        default:
            return state;
    }
}
