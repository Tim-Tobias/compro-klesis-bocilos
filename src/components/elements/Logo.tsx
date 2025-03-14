/** @format */

import LogoHeaderWhite from "../../assets/logo/LOGO PUTIH.png";
import LogoHeaderBlack from "../../assets/logo/LOGO.png";
import useScrollPosition from "../../hooks/useScrollPosition";
import Link from "./Link";

interface LogoProps {
	classnames?: string;
}

const Logo = ({ classnames }: LogoProps) => {
	const scrollY = useScrollPosition();

	return (
		<Link to='/' className={classnames}>
			<img
				className='w-full h-full object-cover'
				src={scrollY > 0 ? LogoHeaderBlack : LogoHeaderWhite}
			/>
		</Link>
	);
};

export default Logo;
