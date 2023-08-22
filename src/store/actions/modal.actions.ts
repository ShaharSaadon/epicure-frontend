export const TOGGLE_MODAL = "TOGGLE_MODAL";
export const OPEN_MODAL = "OPEN_MODAL";

interface ToggleModalAction {
    type: typeof TOGGLE_MODAL;
}

export interface OpenModalAction {
    type: typeof OPEN_MODAL;
}

export function toggleModal(): ToggleModalAction {
    return {
        type: TOGGLE_MODAL,
    };
}

export function openModal(): OpenModalAction {
    return {
        type: OPEN_MODAL,
    };
}
