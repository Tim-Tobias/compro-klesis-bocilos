/**
 * eslint-disable react-hooks/rules-of-hooks
 *
 * @format
 */

/** @format */

import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Parallax } from "react-scroll-parallax";
import axios from "../../services/axios-client";
import { ImageItem } from "../../model/Image";
import { useSignatureTransforms } from "../../hooks/useTransforms";
import { FileItem } from "../../model/File";

const Ambience = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	const [images, setImages] = useState<ImageItem[]>([]);
	const [highlight, setHighlight] = useState<ImageItem>();
	const [background, setBackground] = useState<ImageItem>();
	const [file, setFile] = useState<FileItem>();

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "center center"],
	});

	useEffect(() => {
		const fetchHomeSection = async () => {
			try {
				const res = await axios.get("/menu-section");
				const data = res.data.images;
				const bg = res.data.background;
				const file = res.data.file;

				const highlightedItem = data.find(
					(item: ImageItem) => item.highlight === 1
				);
				const imagesData = data.filter(
					(item: ImageItem) => item.highlight !== 1
				);

				setHighlight(highlightedItem);

				setImages(imagesData);
				setBackground(bg);
				setFile(file);
			} catch (error) {
				console.log(error);
			}
		};

		fetchHomeSection();
	}, []);

	const transforms = useSignatureTransforms(scrollYProgress, 5);

	return (
		<div className='relative bg-black grid grid-cols-1 overflow-clip lg:h-auto pt-18 pb-10 px-5'>
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

			<div className='h-[1000px] lg:h-auto'>
				<h1
					data-aos='fade-down'
					data-aos-delay='600'
					className='relative text-[3rem] lg:text-[4.5rem] text-white h-fit uppercase text-center mb-10 lg:mb-30'>
					Tribute to the product, genuine <br />
					<span className='text-[#3674b5]'> tastes</span> .
				</h1>

				{images && (
					<div className='relative w-full lg:hidden px-5 text-white my-10'>
						{images.map((src, index) => {
							return (
								<motion.div
									key={index}
									style={{ y: index * 50 }}
									className='absolute w-full max-w-[450px] shadow-2xl top-0 left-1/2 mx-auto overflow-hidden rounded-sm -translate-x-1/2'>
									<img
										data-aos='fade-left'
										data-aos-delay={index * 500}
										src={src.file_path}
										alt={src.description}
										className='w-full h-full object-cover'
									/>
								</motion.div>
							);
						})}
					</div>
				)}
			</div>

			<div
				data-aos='fade-left'
				data-aos-delay='300'
				className='text-white w-full h-fit self-end lg:hidden relative'>
				<motion.div className='relative w-full max-w-[450px] mx-auto h-[600px] bg-white shadow-lg rounded-sm flex items-center text-black '>
					{file && (
						<iframe
							src={file.file_path + "?#view=fitH"}
							width='100%'
							height='100%'
							style={{ border: "none" }}></iframe>
					)}
				</motion.div>
			</div>

			<div ref={containerRef} className='lg:h-[200vh] hidden lg:block'>
				<div className='sticky top-20 grid grid-cols-2 gap-5 h-screen'>
					<div className='w-full relative'>
						{highlight && (
							<div
								style={{ zIndex: images.length + 1 }}
								className='absolute lg:w-[406px] h-full right-0 left-0 bg-white shadow-lg overflow-hidden rounded-sm'>
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
