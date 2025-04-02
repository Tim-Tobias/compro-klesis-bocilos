/** @format */

import { motion } from "framer-motion";
import { useEffect } from "react";
import { useMenu } from "../../../store/menu";
import MagneticProvider from "../../../providers/MagneticProvider";
import { MENU_ITEMS } from "../../../common/constant";
import Separator from "../../elements/Separator";
import { AiOutlineClose } from "react-icons/ai";

interface SideMenuProps {
	closeMenu: () => void;
}

const SideMenu = (props: SideMenuProps) => {
	const { closeMenu } = props;

	const { hideMenu } = useMenu();

	const handleClose = () => {
		hideMenu();
	};

	useEffect(() => {
		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				hideMenu();
			}
		};

		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, [hideMenu]);

	const scrolltoSection = function (element_id: string) {
		const element = document.querySelector(element_id);
		element?.scrollIntoView({
			behavior: "smooth",
			block: "start",
			inline: "nearest",
		});
		hideMenu();
	};

	return (
		<>
			<motion.div
				onClick={handleClose}
				className='nav-menu-bg absolute left-0 top-0 min-h-screen w-full bg-gradient-to-r from-black/[.13] via-black/[.16] to-black/[.35]'></motion.div>
			<motion.div
				initial={{
					x: "150%",
				}}
				animate={{ x: 0 }}
				exit={{ x: "150%" }}
				transition={{
					type: "tween",
					ease: "circInOut",
					duration: 1,
					delayChildren: 3,
				}}
				className='pointer-events-auto absolute right-0 top-0 flex min-h-screen w-full max-w-lg flex-col justify-between pb-12 pt-[clamp(3.5rem,10vh,5rem)] text-6xl text-white will-change-transform [-webkit-perspective:1000] px-5 lg:px-10 bg-white'>
				<div className='dark:text-slate-700'>
					<p className='text-xl font-bold text-slate-700'>Our Menu.</p>
					<Separator />
					<div className='pt-10 space-y-8 text-[45px] lg:text-[38px]'>
						{MENU_ITEMS.map(
							(item, index) =>
								item.isShow && (
									<div
										data-aos='fade-left'
										data-aos-duration='2000'
										data-aos-delay={index * 300}
										key={index}
										className='cursor-pointer w-fit text-slate-700'
										onClick={() => scrolltoSection(item.href)}>
										<MagneticProvider>{item.title}</MagneticProvider>
									</div>
								)
						)}
					</div>

					<div className='absolute top-5 right-5 text-3xl'>
						<AiOutlineClose onClick={closeMenu} />
					</div>
				</div>
			</motion.div>
		</>
	);
};

export default SideMenu;
