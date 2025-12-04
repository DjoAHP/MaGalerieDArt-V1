import React from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  active,
  className,
  children,
  ...props
}) => {
  return (
    <button
      {...props}
      className={clsx(
        "flex items-center justify-center px-3 py-2 rounded-xl text-sm font-medium transition-colors duration-200",
        "bg-white bg-opacity-5 hover:bg-opacity-10",
        "border border-white border-opacity-10",
        "backdrop-blur-md text-white",
        {
          "opacity-50 cursor-not-allowed": props.disabled,
          "bg-opacity-20 border-opacity-20": active,
        },
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
