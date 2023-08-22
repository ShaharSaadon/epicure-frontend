import { httpService } from "./http.service";

export const userService = {
    signup,
    login,
    logout,
    getLoggedinUser,
};

async function signup(userCred: {
    email: string;
    password: string;
    username: string;
    fullname: string;
}) {
    try {
        const res = await httpService.post("auth/signup", userCred);
        return _handleAuthResponse(res);
    } catch (err) {
        console.error("Failed to signup:", err);
        throw err;
    }
}

async function login(userCred: { email: string; password: string }) {
    try {
        const res = await httpService.post("auth/login", userCred);
        return _handleAuthResponse(res);
    } catch (err) {
        console.error("Failed to login:", err);
        throw err;
    }
}

async function logout() {
    try {
        await httpService.get("auth/logout");
        sessionStorage.removeItem("loggedinUser");
    } catch (err) {
        console.error("Failed to logout:", err);
        throw err;
    }
}

function getLoggedinUser() {
    const user = sessionStorage.getItem("loggedinUser");
    return user ? JSON.parse(user) : null;
}

function _handleAuthResponse(user: any) {
    sessionStorage.setItem("loggedinUser", JSON.stringify(user));
    return user;
}
