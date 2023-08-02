import { SET_LOGGEDIN_USER } from "../reducers/user.reducer";
import { userService } from "../../Services/user.service";
import { Credentials } from "../../Assets/data";
interface UserCredentials {
    email: string;
    password: string;
}
export interface SetLoggedInUserAction {
    type: typeof SET_LOGGEDIN_USER;
    credentials: Credentials;
}

export function login(userCred: UserCredentials) {
    return async (dispatch: any) => {
        try {
            const credentials = await userService.login(userCred);
            const action: SetLoggedInUserAction = {
                type: SET_LOGGEDIN_USER,
                credentials,
            };
            dispatch(action);
        } catch (error) {
            console.log("error:", error);
        }
    };
}
