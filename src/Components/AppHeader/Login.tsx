import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/actions/user.actions";

interface LoginProps {
    isLoginOpen: boolean;
    toggleLogin: () => void;
}

export const Login: React.FC<LoginProps> = ({ isLoginOpen }) => {
    const [credentials, setCredentials] = useState<{
        email: string;
        password: string;
    }>({
        email: "",
        password: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [id]: value,
        }));
    };

    const dispatch = useDispatch();
    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(login({ ...credentials }));
    };

    const { loggedinUser } = useSelector(({ userModule }) => userModule);
    return (
        <div
            className={`login ${
                isLoginOpen ? "open" : ""
            } flex flex-column items-center justify-center`}
        >
            {!loggedinUser ? (
                <div className="login-box">
                    <h1 className="title">SIGN IN </h1>
                    <h2 className="sub-title">
                        To continue the order, please sign in
                    </h2>

                    <form
                        className="login-form flex flex-column"
                        onSubmit={handleLogin}
                    >
                        <TextField
                            id="email"
                            label="Email Adress"
                            variant="standard"
                            required
                            onChange={handleChange}
                            value={credentials.email}
                        />

                        <TextField
                            id="password"
                            label="Password"
                            variant="standard"
                            type="password"
                            required
                            onChange={handleChange}
                            value={credentials.password}
                            style={{ width: "100%" }}
                        />

                        <input
                            type="submit"
                            value="Login"
                            className="login-button"
                        />
                    </form>

                    <h3 className="forget">Forget password?</h3>

                    <div className="or">or</div>

                    <button className="signup-button">Sign Up</button>
                </div>
            ) : (
                `hello ${loggedinUser.email}`
            )}
        </div>
    );
};
