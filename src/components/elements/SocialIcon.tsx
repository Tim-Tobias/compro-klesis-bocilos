/** @format */

interface SocialIconProps {
	platform: string;
	url: string;
	icon: React.ReactNode;
}

const SocialIcon = ({ platform, url, icon }: SocialIconProps) => {
	return (
		<a
			key={platform}
			href={url}
			target='_blank'
			rel='noopener noreferrer'
			className='text-white hover:text-gray-400'>
			{icon}
		</a>
	);
};

export default SocialIcon;
