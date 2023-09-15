import React from "react";

interface ButtonProps {
    secondary?: boolean;
    fullWidth?: boolean;
    label: string,
    onClick ?: () => void;
}

const Button: React.FC<ButtonProps> = (
    {
        secondary,
        fullWidth,
        label,
        onClick
    }
) => {
    return (
        <button
            onClick={onClick}
            className={`
                ${secondary ? "bg-white" : "bg-[#4285F4]"}
                ${secondary ? "text-black" : "text-white"}
                ${secondary ? " border-black" : ""}
                ${secondary ? " border-2" : ""}
                ${secondary ? "px-4" : " "}
                ${fullWidth ? 'w-full' : 'w-fit'}
                py-3 
                font-bold 
                 rounded-md
                 mt-4
                 font-montserrat
            `}
        >
            {label}
        </button>
    );
}

export default Button;