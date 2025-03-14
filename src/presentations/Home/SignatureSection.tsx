/** @format */
import HeroImageTwo from "../../assets/home/home-2.jpg";
import BeefRendang from "../../assets/menu/signature/beef-rendang.jpg";
import DasanaSalad from "../../assets/menu/signature/dasana-salad.jpg";
import BetawiTenderloin from "../../assets/menu/signature/soto-betawi-tenderloin.jpg";
import { Parallax } from "react-scroll-parallax";

const signatureMenus = [
	{
		url: BeefRendang,
		from: 10,
		to: 0,
		speed: 0.5,
	},
	{
		url: DasanaSalad,
		from: 30,
		to: 0,
		speed: 0.5,
	},
	{
		url: BetawiTenderloin,
		from: 60,
		to: 0,
		speed: 0.1,
	},
];

const Signature = () => {
	return (
		<div className='w-full h-full lg:h-screen py-10 relative overflow-hidden'>
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

			<div className='text-white relative w-full h-full py-15'>
				<div className='text-center'>
					<div className='px-10 py-1 border w-fit mx-auto'>
						<h1 className='text-4xl'>Klesis Signature</h1>
					</div>

					<div className='relative flex flex-col items-center  lg:flex-row w-full h-full justify-between max-w-[1028px] mx-auto mt-20 z-10'>
						{signatureMenus.map((item, index) => (
							<Parallax
								key={index}
								translateY={[item.from, item.to]}
								speed={item.speed}>
								<div className='relative w-full max-w-[300px] h-[350px] overflow-hidden hover:scale-105 transition-transform transition-1000 rounded-xl shadow-lg'>
									<img src={item.url} className='w-full h-full object-cover ' />
								</div>
							</Parallax>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Signature;
