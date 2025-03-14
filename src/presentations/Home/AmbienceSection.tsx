/** @format */

import BeefRendang from "../../assets/menu/signature/beef-rendang.jpg";
import DasanaSalad from "../../assets/menu/signature/dasana-salad.jpg";
import BetawiTenderloin from "../../assets/menu/signature/soto-betawi-tenderloin.jpg";
import { useScroll, useTransform, motion } from "framer-motion";
import { AiFillBook } from "react-icons/ai";
import { useRef } from "react";
import HeroImageTwo from "../../assets/home/home-2.jpg";
import { Parallax } from "react-scroll-parallax";

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
	{
		url: BetawiTenderloin,
	},
	{
		url: BetawiTenderloin,
	},
];

const Ambience = () => {
	const containerRef = useRef<HTMLDivElement>(null);

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["center center", "end end"],
	});

	return (
		<div className='relative contain-paint py-18 hidden lg:block px-5'>
			<Parallax
				className='w-full h-full absolute top-0 left-0 contain-paint'
				translateY={[-20, 20]}
				speed={1}>
				<img
					className='absolute top-0 left-0 w-full h-full object-cover'
					src={HeroImageTwo}
				/>
				<div className='absolute w-full h-full top-0 left-0 bg-black opacity-70'></div>
			</Parallax>

			<h1 className='relative text-[4.5rem] text-white uppercase text-center mb-30'>
				Tribute to the product, genuine <br />
				<span className='text-[#3674b5]'> tastes</span> .
			</h1>

			<div ref={containerRef} className='h-[200vh] contain-paint'>
				<div className='sticky top-20 w-full'>
					<div
						style={{ zIndex: signatureMenus.length + 1 }}
						className='absolute w-[406px] h-[88vh] right-0 left-0 bg-white shadow-lg overflow-hidden rounded-sm'>
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
							[`${(index + 1) * 100}%`, `${index * 20}%`]
						);

						return (
							<motion.div
								key={index}
								style={{ x, zIndex: signatureMenus.length - index }}
								className='absolute w-[406px] h-[88vh] top-0 left-0 bg-white shadow-lg overflow-hidden rounded-sm'>
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
								[`${(signatureMenus.length + 1) * 100}%`, `0%`]
							),
							zIndex: signatureMenus.length + 1,
						}}
						className='w-[35%] h-[88vh] ml-auto left-0 top-0 bg-white shadow-lg overflow-hidden rounded-sm p-6 flex items-center text-black text-xl font-bold'>
						<div className='flex flex-col w-[80%] mx-auto gap-5 items-center justify-center'>
							<AiFillBook className='text-5xl' />
							<p className='text-center text-sm'>
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
