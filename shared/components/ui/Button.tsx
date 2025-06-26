import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, className = "", ...props }) => (
  <button
    className={`bg-green-700 hover:bg-green-800 text-white text-sm font-medium rounded px-4 py-1 border border-green-900 transition-colors duration-200 ${className}`}
    {...props}
  >
    {children}
  </button>
);

export default Button;