/** @format */

import ParallaxText from "../../components/elements/ParallaxText";

const ParallaxSection = () => {
	return (
		<div className='gauter'>
			<ParallaxText
				baseVelocity={1}
				direction={-500}
				classnames='lg:text-[25rem] opacity-50'>
				Klesis Bocilos Klesis Bocilos
			</ParallaxText>
		</div>
	);
};

export default ParallaxSection;
