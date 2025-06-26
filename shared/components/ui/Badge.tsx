import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ children, className = "" }) => (
  <span className={`inline-flex items-center justify-center rounded-full bg-green-700 text-white text-xs font-bold px-2 py-0.5 ${className}`}>
    {children}
  </span>
);

export default Badge;