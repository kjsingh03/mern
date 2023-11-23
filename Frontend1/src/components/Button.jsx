import React from "react";
import { Link } from "react-router-dom";

function Button({ to="/",className, children }) {
    return (
        <>
            <button>
                <div className={`text-center bg-black rounded-[2vw] font-extrabold text-[1.02vw] text-[#F3F3F1] px-[.6vw] py-[.8vw] ${className}`}>
                {children}
            </div>
            </button>
        </>
    );
}

export default Button;
