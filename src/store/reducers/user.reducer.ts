import { User } from "../../Assets/data";
import { userService } from "../../Services/user.service";

// Define action types as constants
export const SET_LOGGEDIN_USER = "SET_LOGGEDIN_USER";
export const SET_ORDERS = "SET_ORDERS";
// Define the shape of the state
interface UserState {
    loggedinUser: User | null;
}

// Define the shape of the action
interface SetLoggedInUserAction {
    type: typeof SET_LOGGEDIN_USER;
    user: User | null;
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
