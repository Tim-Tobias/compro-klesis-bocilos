/** @format */

import Logo from "../elements/Logo";
import Menus from "./Sidebar/Menu";
import { motion } from "framer-motion";
import useScrollPosition from "../../hooks/useScrollPosition";
import { Outlet } from "react-router-dom";

const HeaderLayout = () => {
	const scrollY = useScrollPosition();

	return (
		<>
			<header className='w-full z-20 px-5 py-5 fixed top-0 left-0'>
				<div className='mx-auto max-w-[1280px]'>
					<motion.div
						initial={{ y: -100 }}
						animate={{
							y: scrollY > 0 ? 0 : -100,
						}}
						transition={{
							type: "spring",
							stiffness: 300,
							damping: 30,
						}}
						className='absolute w-full h-full bg-white shadow-lg top-0 left-0 -z-10'></motion.div>
					<div className='flex items-center justify-between'>
						<Logo classnames='w-40' />

						<Menus />
					</div>
				</div>
			</header>
			<Outlet />
		</>
	);
};

export default HeaderLayout;
