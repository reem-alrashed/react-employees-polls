import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import {useState} from "react";
import {handleLogin} from "../actions/authedUser";

const Login = ({dispatch, isLoggedin}) => {
    const [username, setUsername] = useState("reem");
    const [password, setPassword] = useState("password123");

    if (isLoggedin) {
        const urlParams = new URLSearchParams(window.location.search);
        const redirectUrl = urlParams.get('redirectTo');
        return <Navigate to={redirectUrl ? redirectUrl : "/"}/>;
    }

    const handleUsername = (e) => {
        const value = e.target.value;
        setUsername(value);
    };

    const handlePassword = (e) => {
        const value = e.target.value;
        setPassword(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(handleLogin(username, password));
        setUsername("");
        setPassword("");
    };

    return (
        <div>
            <h1 className="text-2xl font-bold" data-testid="login-heading">Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username" className="block">Username</label>
                    <div className="m-1">
                        <input
                            value={username}
                            onChange={handleUsername}
                            type="text"
                            name="username"
                            id="username"
                            data-testid="username"
                            className="p-4 bg-white border border-slate-300 placeholder-slate-400  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none"/>
                    </div>
                </div>
                <div className="mt-6">
                    <label htmlFor="password" className="block">Password</label>
                    <div className="mt-1">
                        <input
                            value={password}
                            onChange={handlePassword}
                            type="password"
                            name="password"
                            id="password"
                            data-testid="password"
                            className="p-4 bg-white border border-slate-300 placeholder-slate-400  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none"/>
                    </div>
                </div>
                <div className="mt-6 text-right">
                    <button type="submit"
                            data-testid="submit"
                            className="bg-sky-400 hover:bg-sky-700 px-5 py-2 text-sm rounded-md font-semibold text-white">
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
};

const mapStateToProps = ({authedUser}) => ({
    isLoggedin: !!authedUser,
});

export default connect(mapStateToProps)(Login);
