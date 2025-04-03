/**
 * eslint-disable @typescript-eslint/no-explicit-any
 *
 * @format
 */

import { useEffect, useState } from "react";
import HeroImageTwo from "../../assets/home/home-2.jpg";
import BeefRendang from "../../assets/menu/signature/beef-rendang.jpg";
import DasanaSalad from "../../assets/menu/signature/dasana-salad.jpg";
import BetawiTenderloin from "../../assets/menu/signature/soto-betawi-tenderloin.jpg";
import { Parallax } from "react-scroll-parallax";
import ParallaxText from "../../components/elements/ParallaxText";

const signatureMenus = [
	{
		url: BeefRendang,
		from: 50,
		to: 0,
		speed: 0.5,
	},
	{
		url: DasanaSalad,
		from: 150,
		to: 0,
		speed: 0.5,
	},
	{
		url: BetawiTenderloin,
		from: 250,
		to: 0,
		speed: 0.1,
	},
];

const Signature = () => {
	const [selectedItem, setSelectedItem] = useState<any | null>(null);

	useEffect(() => {
		if (selectedItem) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}, [selectedItem]);

	return (
		<div className='w-full h-full lg:h-[130vh] px-5 py-10 relative overflow-hidden'>
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

			<div className='z-10 opacity-80  absolute top-[50%] -translate-y-[50%]'>
				<ParallaxText
					classnames='text-[10rem] lg:text-[18rem] text-white'
					baseVelocity={1}
					direction={-500}>
					Klesis Bocilos
				</ParallaxText>
			</div>

			<div className='text-white relative w-full h-full py-15'>
				<div className='text-center'>
					<div
						data-aos='fade-down'
						data-aos-delay='300'
						className='px-10 py-1 border w-fit mx-auto'>
						<h1 className='text-4xl'>Klesis Signature</h1>
					</div>

					<div className='relative flex lg:hidden flex-col gap-10 items-center  lg:flex-row w-full h-full justify-between max-w-[1028px] mx-auto mt-20 z-10'>
						{signatureMenus.map((item, index) => (
							<div
								key={index}
								data-aos='fade-down'
								data-aos-delay='500'
								className='relative w-full max-w-[300px] h-[350px] overflow-hidden hover:scale-105 transition-transform transition-1000 rounded-xl shadow-lg'>
								<img src={item.url} className='w-full h-full object-cover ' />
							</div>
						))}
					</div>

					<div className='relative hidden lg:flex flex-col items-center gap-5 lg:flex-row w-full h-full justify-between max-w-[1028px] mx-auto mt-20 z-10'>
						{signatureMenus.map((item, index) => (
							<Parallax
								key={index}
								translateY={[item.from, item.to]}
								speed={item.speed}>
								<div
									onClick={() => setSelectedItem(item)}
									data-aos='fade-down'
									data-aos-delay='500'
									className='relative w-full max-w-[500] h-[350px] overflow-hidden hover:scale-105 transition-transform transition-1000 rounded-xl shadow-lg'>
									<img src={item.url} className='w-full h-full object-cover ' />
								</div>
							</Parallax>
						))}
					</div>
				</div>
			</div>

			{selectedItem && (
				<div className='fixed inset-0 flex items-center justify-center z-50'>
					<div
						onClick={() => setSelectedItem(null)}
						className='bg-black opacity-90 absolute top-0 left-0 w-full h-full'></div>
					<div className='bg-white p-5 rounded-md shadow-lg max-w-[500px] w-full relative'>
						<img src={selectedItem.url} className='w-full h-auto rounded-md' />
					</div>
				</div>
			)}
		</div>
	);
};

export default Signature;
