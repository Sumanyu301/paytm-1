import React from "react";
import { Link } from "react-router-dom"; // Add the missing import statement for react-router-dom

const Bottom = ({ label, route, text }) => {
    return (
        <div className="text-center">
            {label + " "}
            <Link to={`/${route}`} className="underline"> 
                {text}
            </Link>
        </div>
    );
};

export default Bottom;
