/** @format */

import BeefRendang from "../../assets/menu/signature/beef-rendang.jpg";
import DasanaSalad from "../../assets/menu/signature/dasana-salad.jpg";
import BetawiTenderloin from "../../assets/menu/signature/soto-betawi-tenderloin.jpg";
import { AiFillBook } from "react-icons/ai";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const signatureMenus = [
	{
		url: BeefRendang,
		from: 10,
		to: 0,
		speed: 0.5,
	},
	{
		url: DasanaSalad,
		from: 30,
		to: 0,
		speed: 0.5,
	},
	{
		url: BetawiTenderloin,
		from: 60,
		to: 0,
		speed: 0.1,
	},
];

const Ambience = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["center center", "end end"],
	});

	const width = useTransform(scrollYProgress, [0, 0.7], [406, 90]);

	return (
		<>
			<div className='relative bg-gray-900 pt-10 px-5 overflow-hidden'>
				<h1 className='text-[4.5rem] text-white uppercase text-center my-10'>
					Tribute to the product, genuine <br />
					<span className='text-[#3674b5]'> tastes</span> .
				</h1>
			</div>
			<div className='relative w-full h-[250vh] bg-gray-900 flex gap-10 contain-paint pl-5 py-10'>
				<div ref={containerRef} className='relative h-full flex'>
					<div className='sticky overflow-hidden top-[100px] w-[406px] h-[620px] bg-white text-black flex items-center justify-center text-xl font-bold shadow-lg'>
						<img
							className='w-full h-full object-cover'
							src={BetawiTenderloin}
							alt=''
						/>
					</div>
					{signatureMenus.map((text, index) => (
						<motion.div
							style={{ width }}
							key={index}
							className='sticky top-[100px] h-[620px] overflow-hidden bg-white text-black flex items-center justify-center text-xl font-bold shadow-lg'>
							<img
								className='w-full h-full object-cover'
								src={text.url}
								alt=''
							/>
						</motion.div>
					))}
				</div>
			</div>
		</>
	);
};

export default Ambience;
