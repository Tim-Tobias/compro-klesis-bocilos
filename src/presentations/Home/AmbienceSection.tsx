/**
 * eslint-disable react-hooks/rules-of-hooks
 *
 * @format
 */

/** @format */

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { Parallax } from "react-scroll-parallax";
import { useSignatureTransforms } from "../../hooks/useTransforms";
import { useAmbienceSectionStore } from "../../store/ambience";

const Ambience = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	const { background, file, highlight, images } = useAmbienceSectionStore();

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "center center"],
	});

	const transforms = useSignatureTransforms(scrollYProgress, 5);

	return (
		<div id="ambience" className='relative bg-black overflow-clip w-full h-full lg:h-fit pt-18 pb-10'>
			<Parallax
				className='w-full h-full absolute top-0 left-0'
				translateY={[-20, 20]}
				speed={1}>
				<img
					className='absolute top-0 left-0 w-full h-full object-cover'
					src={background?.file_path}
					alt={background?.description}
				/>
				<div className='absolute w-full h-full top-0 left-0 bg-black opacity-70'></div>
			</Parallax>

			<div className='w-full'>
				<h1
					data-aos='fade-down'
					data-aos-delay='600'
					className='relative text-[3rem] lg:text-[4.5rem] text-white h-fit uppercase text-center mb-10 lg:mb-30'>
					Tribute to the product, genuine <br />
					<span className='text-[#3674b5]'> tastes</span> .
				</h1>

				{images && (
					<div className='relative w-full h-full grid grid-cols-1 gap-5 lg:hidden px-5 text-white my-10'>
						{highlight && (
							<div className='w-full max-w-[450px] shadow-lg rounded-sm'>
								<img
									data-aos='fade-left'
									className='w-full h-full object-cover'
									src={highlight.file_path}
									alt={highlight.description}
								/>
							</div>
						)}

						{images.map((src, index) => {
							return (
								<div
									key={index}
									className='w-full max-w-[450px] shadow-2xl mx-auto rounded-sm'>
									<img
										data-aos='fade-left'
										data-aos-delay={index * 500}
										src={src.file_path}
										alt={src.description}
										className='w-full h-full object-cover'
									/>
								</div>
							);
						})}

						<div
							data-aos='fade-left'
							data-aos-delay='300'
							className='text-white w-full'>
							<motion.div className='w-full max-w-[450px] mx-auto h-[600px] shadow-lg rounded-sm text-black px-2'>
								{file && (
									<iframe
										src={file.file_path + "?#view=fitH"}
										width='100%'
										height='100%'
										style={{ border: "none" }}></iframe>
								)}
							</motion.div>
						</div>
					</div>
				)}
			</div>

			<div ref={containerRef} className='h-full lg:h-[200vh] hidden lg:block'>
				<div className='sticky top-20 grid grid-cols-2 gap-5 lg:h-screen'>
					<div className='w-full relative'>
						{highlight && (
							<div className='absolute z-20 lg:w-[406px] h-full right-0 left-0 bg-white shadow-lg overflow-hidden rounded-sm'>
								<img
									className='w-full h-full object-cover'
									src={highlight.file_path}
									alt={highlight.description}
								/>
							</div>
						)}

						{images.length > 0 &&
							images.map((src, index) => {
								return (
									<motion.div
										key={index}
										style={{
											x: transforms[index],
											zIndex: images.length - index,
										}}
										className='absolute lg:w-[406px] h-full top-0 left-0 bg-white shadow-lg overflow-hidden rounded-sm'>
										<img
											src={src.file_path}
											alt={src.description}
											className='w-full h-full object-cover'
										/>
									</motion.div>
								);
							})}
					</div>

					<motion.div
						style={{
							x: useTransform(
								scrollYProgress,
								[0, 1],
								[`${(images.length + 1) * 100}%`, `0%`]
							),
							zIndex: images.length + 1,
						}}
						className='relative w-full h-screen ml-auto left-0 top-0 shadow-lg rounded-sm flex items-center text-black text-xl font-bold'>
						{file && (
							<iframe
								src={file.file_path + "?#view=fitH"}
								width='100%'
								height='100%'
								style={{ border: "none" }}></iframe>
						)}
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default Ambience;
