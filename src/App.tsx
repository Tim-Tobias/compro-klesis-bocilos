/** @format */

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./presentations/Home";
import HeaderLayout from "./components/layouts/Header";
import { ParallaxProvider } from "react-scroll-parallax";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import LogoHitam from "./assets/logo/LOGO.png";
import FooterLayout from "./components/layouts/Footer";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { ImageItem } from "./model/Image";
import axios from "./services/axios-client";

const App = () => {
	const [loading, setLoading] = useState(true);
	const [progress, setProgress] = useState(0);
	const [images, setImages] = useState<ImageItem[]>([]);

	useEffect(() => {
		const interval = setInterval(() => {
			setProgress(oldProgress => {
				if (oldProgress >= 100) {
					clearInterval(interval);
					return 100;
				}
				return oldProgress + 5;
			});
		}, 100);

		setTimeout(() => {
			setLoading(false);
			AOS.init({ duration: 1000 });
		}, 2500);

		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		const fetchHomeSection = async () => {
			try {
				const res = await axios.get("/home-section");
				const data = res.data.images;
				setImages(data);
			} catch (error) {
				console.log(error);
			}
		};

		fetchHomeSection();
	}, []);

	return (
		<div>
			{loading ? (
				<motion.div
					className='fixed inset-0 flex flex-col gap-5 items-center justify-center bg-white text-white z-50'
					initial={{ opacity: 1 }}
					animate={{ opacity: 0 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 1, delay: 2 }}>
					<img src={LogoHitam} className='w-[300px]' />
					<div className='w-64 h-1 bg-gray-300 rounded-full overflow-hidden'>
						<motion.div
							className='h-full bg-blue-500'
							initial={{ width: "0%" }}
							animate={{ width: `${progress}%` }}
							transition={{ ease: "linear" }}
						/>
					</div>
				</motion.div>
			) : (
				<ParallaxProvider>
					<BrowserRouter>
						<Routes>
							<Route path='/' element={<HeaderLayout />}>
								<Route path='/' element={<FooterLayout />}>
									<Route path='/' element={<Home images={images} />} />
								</Route>
							</Route>
						</Routes>
					</BrowserRouter>
				</ParallaxProvider>
			)}
		</div>
	);
};

export default App;
