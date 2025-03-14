/** @format */

import Story from "./AboutSection";
import Jumbotron from "./JumbotronSection";
import HeroImageTwo from "../../assets/home/home-2.jpg";
import BeefRendang from "../../assets/menu/signature/beef-rendang.jpg";
import DasanaSalad from "../../assets/menu/signature/dasana-salad.jpg";
import BetawiTenderloin from "../../assets/menu/signature/soto-betawi-tenderloin.jpg";
import { Parallax } from "react-scroll-parallax";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

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

const Home = () => {
	const containerRef = useRef<HTMLDivElement>(null);

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start end", "end center"],
	});

	return (
		<>
			<Jumbotron />
			<Story />
			<div className='w-full h-full lg:h-screen py-10 relative overflow-hidden'>
				<Parallax
					className='w-full h-full absolute top-0 left-0'
					translateY={[-20, 20]}
					speed={1}>
					<img
						className='absolute top-0 left-0 w-full h-full object-cover'
						src={HeroImageTwo}
					/>
					<div className='absolute w-full h-full top-0 left-0 bg-black opacity-70'></div>
				</Parallax>

				<div className='text-white relative w-full h-full py-15'>
					<div className='text-center'>
						<div className='px-10 py-1 border w-fit mx-auto'>
							<h1 className='text-4xl'>Klesis Signature</h1>
						</div>

						<div className='relative flex flex-col items-center  lg:flex-row w-full h-full justify-between max-w-[1028px] mx-auto mt-20 z-10'>
							{signatureMenus.map((item, index) => (
								<Parallax
									key={index}
									translateY={[item.from, item.to]}
									speed={item.speed}>
									<div className='relative w-full max-w-[300px] h-[350px] overflow-hidden hover:scale-105 transition-transform transition-1000 rounded-xl shadow-lg'>
										<img
											src={item.url}
											className='w-full h-full object-cover '
										/>
									</div>
								</Parallax>
							))}
						</div>
					</div>
				</div>
			</div>
			<div className='w-full h-screen'></div>
			{/* <Ambience /> */}

			<div className='h-[300vh] pt-20 pb-60 bg-gray-900 '>
				<h1 className='text-[4.5rem] text-white uppercase text-center my-10'>
					Tribute to the product, genuine <br />
					<span className='text-[#3674b5]'> tastes</span> .
				</h1>

				<div ref={containerRef} className='h-full contain-paint'>
					<div className='sticky top-20 w-full'>
						<div
							style={{ zIndex: signatureMenus.length + 1 }}
							className='absolute w-[406px] left-0 bg-white shadow-lg overflow-hidden rounded-lg'>
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
									className='absolute w-[406px] top-0 left-0 bg-white shadow-lg overflow-hidden rounded-lg'>
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
										`${signatureMenus.length + 4 + 1.5}rem`,
									]
								),
								zIndex: signatureMenus.length + 1,
							}}
							className='absolute w-full left-0 top-0 bg-white shadow-lg overflow-hidden rounded-lg p-6 flex items-center justify-center text-black text-xl font-bold'>
							Test Content
						</motion.div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
