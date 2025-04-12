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
import { useHomeSectionStore } from "./store/home";
import { useAboutStore } from "./store/about";
import { useSignatureStore } from "./store/signature";
import { useTeamSectionStore } from "./store/team";
import { useAmbienceSectionStore } from "./store/ambience";
import { useBlogStore } from "./store/blog";
import BlogDetail from "./presentations/Blog";
import { useSocialMediaStore } from "./store/social";
import { useFooterSectionStore } from "./store/footer";
import { useGalleryStore } from "./store/gallery";

const App = () => {
	const [loading, setLoading] = useState(true);
	const { fetchHomeImages } = useHomeSectionStore();
	const { fetchAboutSection } = useAboutStore();
	const { fetchSignatureSection } = useSignatureStore();
	const { fetchTeamSection } = useTeamSectionStore();
	const { fetchMenuSection } = useAmbienceSectionStore();
	const { fetchBlogs, fetchBlogCategories } = useBlogStore();
	const { fetchSocialMedia } = useSocialMediaStore();
	const { fetchFooterSection } = useFooterSectionStore();
	const { fetchGallerySection } = useGalleryStore();

	useEffect(() => {
		const fetchAll = async () => {
			try {
				await Promise.all([
					fetchHomeImages(),
					fetchAboutSection(),
					fetchSignatureSection(),
					fetchTeamSection(),
					fetchMenuSection(),
					fetchBlogs(),
					fetchBlogCategories(),
					fetchSocialMedia(),
					fetchFooterSection(),
					fetchGallerySection(),
				]);
			} catch (error) {
				console.error(error);
			} finally {
				setLoading(false);
				AOS.init({ duration: 1000 });
			}
		};

		fetchAll();
	}, []);

	return (
		<div>
			{loading ? (
				<motion.div
					className='fixed inset-0 flex flex-col gap-5 items-center justify-center bg-white text-white z-50'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}>
					<img src={LogoHitam} className='w-[300px]' />
				</motion.div>
			) : (
				<ParallaxProvider>
					<BrowserRouter>
						<Routes>
							<Route path='/' element={<HeaderLayout />}>
								<Route path='/' element={<FooterLayout />}>
									<Route path='/' element={<Home />} />

									<Route path='/blog/:id' element={<BlogDetail />} />
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
