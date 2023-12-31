import {
    TOGGLE_MODAL,
    OPEN_MODAL,
    OpenModalAction,
    toggleModal,
} from "../actions/modal.actions";

interface ModalState {
    isOpen: boolean;
}

const INITIAL_STATE: ModalState = {
    isOpen: false,
};

type ModalActions = ReturnType<typeof toggleModal> | OpenModalAction;

export function modalReducer(
    state = INITIAL_STATE,
    action: ModalActions
): ModalState {
    switch (action.type) {
        case TOGGLE_MODAL:
            return {
                ...state,
                isOpen: !state.isOpen,
            };
        case OPEN_MODAL:
            return {
                ...state,
                isOpen: true,
            };
        default:
            return state;
    }
}
