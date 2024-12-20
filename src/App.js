import React, { useEffect } from 'react';
import './App.css';
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import NewPoll from "./components/NewPoll";
import PollPage from "./components/PollPage";
import { connect } from "react-redux";
import Login from "./components/Login";
import { handleInitialData } from "./actions/shared";
import Leaderboard from "./components/Leaderboard";
import PageNotFound from "./components/404";
import PrivateRoute from "./components/PrivateRoute";

function App({ dispatch, isLoggedin }) {
    useEffect(() => {
        dispatch(handleInitialData());
    }, [dispatch]);  // Added dependency array to prevent infinite loop.

    return (
        <div>
            {isLoggedin && <Nav />}
            <div className={`mt-2 ${!isLoggedin ? 'mt-0' : ''}`}> {/* Add conditional margin */}
                <Routes>
                    <Route path="/login" exact element={<Login />} />
                    <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
                    <Route path="/leaderboard" exact element={<PrivateRoute><Leaderboard /></PrivateRoute>} />
                    <Route path="/questions/:id" element={<PrivateRoute><PollPage /></PrivateRoute>} />
                    <Route path="/new" exact element={<PrivateRoute><NewPoll /></PrivateRoute>} />
                    <Route path="/404" exact element={<PageNotFound />} />
                </Routes>
            </div>
        </div>
    );
}

const mapStateToProps = ({ authedUser }) => ({
    isLoggedin: !!authedUser,
});

export default connect(mapStateToProps)(App);
