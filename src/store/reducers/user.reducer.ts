import { userService } from "../../Services/user.service";

// Define action types as constants
export const SET_LOGGEDIN_USER = "SET_LOGGEDIN_USER";

// Define the shape of the state
interface UserState {
    loggedinUser: any; // replace 'any' with the actual type of your user
}

// Define the shape of the action
interface SetLoggedInUserAction {
    type: typeof SET_LOGGEDIN_USER;
    user: any; // replace 'any' with the actual type of your user
}

// This type is used for the reducer function
type UserActionTypes = SetLoggedInUserAction;

const INITIAL_STATE: UserState = {
    loggedinUser: userService.getLoggedinUser(),
};

export function userReducer(
    state = INITIAL_STATE,
    action: UserActionTypes
): UserState {
    switch (action.type) {
        case SET_LOGGEDIN_USER:
            return {
                ...state,
                loggedinUser: action.user,
            };

        default:
            return state;
    }
}
