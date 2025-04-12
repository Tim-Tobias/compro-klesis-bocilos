/**
 * eslint-disable @typescript-eslint/no-explicit-any
 *
 * @format
 */

import { useEffect, useState } from "react";
import { Parallax } from "react-scroll-parallax";
import Marquee from "react-fast-marquee";
import "swiper/css";
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from "swiper/react";
import { AnimatePresence, motion } from "framer-motion";
import { useGalleryStore } from "../../store/gallery";

const Gallery = () => {
	const { background, images } = useGalleryStore();

	const [showSwiper, setShowSwiper] = useState(false);
	const [startIndex, setStartIndex] = useState(0);

	const handleImageClick = (index: number) => {
		setStartIndex(index);
		setShowSwiper(true);
	};

	useEffect(() => {
		if (showSwiper) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}, [showSwiper]);

	return (
		<div id="gallery" className='w-full h-full lg:h-[130vh] px-5 py-10 relative overflow-hidden'>
			<Parallax
				className='w-full h-full absolute top-0 left-0'
				translateY={[-20, 20]}
				speed={1}>
				<img
					alt={background?.description}
					className='absolute top-0 left-0 w-full h-full object-cover'
					src={background?.file_path}
				/>
				<div className='absolute w-full h-full top-0 left-0 bg-black opacity-70'></div>
			</Parallax>

			<Marquee>
				{images.map((image, idx) => (
					<div className='cursor-pointer w-full h-screen'>
						<img
							onClick={() => handleImageClick(idx)}
							className='w-full h-full object-cover'
							src={image.file_path}
							alt=''
						/>
					</div>
				))}
			</Marquee>

			<AnimatePresence>
				{showSwiper && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className='fixed inset-0 z-50 flex items-center justify-center'>
						<div className='w-[90%] md:w-[70%] lg:w-[80%] bg-white rounded-lg overflow-hidden'>
							<div
								onClick={() => setShowSwiper(false)}
								className='bg-black bg-opacity-50 absolute w-full h-full top-0 left-0'></div>

							<motion.div
								initial={{ scale: 0.9, y: 50, opacity: 0 }}
								animate={{ scale: 1, y: 0, opacity: 1 }}
								exit={{ scale: 0.9, y: 50, opacity: 0 }}
								transition={{ type: "spring", stiffness: 300, damping: 25 }}>
								<Swiper
									initialSlide={startIndex}
									navigation
									pagination={{ clickable: true }}>
									{images.map((img, idx) => (
										<SwiperSlide key={idx}>
											<img
												src={img.file_path}
												alt={img.description}
												className='w-full h-[600px] object-cover'
											/>
										</SwiperSlide>
									))}
								</Swiper>
							</motion.div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default Gallery;
