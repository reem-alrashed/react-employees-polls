// Simple PollLogo component using SVG and text
import React from "react";

const PollLogo = () => {
    return (
        <div className="flex items-center space-x-2">
            <svg
                className="h-8 w-8 text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <rect x="3" y="6" width="18" height="12" rx="2" ry="2" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="12" y1="6" x2="12" y2="18" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
            <span className="text-2xl font-semibold text-gray-800">Employee Poll</span>
        </div>
    );
};

export default PollLogo;
