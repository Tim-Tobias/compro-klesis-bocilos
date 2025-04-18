/** @format */

import { ReactNode } from "react";

export type MenuItemProps = {
	title: string;
	href: string;
	isShow?: boolean;
	isExternal: boolean;
	onClick?: () => void;
	className?: string;
	children?: ReactNode;
	eventName?: string;
	backgroundColor?: string;
	isHover?: boolean;
};
