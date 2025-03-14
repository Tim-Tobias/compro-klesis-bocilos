/** @format */

import React from "react";

interface ButtonProps {
	as?: "button" | "a";
	href?: string;
	onClick?: () => void;
	className?: string;
	children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
	as = "button",
	href,
	onClick,
	className,
	children,
}) => {
	const baseClasses =
		"border border-white text-white bg-transparent cursor-pointer py-2 px-10 rounded transition-all";

	if (as === "a" && href) {
		return (
			<a href={href} className={`${baseClasses} ${className}`}>
				{children}
			</a>
		);
	}

	return (
		<button onClick={onClick} className={`${baseClasses} ${className}`}>
			{children}
		</button>
	);
};

export default Button;
