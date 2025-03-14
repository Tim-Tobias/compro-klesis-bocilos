/** @format */

import { NavLink, NavLinkProps } from "react-router-dom";

interface LinkProps extends NavLinkProps {}

const Link = (props: LinkProps) => {
	const { children, ...otherProps } = props;

	return <NavLink {...otherProps}>{children}</NavLink>;
};

export default Link;
