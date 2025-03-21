/** @format */

import BeefRendang from "../../assets/menu/signature/beef-rendang.jpg";
import DasanaSalad from "../../assets/menu/signature/dasana-salad.jpg";
import BetawiTenderloin from "../../assets/menu/signature/soto-betawi-tenderloin.jpg";
import { useScroll, useTransform, motion } from "framer-motion";
import { AiFillBook } from "react-icons/ai";
import { useRef } from "react";
import HeroImageTwo from "../../assets/home/home-2.jpg";
import { Parallax } from "react-scroll-parallax";
import { Worker, Viewer } from "@react-pdf-viewer/core";

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
		offset: ["start start", "end end"],
	});

	return (
		<div className='relative h-[220vh] bg-black grid grid-cols-1 overflow-clip lg:h-auto pt-18 pb-10 px-5'>
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

			<div>
				<h1
					data-aos='fade-down'
					data-aos-delay='600'
					className='relative text-[3rem] lg:text-[4.5rem] text-white h-fit uppercase text-center mb-10 lg:mb-30'>
					Tribute to the product, genuine <br />
					<span className='text-[#3674b5]'> tastes</span> .
				</h1>

				<div className='relative w-full lg:hidden px-5 text-white my-10'>
					{signatureMenus.map((src, index) => {
						return (
							<motion.div
								key={index}
								style={{ y: index * 50 }}
								className='absolute w-full max-w-[450px] shadow-2xl top-0 left-1/2 mx-auto overflow-hidden rounded-sm -translate-x-1/2'>
								<img
									data-aos='fade-left'
									data-aos-delay={index * 500}
									src={src.url}
									alt={`Image ${index + 1}`}
									className='w-full h-full object-cover'
								/>
							</motion.div>
						);
					})}
				</div>
			</div>

			<div
				data-aos='fade-left'
				data-aos-delay='300'
				className='text-white w-full h-fit self-end lg:hidden relative'>
				<motion.div className='relative w-full max-w-[450px] mx-auto h-[300px] bg-white shadow-lg rounded-sm flex items-center text-black '>
					<Worker workerUrl='https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js'>
						<div className='w-full h-full'>
							<Viewer fileUrl='/1. Formulir Permohonan EFIN.pdf' />
						</div>
					</Worker>
				</motion.div>
			</div>

			<div ref={containerRef} className='lg:h-[200vh] hidden lg:block'>
				<div className='sticky top-20'>
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
							[`${(index + 1) * 100}%`, `${(index + 1) * 14}%`]
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
						className='relative w-[40%] h-[88vh] ml-auto left-0 top-0 bg-white shadow-lg rounded-sm flex items-center text-black text-xl font-bold'>
						<div className='w-full h-full'>
							<Worker workerUrl='https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js'>
								<div className='w-full h-full'>
									<Viewer fileUrl='/1. Formulir Permohonan EFIN.pdf' />
								</div>
							</Worker>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default Ambience;
