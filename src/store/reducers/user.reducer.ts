import { User } from "../../Services/link.service";
import { userService } from "../../Services/user.service";

export const SET_LOGGEDIN_USER = "SET_LOGGEDIN_USER";
export const SET_ORDERS = "SET_ORDERS";
interface UserState {
    loggedinUser: User | null;
}

interface SetLoggedInUserAction {
    type: typeof SET_LOGGEDIN_USER;
    user: User | null;
}

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
