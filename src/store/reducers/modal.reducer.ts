import { TOGGLE_MODAL } from "../actions/modal.actions";

interface ModalState {
    isOpen: boolean;
}

const INITIAL_STATE: ModalState = {
    isOpen: false,
};

type ModalActions = ReturnType<typeof toggleModal>;

export function modalReducer(
    state = INITIAL_STATE,
    action: ModalActions
): ModalState {
    switch (action.type) {
        case TOGGLE_MODAL:
            return {
                ...state,
                isOpen: !state.isOpen, // Here, we just flip the current state
            };
        default:
            return state;
    }
}
