/** @format */

import { useEffect } from "react";
import NavButton from "../../elements/NavButton";
import { AnimatePresence } from "framer-motion";
import { useMenu } from "../../../store/menu";
import SideMenu from "./SideMenu";

const Nav = () => {
	const { isOpen, toggleMenu } = useMenu();

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "false";
		}

		return () => {
			document.body.style.overflow = "auto";
		};
	}, [isOpen]);

	return (
		<div>
			<NavButton isBurgerClicked={isOpen} setIsBurgerClicked={toggleMenu} />

			<AnimatePresence mode='wait' initial={false}>
				{isOpen && <SideMenu />}
			</AnimatePresence>
		</div>
	);
};

export default Nav;
