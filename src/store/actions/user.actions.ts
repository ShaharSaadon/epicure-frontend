import { SET_LOGGEDIN_USER } from "../reducers/user.reducer";
import { userService } from "../../Services/user.service";
import { User } from "../../Services/link.service";
import { AppThunk } from "../../Services/link.service";

export interface UserCredentials {
    email: string;
    password: string;
}

export interface SetLoggedInUserAction {
    type: typeof SET_LOGGEDIN_USER;
    user: User | null;
}

export const login =
    (userCred: UserCredentials): AppThunk =>
    async (dispatch) => {
        try {
            const user = await userService.login(userCred);
            const action: SetLoggedInUserAction = {
                type: SET_LOGGEDIN_USER,
                user,
            };
            dispatch(action);
        } catch (error) {
            console.log("error:", error);
        }
    };
