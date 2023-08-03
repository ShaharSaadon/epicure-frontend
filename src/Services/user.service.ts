const STORAGE_KEY_LOGGEDIN_USER = "loggedinUser";
import { allUsers } from "../Assets/data";
export const userService = {
    getLoggedinUser,
    userLogin: login,
};

import { User, LoggedInUser } from "../Assets/data";

function getLoggedinUser(): User | null {
    const user = sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER);
    return user ? JSON.parse(user) : null;
}

async function login(userCred: UserCred): Promise<User | null> {
    // const user = await httpService.post("auth/login", userCred);
    // console.log("user:", user);

    const user = allUsers.find(
        (user) =>
            user.email === userCred.email && user.password === userCred.password
    );
    if (!user) {
        // No user found with the given credentials
        return null;
    }

    saveLocalUser(user); // Assuming that saveLocalUser is a function that accepts a User object
    return user;
}

function saveLocalUser(user: LoggedInUser) {
    user = {
        _Id: user._Id,
        email: user.email,
    };

    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user));

    return user;
}

window.userService = userService;
