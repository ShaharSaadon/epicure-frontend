import { SET_LOGGEDIN_USER } from "../reducers/user.reducer";
import { userService } from "../../Services/user.service";
import { User } from "../../Assets/data";

interface UserCredentials {
    email: string;
    password: string;
}

export interface SetLoggedInUserAction {
    type: typeof SET_LOGGEDIN_USER;
    user: User | null; // Use the correct type for User
}

export function login(userCred: UserCredentials) {
    return async (dispatch: any) => {
        try {
            const user = await userService.userLogin(userCred);
            const action: SetLoggedInUserAction = {
                type: SET_LOGGEDIN_USER,
                user,
            };
            dispatch(action);
        } catch (error) {
            console.log("error:", error);
        }
    };
}
