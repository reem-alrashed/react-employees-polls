import { Link, useNavigate } from "react-router-dom";  // Import useNavigate for programmatic navigation
import { connect } from "react-redux";
import { handleLogout } from "../actions/authedUser";
import PollLogo from "./PollLogo";  // Import the PollLogo component
import { useState } from "react";  // Import useState to manage mobile menu toggle

const Nav = ({ dispatch, authenticatedUserId }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);  // State to manage mobile menu visibility
    const navigate = useNavigate();  // Initialize the navigate hook for redirection

    const logout = (e) => {
        e.preventDefault();
        dispatch(handleLogout());
    };

    const handleLogoClick = () => {
        // Navigate to the Dashboard when the logo is clicked
        navigate('/');
    };

    const toggleMobileMenu = () => {
        // Toggle the mobile menu visibility
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-white shadow-sm fixed w-full top-0 left-0 z-20">
            <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* PollLogo Component with click handler */}
                <div className="flex items-center space-x-2 cursor-pointer" onClick={handleLogoClick}>
                    <PollLogo />  {/* Render the PollLogo */}
                </div>

                {/* Navbar Links (Desktop) */}
                <div className="hidden md:flex space-x-8">
                    <Link
                        to="/"
                        className="text-lg font-medium text-gray-700 hover:text-blue-600 transition duration-200"
                    >
                        Home
                    </Link>
                    <Link
                        to="/leaderboard"
                        className="text-lg font-medium text-gray-700 hover:text-blue-600 transition duration-200"
                    >
                        Leaderboard
                    </Link>
                    <Link
                        to="/new"
                        className="text-lg font-medium text-gray-700 hover:text-blue-600 transition duration-200"
                    >
                        New Poll
                    </Link>
                </div>

                {/* User Info and Logout */}
                <div className="flex items-center space-x-4">
                    <span className="font-medium text-gray-700">Hello, {authenticatedUserId}</span>
                    <button
                        onClick={logout}
                        className="text-lg font-medium text-gray-700 hover:text-red-600 transition duration-200"
                    >
                        Logout
                    </button>
                </div>

                {/* Mobile menu toggle (hamburger) */}
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMobileMenu} className="text-gray-700 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile menu dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden flex flex-col space-y-4 p-4 bg-white shadow-md">
                    <Link
                        to="/"
                        className="text-lg font-medium text-gray-700 hover:text-blue-600 transition duration-200"
                        onClick={() => setIsMobileMenuOpen(false)} 
                    >
                        Home
                    </Link>
                    <Link
                        to="/leaderboard"
                        className="text-lg font-medium text-gray-700 hover:text-blue-600 transition duration-200"
                        onClick={() => setIsMobileMenuOpen(false)} 
                    >
                        Leaderboard
                    </Link>
                    <Link
                        to="/new"
                        className="text-lg font-medium text-gray-700 hover:text-blue-600 transition duration-200"
                        onClick={() => setIsMobileMenuOpen(false)}  
                    >
                        New Poll
                    </Link>
                </div>
            )}
        </nav>
    );
};

const mapStateToProps = ({ authedUser }) => ({
    authenticatedUserId: authedUser.id,
});

export default connect(mapStateToProps)(Nav);
