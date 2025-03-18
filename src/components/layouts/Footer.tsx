/** @format */
import { Parallax } from "react-scroll-parallax";
import HeroImageTwo from "../../assets/home/home-2.jpg";
import { Outlet } from "react-router-dom";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import SocialIcon from "../elements/SocialIcon";

const links = [
	{
		name: "instagram",
		url: "#",
		icon: <FaInstagram size={20} />,
	},
	{
		name: "Twitter",
		url: "#",
		icon: <FaTwitter size={20} />,
	},
];

const FooterLayout = () => {
	return (
		<>
			<Outlet />
			<div className='relative h-[60vh] bg-black grid grid-cols-1 overflow-hidden p-10'>
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

				<div className='relative flex flex-col items-center justify-between text-white w-full max-w-[1028px] mx-auto'>
					<div></div>
					<div>
						<p className='mb-10 text-center'>
							LIPPO MALL PURI U1 - GF62, Jl. Puri Indah Raya, RT.3/RW.2, South
							Kembangan, Jakarta 11610
						</p>

						<div className='flex gap-10 justify-center'>
							{links.map((item, index) => (
								<SocialIcon
									icon={item.icon}
									platform={item.name}
									url={item.url}
									key={index}
								/>
							))}
						</div>
					</div>
					<div className='max-w-[1028px] mx-auto w-full'>
						<div className='relative bg-white h-[0.5px]'></div>

						<p className='relative text-white text-end mt-5'>
							© 2025 Klesis Bocilos All Right Reserved.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default FooterLayout;
