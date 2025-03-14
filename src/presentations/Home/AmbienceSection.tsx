/** @format */

import BeefRendang from "../../assets/menu/signature/beef-rendang.jpg";
import DasanaSalad from "../../assets/menu/signature/dasana-salad.jpg";
import BetawiTenderloin from "../../assets/menu/signature/soto-betawi-tenderloin.jpg";
import { useScroll, useTransform, motion } from "framer-motion";
import { AiFillBook } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";

const signatureMenus = [
	{
		url: BeefRendang,
	},
	{
		url: DasanaSalad,
	},
	{
		url: BetawiTenderloin,
	},
];

function getWindowDimensions() {
	const { innerWidth: width, innerHeight: height } = window;
	return {
		width,
		height,
	};
}

const Ambience = () => {
	const containerRef = useRef<HTMLDivElement>(null);

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start end", "end center"],
	});

	const [windowDimensions, setWindowDimensions] = useState(
		getWindowDimensions()
	);

	useEffect(() => {
		function handleResize() {
			setWindowDimensions(getWindowDimensions());
		}

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	console.log(windowDimensions);

	return (
		<div className='h-[300vh] pt-20 pb-[21rem] bg-gray-900 hidden lg:block'>
			<h1 className='text-[4.5rem] text-white uppercase text-center mb-30'>
				Tribute to the product, genuine <br />
				<span className='text-[#3674b5]'> tastes</span> .
			</h1>

			<div ref={containerRef} className='h-full contain-paint'>
				<div className='sticky top-20 w-full'>
					<div
						style={{ zIndex: signatureMenus.length + 1 }}
						className='absolute w-[406px] h-[88vh] top-auto bottom-auto right-0 left-0 bg-white shadow-lg overflow-hidden rounded-lg'>
						<img
							className='w-full h-full object-cover'
							src={BetawiTenderloin}
							alt=''
						/>
					</div>

					{signatureMenus.map((src, index) => {
						const x = useTransform(
							scrollYProgress,
							[0, 1],
							[`${(index + 1) * 100}%`, `${index * 1}%`]
						);

						return (
							<motion.div
								key={index}
								style={{ x, zIndex: signatureMenus.length - index }}
								className='absolute w-[406px] h-[88vh] top-0 left-0 bg-white shadow-lg overflow-hidden rounded-lg'>
								<img
									src={src.url}
									alt={`Image ${index + 1}`}
									className='w-full h-full object-cover'
								/>
							</motion.div>
						);
					})}

					<motion.div
						style={{
							x: useTransform(
								scrollYProgress,
								[0, 1],
								[
									`${signatureMenus.length * 100}%`,
									`${signatureMenus.length / windowDimensions.width - 10}rem`,
								]
							),
							zIndex: signatureMenus.length + 1,
						}}
						className='absolute w-full h-[88vh] left-0 top-0 bg-white shadow-lg overflow-hidden rounded-lg p-6 flex items-center pl-14 text-black text-xl font-bold'>
						<div className='w-[30%] flex flex-col gap-5 items-center justify-center'>
							<AiFillBook className='text-5xl' />
							<p
								style={{
									fontSize: `${windowDimensions.width / 1500}rem`,
								}}
								className='text-center'>
								At Tastavents, the ingredient is king. Our menu presents a
								selection of dishes that capture the essence of the
								Mediterranean, with authentic and fresh flavors.
							</p>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default Ambience;
