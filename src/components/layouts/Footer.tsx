/** @format */
import { Parallax } from "react-scroll-parallax";
import { Outlet } from "react-router-dom";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import SocialIcon from "../elements/SocialIcon";
import { useSocialMediaStore } from "../../store/social";
import { useFooterSectionStore } from "../../store/footer";

const FooterLayout = () => {
	const { socialMedias } = useSocialMediaStore();
	const { content, background } = useFooterSectionStore();

	const instagram = socialMedias.find(item => item.name === "instagram");
	const twitter = socialMedias.find(item => item.name === "twitter");

	const links = [
		{
			name: instagram?.name,
			url: instagram?.path,
			icon: <FaInstagram size={20} />,
		},
		{
			name: twitter?.name,
			url: twitter?.path,
			icon: <FaTwitter size={20} />,
		},
	];

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
						src={background?.file_path}
					/>
					<div className='absolute w-full h-full top-0 left-0 bg-black opacity-70'></div>
				</Parallax>

				<div className='relative flex flex-col items-center justify-between text-white w-full max-w-[1028px] mx-auto'>
					<div></div>
					<div>
						<div
							className='mt-10 mb-10 text-center'
							data-aos='fade-left'
							data-aos-delay='500'
							dangerouslySetInnerHTML={{ __html: String(content?.content) }}
						/>

						<div className='flex gap-10 justify-center'>
							{links.map((item, index) => (
								<SocialIcon
									icon={item.icon}
									platform={item?.name}
									url={item?.url}
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
