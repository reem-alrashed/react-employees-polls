import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import { handleLogin } from "../actions/authedUser";

const Login = ({ dispatch, isLoggedin }) => {
    const [username, setUsername] = useState("reem");
    const [password, setPassword] = useState("password123");

    if (isLoggedin) {
        const urlParams = new URLSearchParams(window.location.search);
        const redirectUrl = urlParams.get('redirectTo');
        return <Navigate to={redirectUrl ? redirectUrl : "/"} />;
    }

    const handleUsername = (e) => {
        setUsername(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(handleLogin(username, password));
        setUsername("");
        setPassword("");
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6" data-testid="login-heading">
                    Welcome Back!
                </h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-lg font-medium text-gray-700">Username</label>
                        <input
                            value={username}
                            onChange={handleUsername}
                            type="text"
                            name="username"
                            id="username"
                            data-testid="username"
                            className="mt-2 w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-lg font-medium text-gray-700">Password</label>
                        <input
                            value={password}
                            onChange={handlePassword}
                            type="password"
                            name="password"
                            id="password"
                            data-testid="password"
                            className="mt-2 w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                        />
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            data-testid="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold text-lg transition duration-200"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

const mapStateToProps = ({ authedUser }) => ({
    isLoggedin: !!authedUser,
});

export default connect(mapStateToProps)(Login);
