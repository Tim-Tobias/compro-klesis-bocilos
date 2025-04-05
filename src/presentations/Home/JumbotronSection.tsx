/** @format */
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-fade";
import { useState } from "react";
import Button from "../../components/elements/Button";
import { ImageItem } from "../../model/Image";

const Jumbotron = ({ images }: { images: ImageItem[] }) => {
	const [activeIndex, setActiveIndex] = useState(0);

	const scrolltoSection = function (element_id: string) {
		console.log("check");
		const element = document.querySelector(element_id);
		element?.scrollIntoView({
			behavior: "smooth",
			block: "start",
			inline: "nearest",
		});
	};

	return (
		<div className='overflow-hidden relative'>
			<Swiper
				autoplay={{
					delay: 2500,
				}}
				modules={[EffectFade, Autoplay]}
				effect='fade'
				slidesPerView={1}
				loop={true}
				onSlideChange={swiper =>
					setActiveIndex(swiper.activeIndex + Date.now())
				}>
				{images.map((item, index) => (
					<SwiperSlide key={index}>
						<div className='w-full h-screen relative flex justify-center items-center'>
							<Parallax
								scale={[1, 1.5]}
								className='w-full h-full absolute top-0 left-0'
								translateY={[-20, 20]}
								speed={0.5}>
								<img
									data-aos='fade-in'
									data-aos-delay='100'
									className='absolute top-0 left-0 w-full h-full object-cover'
									src={item.file_path}
								/>
								<div className='absolute w-full h-full top-0 left-0 bg-black opacity-50'></div>
							</Parallax>

							{index < 2 && (
								<div className='relative z-20 text-center lg:max-w-[500px] text-white text-3xl'>
									<Parallax key={activeIndex} scale={[1, 0.9]} speed={0.1}>
										{index === 0 && (
											<motion.h1
												initial={{ opacity: 0, y: -50 }}
												animate={{ opacity: 1, y: 0 }}
												exit={{ opacity: 0, x: -50 }}
												transition={{ duration: 0.5 }}
												className='text-[6rem] tracking-tight leading-20'>
												Welcome Home
											</motion.h1>
										)}

										{index === 1 && (
											<div>
												<motion.h1
													initial={{ opacity: 0, y: -50 }}
													animate={{ opacity: 1, y: 0 }}
													exit={{ opacity: 0, x: -50 }}
													transition={{ duration: 0.5 }}
													className='text-[4rem] lg:text-[6rem] tracking-tight leading-20 mb-10'>
													Welcome To <br /> Klesis Bocilos
												</motion.h1>

												<motion.div
													initial={{ opacity: 0, y: 50 }}
													animate={{ opacity: 1, y: 0 }}
													exit={{ opacity: 0, x: -50 }}
													transition={{ duration: 0.5, delay: 0.3 }}>
													<Button
														as='button'
														onClick={() => scrolltoSection("#about")}
														className='text-sm uppercase cursor-pointer z-30 hover:bg-[#3674b5] hover:border-[#3674b5]'>
														Today's Story
													</Button>
												</motion.div>
											</div>
										)}
									</Parallax>
								</div>
							)}
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Jumbotron;
