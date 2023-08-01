export const TOGGLE_MODAL = "TOGGLE_MODAL";

interface ToggleModalAction {
    type: typeof TOGGLE_MODAL;
}

export function toggleModal(): ToggleModalAction {
    return {
        type: TOGGLE_MODAL,
    };
}
